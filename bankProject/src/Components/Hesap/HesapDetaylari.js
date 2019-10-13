import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles.js';
import moment from 'moment';

export default class HesapDetaylari extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            Hesap: {}
        }
    }
    
    componentDidMount() {
        const { hesapNo } = this.props.navigation.state.params;
        fetch('http://bankrestapi.azurewebsites.net/api/Hesap/GetById/'+hesapNo,)
          .then(res => res.json())
          .then(response => {
            this.setState({Hesap: response});      
          })
          .catch(err => Alert.alert("Hata","Hesap bilgileri getirilirken bir hata oluştu!"));
    }

    render() {
        const { hesapNo } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={styles.detayView}>
                    <Text style={styles.hesapNoTop}>{this.state.Hesap.musteriNo} - {this.state.Hesap.ekNo}</Text>
                    <Text style={styles.adSoyad}>{this.state.Hesap.ad} {this.state.Hesap.soyad}</Text>

                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Hesap Bakiyeniz</Text><Text style={styles.satirBilgi}>{this.state.Hesap.bakiye} TL</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Kullanılabilir Bakiyeniz</Text><Text style={styles.satirBilgi}>{this.state.Hesap.bakiye} TL</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Açılış Tarihi</Text><Text style={styles.satirBilgi}>{this.state.Hesap.hesapAcilisTarihi}</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Açılış Platformu</Text><Text style={styles.satirBilgi}>{this.state.Hesap.acilisPlatformAdi}</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                </View>

                <View style={styles.buttonContainerHesapHareketleri}>
                    <TouchableOpacity style={styles.hesapHareketleri}>
                        <Text style={styles.buttonText}>Para Çekme</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hesapHareketleri}>
                        <Text style={styles.buttonText}>Para Yatırma</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hesapHareketleri}
                        onPress={() => { this.props.navigation.navigate("HesapHareketleri", {hesapNo: hesapNo}) }}>
                        <Text style={styles.buttonText}>Hesap Hareketleri</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.hesapHareketleri}>
                        <Text style={styles.buttonText}>Hesabı Sil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}