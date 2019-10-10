import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';


export default class HesapDetaylari extends React.Component {
    //Bu sayfada kullanılacak veriler, 
    //bir önceki sayfadan gelecek olan hesap numarasıyla
    //veritabanına bağlanıp çekliecek
    render() {

        const { hesapNo } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <View style={styles.detayView}>
                    <Text style={styles.hesapNo}>1001 - 10</Text>
                    <Text style={styles.adSoyad}>İBRAHİM DOĞRUER</Text>

                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Hesap Bakiyeniz </Text><Text style={styles.satirBilgi}>1000 TL</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Kullanılabilir Bakiyeniz </Text><Text style={styles.satirBilgi}>1000 TL</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Açılış Tarihi </Text><Text style={styles.satirBilgi}>2019-05-13</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                    <View style={styles.satirView}>
                        <Text style={styles.satir}>Açılış Platformu </Text><Text style={styles.satirBilgi}>Mobil</Text>
                    </View>
                    <View style={styles.altCizgi}></View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.hesapHareketleri}
                        onPress={() => { this.props.navigation.navigate("HesapHareketleri", {hesapNo: hesapNo}) }}>
                        <Text style={styles.buttonText}>Hesap Hareketleri</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = {
    container: {
        flex: 1,
    },
    hesapHareketleri: {
        backgroundColor: "#c5002f",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        padding: 15,
        margin: 10,
        marginTop: 100,
        flexDirection: "row",
        fontFamily:'Bahnschrift'
    },
    buttonContainer: {
        flex: 0.4,
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    detayView: {
        flex: .3,
        margin: 20,
        padding: 10,
    },
    hesapNo: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        fontFamily:'Bahnschrift'
    },
    adSoyad: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily:'Bahnschrift'
    },
    satirView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
    },
    satir: {
        fontSize: 16,
        opacity: .7,
        fontFamily:'Bahnschrift'
    },
    satirBilgi: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    altCizgi: {
        backgroundColor: 'black',
        opacity: .3,
        height: 1,
        marginTop: 4,
    }
}