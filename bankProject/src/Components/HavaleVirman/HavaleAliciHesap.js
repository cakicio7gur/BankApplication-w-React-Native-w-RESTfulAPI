import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import styles from '../faturaHavaleVirmanStyle.js';
export default class HavaleAliciHesap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hesap: {},
      validatealiciHesapNo: false,
      aliciHesapNo: ''
    };
  }
  musteriGetir = () => {
    const { musteriNo, islemTuruID } = this.props.navigation.state.params;
    let alicimusterino = this.state.aliciHesapNo.toString().substring(0, 6)
    let gonderenmusterino = musteriNo.toString().substring(0, 6)
    if (alicimusterino != gonderenmusterino) {
      fetch('http://bankrestapi.azurewebsites.net/api/Hesap/GetById/' + this.state.aliciHesapNo)
        .then(res => {
          if (res.ok) {
            fetch("http://bankrestapi.azurewebsites.net/api/Hesap/GetById/" + this.state.aliciHesapNo)
              .then(res => res.json())
              .then(response => {
                this.setState({ Hesap: response });
                this.props.navigation.navigate('HavaleVirmanGonderenHesap', { musteriNo: musteriNo, aliciHesap: this.state.Hesap, islemTuruID: islemTuruID })
              })
              .catch(err => Alert.alert("Hata!", "Bir hata oluştu lütfen tekrar deneyin!"));
          }
          else {
            Alert.alert("Geçersiz Hesap Numarası!", "Lütfen geçerli bir Hesap Numarası giriniz!")
          }
        })
        .catch(err => Alert.alert("Hata!", "Bir hata oluştu lütfen tekrar deneyin!"));
    }
    else {
      Alert.alert("Bilgi","Girilen Hesap Numarası kendi hesabınıza aittir. Kendi hesabınıza transfer yapabilmek için 'VİRMAN' işlemini kullanınız.")
    }
  }
  validatealiciHesapNo = (text) => {
    this.setState({ aliciHesapNo: text.replace(/[^0-9]/g, '') });
    if (text != '')
      this.setState({ validatealiciHesapNo: true })
    else
      this.setState({ validatealiciHesapNo: false })
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.header}></View>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>ALICI HESAP</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyleAbone}
                placeholder="Örn: 100110"
                underlineColorAndroid='transparent'
                placeholderTextColor="gray"
                keyboardType={'phone-pad'}
                maxLength={11}
                value={this.state.aliciHesapNo}
                onChangeText={(text) => this.validatealiciHesapNo(text)}>
              </TextInput>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.musteriGetir() }}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
