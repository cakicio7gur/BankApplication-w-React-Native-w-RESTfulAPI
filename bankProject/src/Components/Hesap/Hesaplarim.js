import React from 'react';
import { TouchableOpacity, Text, View, TouchableHighlight,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.buttonStyleHesap}>
                        <Text style={styles.buttonColorHesap}>HESAPLARIM</Text>
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

const styles = {
    container: {
        flex: 1,
    },
    hesaplarView: {
        flex: 1,
        marginTop: 5,
    },
    hesapBilgiContainer: {
        flex: .18,
        backgroundColor: "white",
        padding: 5,
        margin: 10,
        borderWidth: 0.4,
        borderRadius: 5,
        borderColor: "#c5002f",
        fontFamily: 'Bahnschrift',
        //height: 100,
    },
    hesapNo: {
        fontWeight: "bold",
        fontSize: 18,
        fontFamily: 'Bahnschrift',
    },
    hesapText: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Bahnschrift',
    },
    buttonContainer: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: 'center'
      },
      buttonStyleHesap: {
        backgroundColor: "#c5002F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 8,
        margin: 5,
        flexDirection: "row",
        width: '94%',
      },
      buttonColorHesap: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Bahnschrift',
        fontSize: 14
      },
}