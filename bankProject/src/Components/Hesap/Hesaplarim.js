import React from 'react';
import { TouchableOpacity, Text, View, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import styles from '../styles.js';

export default class Hesaplarim extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Hesaplar: [],
        }
    }
    hesapGetir = () => {
        const { musteriNo } = this.props.navigation.state.params;
        fetch('http://bankrestapi.azurewebsites.net/api/Hesap/GetByMusteriNo?musteriNo='+musteriNo)
            .then(res => res.json())
            .then(response => {
                this.setState({ Hesaplar: response });
            })
            .catch(err => alert(err));
    }
    componentDidMount() {
        this.hesapGetir();
    }
    hesapOlustur = () => {
        var acilisTarihi = moment().format();
        const { musteriNo } = this.props.navigation.state.params;
        let Hesap = {
            bakiye: 0,
            hesapAcilisTarihi: acilisTarihi,
            musteriNo: musteriNo,
            acilisPlatformID: 2,
        }
        fetch("http://bankrestapi.azurewebsites.net/api/Hesap/Add", {
            method: 'POST',
            body: JSON.stringify(Hesap),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(() =>
                Alert.alert(
                    "Hesap Oluşturuldu!",
                    "Hesap oluşturma işleminiz başarılı bir şekilde tamamlanmıştır!",
                    [{ text: 'OK' ,onPress:() => this.hesapGetir()}]
                )
            )
            .catch(err => Alert.alert("Hata!", "Hesap oluşturma işlemi sırasında bir hata oluştu !\nLütfen tekrar deneyin!"))
    }
    render() {

        let hesaplar = this.state.Hesaplar.map((hesap) => {
            return (
                <TouchableOpacity style={styles.hesapBilgiContainer} key={hesap.hesapNo}
                    onPress={() => {
                        this.props.navigation.navigate("HesapDetaylari", { hesapNo: hesap.hesapNo });
                    }}>
                    <Text style={styles.hesapNo}> {hesap.musteriNo} - {hesap.ekNo} </Text>
                    <Text style={styles.hesapText}> Bakiye: {hesap.bakiye} TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: {hesap.bakiye} TL</Text>
                </TouchableOpacity>
            )
        })
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.buttonContainerHesaplarim}>
                        <TouchableOpacity style={styles.buttonStyleHesaplarim}>
                            <Icon name="plus" size={16} color="white" backgroundColor="#c5002F">
                                <Text style={styles.buttonColorMenu}
                                    onPress={() => { this.hesapOlustur() }}>  YENİ HESAP AÇ</Text>
                            </Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hesaplarView}>
                        {hesaplar}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
