import React, { Component } from 'react';
import { TouchableOpacity, TouchableHighlight,Text, View, TextInput, Alert } from 'react-native';
import styles from '../styles.js';

export default class KullaniciKayit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Musteri: {},
      validateText: false,
      validateTCKN: false,
      validatePassword: false,
      pickerData:''
    }
  }
  validateText = (text) => {
    const alph=/^[a-z\sa-zA-ZğüşöçİĞÜŞÖÇ\sA-Z]+$/
    if (alph.test(text) && text != '') {
      this.setState({ validateText: true })
    }
    else {
      this.setState({ validateText: false })
    }
  }

  validateTCKN = (text) => {
    if (text !== '') {
      let musteri = this.state.Musteri;
      musteri.tckn = text.replace(/[^0-9]/g, '');
      this.setState({
        Musteri: musteri,
        validateTCKN: true,
      });
    }
    else
      this.setState({ validateTCKN: false })
  }
  validatePassword = (text) => {
    if (text != '')
      this.setState({ validatePassword: true })
    else
      this.setState({ validatePassword: false })
  }

  KayitOl = () => {
    let Musteri = this.state.Musteri;
    if (this.state.validateTCKN && this.state.validatePassword && this.state.validateText) {
      if (this.state.Musteri.tckn.length != 11) {
        Alert.alert('Hata!', 'TC Kimlik Numarası 11 Haneli olmalıdır!')
      }
      else {
        this.props.navigation.navigate('KullaniciKayit2', { tckn: Musteri.tckn, sifre: Musteri.sifre, ad: Musteri.ad, soyad: Musteri.soyad })
      }
    }
    else {
      {
        Alert.alert('Hata!', 'Lütfen bilgileri doğru ve eksiksiz giriniz!')
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainerKK}>
          <TextInput id='tckn'
            placeholder="TCKN"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            maxLength={11}
            keyboardType={'phone-pad'}
            onChangeText={(text) => {
              let musteri = this.state.Musteri;
              musteri.tckn = text;
              this.setState({ Musteri: musteri })
              this.validateTCKN(text)
            }}

          />
          <TextInput id='sifre'
            placeholder="Şifre"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            secureTextEntry={true}
            maxLength={20}
            onChangeText={(text) => {
              let musteri = this.state.Musteri;
              musteri.sifre = text;
              this.setState({ Musteri: musteri })
              this.validatePassword(text)
            }}
          />

          <TextInput id='ad'
            placeholder="Ad"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            maxLength={20}
            onChangeText={(text) => {
              let musteri = this.state.Musteri;
              musteri.ad = text;
              this.setState({ Musteri: musteri })
              this.validateText(text)
            }}
          />
          
          <TextInput id='soyad'
            placeholder="Soyad"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            maxLength={20}
            onChangeText={(text) => {
              let musteri = this.state.Musteri;
              musteri.soyad = text;
              this.setState({ Musteri: musteri })
              this.validateText(text)
            }}
          />
        </View>
        <View style={styles.buttonContainerKK}>
          <TouchableOpacity
            style={styles.buttonStyleKK}
            onPress={() => { this.KayitOl() }}>
            <Text style={styles.buttonColorKK} > Devam </Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight style={styles.buttonRegisterKK}>
          <Text style={styles.buttonColor}>Kaydı tamamlamak için devam edin..</Text>
        </TouchableHighlight>
      </View>
    );
  }
}