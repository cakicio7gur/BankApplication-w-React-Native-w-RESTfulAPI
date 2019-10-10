import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import PhoneInput from 'react-native-phone-input'
import ModalPicker,{ModalPickerImage} from 'react-native-modal-picker'


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
  componentDidMount(){
    this.setState({
        pickerData: this.phone.getPickerData()
    })
  }
  onPressFlag(){
    this.myCountryPicker.open()
  }
  
  selectCountry(country){
    this.phone.selectCountry(country.iso2)
  }

  validateText = (text) => {
    alph=/^[a-z\sa-zA-ZğüşöçİĞÜŞÖÇ\sA-Z]+$/
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
        <View style={styles.inputContainer}>
          <TextInput id='tckn'
            placeholder="TCKN"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyle}
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
            style={styles.inputStyle}
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
            style={styles.inputStyle}
            maxLength={20}
            onChangeText={(text) => {
              let musteri = this.state.Musteri;
              musteri.ad = text;
              this.setState({ Musteri: musteri })
              this.validateText(text)
            }}
          />
            <PhoneInput
              ref={(ref) => { this.phone = ref; }}
              onPressFlag={this.onPressFlag}
            />
            <ModalPickerImage
              ref={(ref) => { this.myCountryPicker = ref; }}
              data={this.state.pickerData}
              onChange={(country)=>{ this.selectCountry(country) }}
              cancelText='Cancel'
            />


          <TextInput id='soyad'
            placeholder="Soyad"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyle}
            maxLength={20}
            onChangeText={(text) => {
              let musteri = this.state.Musteri;
              musteri.soyad = text;
              this.setState({ Musteri: musteri })
              this.validateText(text)
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => { this.KayitOl() }}>
            <Text style={styles.buttonColor} > Devam </Text>
          </TouchableOpacity>
        </View>
        <TouchableHighlight style={styles.buttonRegister}>
          <Text style={styles.registerColor}>Kaydı tamamlamak için devam edin..</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  inputContainer: {
    flex: 3,
    justifyContent: "space-evenly",
  },
  inputStyle: {
    backgroundColor: "#F8F8F8",
    padding: 5,
    margin: 25,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: "#c5002F",
    fontFamily: 'Bahnschrift',
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: "center",
  },
  buttonStyle: {
    backgroundColor: "#c5002f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    margin: 100,
    flexDirection: "row"
  },
  buttonColor: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
  },
  buttonRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 30,
  },
  registerColor: {
    fontFamily: 'Bahnschrift',
  },
}