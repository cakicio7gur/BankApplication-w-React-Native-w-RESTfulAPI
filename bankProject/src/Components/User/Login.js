import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import styles from '../styles.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tckn:'',
      password:'',
      validatePassword:false,
      validateTCKN:false
    }
  }
  validateTCKN = (text) => {
    this.setState({tckn:text.replace(/[^0-9]/g, '')});
    if(text != '')
      this.setState({validateTCKN: true})
    else
      this.setState({validateTCKN: false})
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
        <View style={styles.inputContainerLogin}>
          <TextInput
            placeholder="TCKN"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleL}
            maxLength={11}
            value = {this.state.tckn}
            keyboardType={'phone-pad'}
            onChangeText={(text) => this.validateTCKN(text)}
          />
          
          <TextInput
            placeholder="***********"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleL}
            secureTextEntry={true}
            maxLength={16}
            onChangeText={(text) => this.validatePassword(text)} 
          />
        </View>

        <View style={styles.bosluk}></View>

        <View style={styles.buttonContainerL}>
          <TouchableOpacity style={styles.buttonStyleKK}
            onPress={()=> {this.GirisYap()}}>
            <Text style={styles.buttonColorKK} > Giriş Yap </Text>
          </TouchableOpacity>
        </View>

        <TouchableHighlight style={styles.buttonRegisterKK}>
          <Text style={styles.buttonColor}>Bir Hesabın Yok Mu?</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.buttonRegisterKK}
            onPress={() => { this.props.navigation.navigate('KullaniciKayit') }}>
          <Text style={styles.registerColorL}>Kayıt Ol</Text>
        </TouchableOpacity>

        <View style={styles.bottomBosluk}></View>
      </View>
    );
  }
}