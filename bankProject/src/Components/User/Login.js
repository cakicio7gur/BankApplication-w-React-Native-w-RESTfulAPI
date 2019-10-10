import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import PhoneInput from 'react-native-phone-input'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tckn:'',
      password:'',
    }
  }
  validateTCKN = (text) => {
    this.setState({
      tckn: text.replace(/[^0-9]/g, '')
    });
    if(text != '')
      this.setState({validatePassword: true})
    else
      this.setState({validatePassword: false})
  }
  validatePassword = (text) => {  
    if(text != '')
      this.setState({password:text,validatePassword: true})
    else
      this.setState({validatePassword: false})
  }
  GirisYap=()=>{
    fetch("http://bankrestapi.azurewebsites.net/api/Security/Login?tckn="+this.state.tckn+"&password="+this.state.password)
    .then(data=>{
       if(data.ok){
         fetch("http://bankrestapi.azurewebsites.net/api/Musteri/GetByTcknPassword?tckn="+this.state.tckn+"&password="+this.state.password)
           .then(res=>res.json())
           .then(response=>{
               let musteri =response;
               this.props.navigation.navigate("Anasayfa",{musteriNo:musteri.musteriNo});
              })
           .catch(err=>alert(err));
       }
       else{
         Alert.alert('Hata!', 'Tckn veya Şifre hatalı!')}
    })
    .catch(err=>alert(err))
  }
    
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.boslukTop}></View>

        <View style={styles.styleLogo}>
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={require("../../img/logo.png")} />
        </View>

        <View style={styles.bosluk}></View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="TCKN"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyle}
            maxLength={11}
            value = {this.state.tckn}
            keyboardType={'phone-pad'}
            onChangeText={(text) => this.validateTCKN(text)}
          />
          
          <TextInput
            placeholder="***********"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyle}
            secureTextEntry={true}
            maxLength={16}
            onChangeText={(text) => this.validatePassword(text)} 
          />

        </View>
        <View style={styles.bosluk}></View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle}
            onPress={() => { this.props.navigation.navigate('Anasayfa') }}>
            <Text style={styles.buttonColor} > Giriş Yap </Text>
          </TouchableOpacity>
        </View>

        <TouchableHighlight style={styles.buttonRegister}>
          <Text style={styles.question}>Bir Hesabın Yok Mu?</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.buttonRegister}
            onPress={() => { this.props.navigation.navigate('KullaniciKayit') }}>
          <Text style={styles.registerColor}>Kayıt Ol</Text>
        </TouchableOpacity>

        <View style={styles.bottomBosluk}></View>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8"
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null
  },
  styleLogo: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.6,
    justifyContent: "space-evenly",
  },
  inputStyle: {
    backgroundColor: "#F8F8F8",
    padding: 5,
    margin: 20,
    borderBottomWidth: 2,
    borderColor: "#c5002F",
    fontFamily: 'Bahnschrift',
  },
  buttonContainer: {
    flex: 0.4,
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
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
  },
  bosluk: {
    flex: 0.2,
  },
  boslukTop: {
    flex: 0.5,
  },
  bottomBosluk: {
    flex: 0.1
  },
  question: {
    fontFamily: 'Bahnschrift',
  }
}