import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '../styles.js';
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

                <View style={styles.buttonContainerL}>
                    <TouchableOpacity style={styles.hesapHareketleri}
                        onPress={() => { this.props.navigation.navigate("HesapHareketleri", {hesapNo: hesapNo}) }}>
                        <Text style={styles.buttonText}>Hesap Hareketleri</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}