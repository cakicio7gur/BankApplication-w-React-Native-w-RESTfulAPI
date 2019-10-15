import React, { Component } from 'react';
import { TouchableOpacity,Text, View, TextInput, Alert,ScrollView } from 'react-native';
import styles from './kullaniciKayitStyle.js';

export default class KullaniciKayit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tcknError:"",
      passwordError:"",
      adError:"",
      soyadError:"",
      Musteri: {},
      ad:'',
      soyad:'',
      validateSoyad:false,
      validateAd: false,
      validateTCKN: false,
      validatePassword: false,
      pickerData:''
    }
  }
  
  validateAd = (text) => {
    let musteri=this.state.Musteri;
    musteri.ad=text.replace(/[0-9&+,:;=?@#|'~₺{}<>./^*()%!-]/g, ''); 
    this.setState({Musteri:musteri})
    if (text != '') {
      this.setState({ 
        validateAd: true,
        adError:""
      })
    }
    else {
      this.setState({ 
        validateAd: false,
        adError:"!"
      })
    }
  }

  validateSoyad = (text) => {
    let musteri=this.state.Musteri;
    musteri.soyad=text.replace(/[0-9&+,:;=?@#|'~₺{}<>./^*()%!-]/g, '');
    this.setState({Musteri:musteri})
    if (text != '') {
      this.setState({ 
        validateSoyad: true,
        soyadError:""
      })
    }
    else {
      this.setState({ 
        validateSoyad: false,
        soyadError:"!"
      })
    }
  }

  validateTCKN = (text) => {
    let musteri = this.state.Musteri;
    musteri.tckn = text.replace(/[^0-9]/g, '');
    this.setState({Musteri:musteri})
    if (text !== '' && this.state.Musteri.tckn.length == 11) {
      this.setState({
        tcknError:"",
        validateTCKN: true,
      });
    }
    else
      this.setState({ tcknError:"!",validateTCKN: false })
  }

  validatePassword = (text) => {
    if (text != '' && this.state.Musteri.sifre.length>=6)
      this.setState({ 
        validatePassword: true,
        passwordError:""
       })
    else
      this.setState({ 
        validatePassword: false,
        passwordError:"!" })
  }

  KayitOl = () => {
    let Musteri = this.state.Musteri;
    if (this.state.validateTCKN && this.state.validatePassword && this.state.validateAd && this.state.validateSoyad) {
      if (this.state.Musteri.tckn.length != 11) {
        this.setState({tcknError:"!"})
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
        <ScrollView>
        <View style={styles.inputContainerKK}>
          <View style={{flexDirection:"row"}}>
          <TextInput id='tckn'
            placeholder="TCKN"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            maxLength={11}
            value={this.state.Musteri.tckn}
            keyboardType={'phone-pad'}
            onChangeText={(text) =>this.validateTCKN(text)}
          />
          <Text style={styles.inputStyleIcon}> {this.state.tcknError} </Text>
          </View>

          <View style={{flexDirection:"row"}}>
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
          <Text style={styles.inputStyleIcon}> {this.state.passwordError} </Text>
          </View>

          <View style={{flexDirection:"row"}}>
          <TextInput id='ad'
            placeholder="Ad"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            maxLength={20}
            value={this.state.Musteri.ad}
            onChangeText={(text) => this.validateAd(text)}
          />
          <Text style={styles.inputStyleIcon}> {this.state.adError} </Text>
          </View>

          <View style={{flexDirection:"row"}}>
          <TextInput id='soyad'
            placeholder="Soyad"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            maxLength={20}
            value={this.state.Musteri.soyad}
            onChangeText={(text) =>this.validateSoyad(text)}
          />
          <Text style={styles.inputStyleIcon}> {this.state.soyadError} </Text>
          </View>
        </View>
        <View style={styles.buttonContainerKK}>
          <TouchableOpacity style={styles.buttonStyleKK}
            onPress={() => { this.KayitOl() }}>
            <Text style={styles.buttonColorKK} > Devam </Text>
          </TouchableOpacity>
        <View style={styles.buttonRegisterKK}>
          <Text style={styles.buttonColor}>Kaydı tamamlamak için devam edin..</Text>
        </View>
        </View>

        </ScrollView>
      </View>
    );
  }
}