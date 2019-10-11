import React from 'react';
import { TouchableOpacity, Text, View, TouchableHighlight,ScrollView } from 'react-native';
import styles from '../styles.js';

export default class Hesaplarim extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Hesaplar: [
                {   //Bu nesne veritabanından gelecek
                    hesapNo: 100110,
                    musteriNo: 1001,
                    ekNo: 10,
                    bakiye: 1000,
                    acilisTarihi: "2019-05-13",
                    acilisPlatformu: "Mobil"
                },
                {
                    hesapNo: 100111,
                    musteriNo: 1001,
                    ekNo: 11,
                    bakiye: 100,
                    acilisTarihi: "2019-02-13",
                    acilisPlatformu: "Web"
                },
                {
                    hesapNo: 100112,
                    musteriNo: 1001,
                    ekNo: 12,
                    bakiye: 500,
                    acilisTarihi: "2019-02-13",
                    acilisPlatformu: "Web"
                },
            ],
        }
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
                    <TouchableHighlight style={styles.buttonStyleHesaplarim}>
                        <Text style={styles.buttonColorMenu}>HESAPLARIM</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.hesaplarView}>
                    {hesaplar}
                </View>
            </ScrollView>
            </View>
        );
    }
}
