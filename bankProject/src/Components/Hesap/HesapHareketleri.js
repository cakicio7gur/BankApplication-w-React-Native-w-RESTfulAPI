import React from 'react';
import { TouchableOpacity, Text, View, ScrollView, TouchableHighlight, Alert, Button } from 'react-native';
import Modal from 'react-native-modalbox'
import moment from 'moment';
import styles from './hesapHareketleriStyle.js';
export default class HesapHareketleri extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ParaTransferleri: [],
            modalVisible: false
        }
    }
    componentDidMount() {
        const { hesapNo } = this.props.navigation.state.params;
        fetch('http://bankrestapi.azurewebsites.net/api/ParaTransferi/GetByHesapNo?hesapNo='+hesapNo)
          .then(res => res.json())
          .then(response => {
            this.setState({ParaTransferleri: response});      
          })
          .catch(err => alert(err));
    }
    render() {
        moment.locale('tr');
        const { hesapNo } = this.props.navigation.state.params;
        let paraTransferleri = this.state.ParaTransferleri.map(transfer => {
            let tutar = 0;
            if (transfer.gonderenHesapNo == hesapNo) {
                tutar = -Math.abs(transfer.islemTutari); //kişi gönderici ise eksi olarak göster.
            }
            else tutar = Math.abs(transfer.islemTutari);

            let gonderenMusteriNo = transfer.gonderenHesapNo.toString().substring(0, 4);
            let aliciMusteriNo = transfer.aliciHesapNo.toString().substring(0, 4);
            let gonderenEkNo = transfer.gonderenHesapNo.toString().substring(4, 6);
            let aliciEkNo = transfer.aliciHesapNo.toString().substring(4, 6);
            return (
                <View style={{ flexDirection: 'row' }} key={transfer.ptID}>
                    <TouchableOpacity style={styles.tarih} activeOpacity={1}>
                        <View style={styles.tarihView}>
                            <Text style={styles.dateDay}>{moment(transfer.tarih).format('D')}</Text>
                            <Text style={styles.date}>{moment(transfer.tarih).format("MMMM")}</Text>
                            <Text style={styles.date}>{moment(transfer.tarih).format('YYYY')}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.hareketBilgi, transfer.gonderenHesapNo != hesapNo ? styles.gelenTutar : styles.gidenTutar]}
                        onPress={() => { this.refs.modal3.open() }}>
                        <View style={styles.bilgiView}>
                            <Text style={styles.aliciGondericiStyle}>Gnd Hesap:  {gonderenMusteriNo} - {gonderenEkNo}</Text>
                            <Text style={styles.aliciGondericiStyle}>Alıcı Hesap:  {aliciMusteriNo} - {aliciEkNo}</Text>

                            <Text style={[styles.tutarStyle, transfer.gonderenHesapNo != hesapNo ? styles.gelenTutar : styles.gidenTutar]}>{parseFloat(tutar).toFixed(2)} TL</Text>
                        </View>
                        <View style={styles.islemStyle}>
                            <Text style={styles.tur}>{transfer.tur}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            );
        })
        return (
            <View style={styles.container}>
                <ScrollView>
                    {paraTransferleri}
                </ScrollView>
                <Modal style={styles.modal} position={'center'} ref={'modal3'} isDisabled={this.state.modalVisible}>

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
            </View>
        )
    }
}