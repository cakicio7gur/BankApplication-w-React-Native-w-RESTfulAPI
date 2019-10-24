import React, { Component } from 'react';
import { TouchableOpacity, Image, Text, View, TextInput, Alert } from 'react-native';
import styles from '../loginStyle.js';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Musteri:{},
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
               this.setState({Musteri:response})
               this.props.navigation.navigate("Anasayfa",{musteriNo:musteri.musteriNo});  
              })
           .catch(err=>alert(err));
       }
       else{
         Alert.alert('Hata!', 'Tckn veya Şifre hatalı!')}
    })
    .catch(err=>alert(err))
  }

  doClear=()=> {
    let textInputPwd = this.refs["inputPw"];
    let textInputTCKN = this.refs["inputTckn"];
    textInputTCKN.clear();
    textInputPwd.clear();
  }
    
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.boslukTop}></View>

        <View style={styles.styleLogo}>
          <Image style={styles.imageStyle}
            resizeMode="contain"
            source={require("../../img/logo.png")} />
        </View>

        <View style={styles.inputContainerLogin}>
          <TextInput ref="inputTckn"
            placeholder="TCKN"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleL}
            maxLength={11}
            value = {this.state.tckn}
            keyboardType={'phone-pad'}
            onChangeText={(text) => this.validateTCKN(text)}
          />
          <TextInput ref="inputPw"
            placeholder="***********"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleL}
            secureTextEntry={true}
            maxLength={16}
            onChangeText={(text) => this.validatePassword(text)} 
          />
        </View>

        <View style={styles.buttonContainerL}>
          <TouchableOpacity style={styles.buttonStyleLogin}
            onPress={()=> {this.GirisYap(); this.doClear()}}>
            <Text style={styles.buttonColorLogin} > Giriş Yap </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonRegisterLogin}>
          <Text>Bir Hesabın Yok Mu?</Text>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("KullaniciKayit")}>
            <Text style={styles.registerColor}>Kayıt Ol</Text></TouchableOpacity>
        </View>

        <View style={styles.bottomBosluk}></View>
      </View>
    );
  }
}