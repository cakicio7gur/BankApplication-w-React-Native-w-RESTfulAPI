import React from 'react';
import { TouchableOpacity, Text, View, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import Modal from 'react-native-modalbox'
import moment from 'moment';

export default class HesapHareketleri extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ParaTransferleri: [
                {
                    id: 1,
                    tarih: moment('2019-09-22'),
                    gonderenHesapNo: 100110,
                    aliciHesapNo: 100210,
                    transferTuru: 'Havale',
                    tutar: 900.00,
                },
                {
                    id: 2,
                    tarih: moment('2019-07-28'),
                    gonderenHesapNo: 100110,
                    aliciHesapNo: 100210,
                    transferTuru: 'Havale',
                    tutar: 90.00,
                },
                {
                    id: 3,
                    tarih: moment('2019-06-13'),
                    gonderenHesapNo: 100110,
                    aliciHesapNo: 100111,
                    transferTuru: 'Virman',
                    tutar: 100.50,
                },
                {
                    id: 4,
                    tarih: moment('2019-08-01'),
                    gonderenHesapNo: 100210,
                    aliciHesapNo: 100110,
                    transferTuru: 'Havale',
                    tutar: 900.00,
                },
                {
                    id: 5,
                    tarih: moment('2019-08-01'),
                    gonderenHesapNo: 100210,
                    aliciHesapNo: 100110,
                    transferTuru: 'Havale',
                    tutar: 900.00,
                },
                {
                    id: 6,
                    tarih: moment('2019-08-01'),
                    gonderenHesapNo: 100210,
                    aliciHesapNo: 100110,
                    transferTuru: 'Havale',
                    tutar: 900.00,
                },
            ],
            modalVisible: false,
        }
    }

    render() {

        moment.locale('tr');

        const { hesapNo } = this.props.navigation.state.params;

        let paraTransferleri = this.state.ParaTransferleri.map(transfer => {
            let tutar = 0;
            if (transfer.gonderenHesapNo == hesapNo) {
                tutar = -Math.abs(transfer.tutar); //kişi gönderici ise eksi olarak göster.
            }
            else tutar = Math.abs(transfer.tutar);

            let gonderenMusteriNo = transfer.gonderenHesapNo.toString().substring(0, 4);
            let aliciMusteriNo = transfer.aliciHesapNo.toString().substring(0, 4);
            let gonderenEkNo = transfer.gonderenHesapNo.toString().substring(4, 6);
            let aliciEkNo = transfer.aliciHesapNo.toString().substring(4, 6);
            return (
                <View style={{ flexDirection: 'row' }} key={transfer.id}>
                    <TouchableOpacity style={styles.tarih} activeOpacity={1}>

                        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold', fontStyle: 'italic' }}>{moment(transfer.tarih).format('D')}</Text>
                            <Text style={{ fontSize: 17, fontStyle: 'italic' }}>{moment(transfer.tarih).format("MMMM")}</Text>
                            <Text style={{ fontSize: 17, fontStyle: 'italic' }}>{moment(transfer.tarih).format('YYYY')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.hareketBilgi, transfer.gonderenHesapNo != hesapNo ? styles.gelenTutar : styles.gidenTutar]}
                        onPress={() => { this.refs.modal3.open() }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 15, margin: 5,fontFamily:'Bahnschrift'}}>Gnd Hesap:  {gonderenMusteriNo} - {gonderenEkNo}</Text>
                            <Text style={{ fontSize: 15, margin: 5,fontFamily:'Bahnschrift' }}>Alıcı Hesap:  {aliciMusteriNo} - {aliciEkNo}</Text>

                            <Text style={[{ fontWeight: 'bold', fontSize: 17,fontFamily:'Bahnschrift', margin: 5 }, transfer.gonderenHesapNo != hesapNo ? styles.gelenTutar : styles.gidenTutar]}>{parseFloat(tutar).toFixed(2)} TL</Text>
                        </View>
                        <View style={{ justifyContent: 'space-evenly' }}>
                            <Text style={{ fontSize: 15, fontStyle: 'italic',fontFamily:'Bahnschrift', fontWeight: 'bold', marginLeft: 20 }}>{transfer.transferTuru}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        })
        return (
            <View style={styles.container}>
                <ScrollView>
                    {paraTransferleri}
                    <Modal
                        style={styles.modal}
                        position={'center'}
                        ref={'modal3'}
                        isDisabled={this.state.modalVisible}>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <Text style={styles.islemDetay}>İşlem Detayı</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textInfo}>İşlem Tarihi</Text>
                            <Text style={styles.textInfo}>07/10/2019 - 15:10</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textInfo}>Tutar</Text>
                            <Text style={styles.textInfo}>100 TL</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textInfo}>Gönderen</Text>
                            <Text style={styles.textInfo}>İbrahim Doğruer</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textInfo}>Alıcı</Text>
                            <Text style={styles.textInfo}>Özgür Çakıcı</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textInfo}>İşlem Türü</Text>
                            <Text style={styles.textInfo}>Havale</Text>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.textInfo}>Açıklama</Text>
                            <Text style={styles.textInfo}>Ben Okula Getmeye mi</Text>
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.geriButton}
                                onPress={() => { this.refs.modal3.close() }}>
                                <Text style={styles.buttonText}>Geri</Text>
                            </TouchableOpacity>
                        </View>

                    </Modal>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    hareketBilgi: {
        flex: .8,
        backgroundColor: "white",
        padding: 2,
        margin: 7,
        borderWidth: 0.7,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    tarih: {
        flex: .2,
        backgroundColor: "white",
        padding: 2,
        margin: 7,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    cizgi: {
        backgroundColor: 'black',
        width: 1,
        height: '100%',
        opacity: .3,
    },
    gelenTutar: {
        borderColor: 'green',
        color: 'green',
    },
    gidenTutar: {
        borderColor: 'red',
        color: '#ff0000',
    },
    modal: {
        height: 250,
        width: 300,
        borderRadius: 5,
        borderColor: '#c5002f',
        borderWidth: 1.5,
        padding: 15
    },
    islemDetay: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily:'Bahnschrift'
    },
    textInfo: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily:'Bahnschrift'
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    geriButton: {
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: .4,
        borderColor: '#c5002f',
        marginTop: 50,
        padding: 8,
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 0.4,
        justifyContent: "center",
    },
    buttonText: {
        color: '#c5002f',
        fontSize: 18,
        fontFamily:'Bahnschrift'
    },
}