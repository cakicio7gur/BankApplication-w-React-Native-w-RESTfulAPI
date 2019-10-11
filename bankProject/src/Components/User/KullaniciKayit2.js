import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput,Alert } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
import styles from '../styles.js';
export default class KullaniciKayit2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tckn:'',
      sifre:'',
      ad:'',
      soyad:'',
      Musteri:{},
      validateText: false,
      validateNumber: false,
      validateEmail: false,
      validatedogumtarihi:false,
      isDateTimePickerVisible: false,
      chosenDate: '1997-08-13',
    }
  }

  KayitOl = () => {       
    let Musteri=this.state.Musteri;    
    if(this.state.validatedogumtarihi && this.state.validateEmail && this.state.validateText && this.state.validateNumber)
        {
          const { tckn,sifre,ad,soyad } = this.props.navigation.state.params;
          Musteri.tckn=tckn;
          Musteri.sifre=sifre;
          Musteri.ad=ad;
          Musteri.soyad=soyad;
          Musteri.acilisPlatformID=2,
          Musteri.kayıtTarihi= moment().format();
           this.setState(()=>{
                fetch("http://bankrestapi.azurewebsites.net/api/Musteri/Add",{
                    method:"post",
                    body:JSON.stringify(Musteri),
                    headers:{
                        "Accept":"application/json",
                        "Content-type":"application/json"
                    }
                })
                .then(()=>{
                    Alert.alert("Kayıt Olma işlemi gerçekleştirildi",
                    "Kullanıcı kayıt olma işlemi gerçekleştirildi",[{text:'OK',onPress:()=>{
                      this.props.navigation.navigate('Login')
                    }}])
                })
                .catch(err=>{alert(err)})

            })
        }
    else{
       {
           Alert.alert('Hata!', 'Lütfen bilgileri eksizksiz giriniz!')
       }
    }
}
validateEmail = (text) => {
  if(text != ''){
    this.setState({validateEmail : true})
  }
  else{
    this.setState({validateEmail: false})      
  }  
}
validateNumber = (text) => {
  if(text !== ''){
    let musteri = this.state.Musteri;
    musteri.cepTelefonu = text.replace(/[^0-9]/g, ''); 
    this.setState({
      Musteri: musteri,
      validateNumber: true, 
    }); 
}
  else
    this.setState({validateNumber: false})
}
validateText = (text) => {
  alph=/^[a-z\sa-zA-ZğüşöçİĞÜŞÖÇ\sA-Z]+$/
  if(alph.test(text) && text != ''){
    this.setState({validateText: true})
  }
  else{
    this.setState({validateText: false})
  }
}
handlePicker = (datetime) => {
  let musteri = this.state.Musteri;
  musteri.dogumTarihi = moment(datetime).format('YYYY-MM-DD');
 
  this.setState({
    isDateTimePickerVisible: false,
    Musteri: musteri,
    validatedogumtarihi:true
  })

}   
hidePicker = () => {
  this.setState({isDateTimePickerVisible: false})
}
showPicker = () => {
  this.setState({isDateTimePickerVisible: true})
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainerKK}>
        <View style={{flexDirection:"row"}}>
        <Text style={{margin:15}}>Doğum Tarihi:</Text>
        <TouchableOpacity onPress={this.showPicker} style={styles.datetimeText}>
                  <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>{this.state.Musteri.dogumTarihi}</Text>
                </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'date'}
                  datePickerModeAndroid={'calendar'}
                  maximumDate={new Date()}
                /> 
          </View> 
          <TextInput id='email' 
            maxLength={20}
            placeholder="E-Mail"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            onChangeText={(text) =>{
              let musteri = this.state.Musteri;
              musteri.mail = text;
              this.setState({Musteri: musteri}) 
              this.validateEmail(text)}}
          />
          <TextInput 
            maxLength={11} 
            keyboardType={'phone-pad'}
            placeholder="Cep Telefonu"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            onChangeText={(text) =>{
              let musteri = this.state.Musteri;
              musteri.cepTelefonu = text;
              this.setState({Musteri: musteri}) 
              this.validateNumber(text)}}
          />
          <TextInput id='acikAdres' 
            maxLength={50} 
            multiline={true}
            placeholder="Açık Adres"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            onChangeText={(text) =>{
              let musteri = this.state.Musteri;
              musteri.acikAdres = text;
              this.setState({Musteri: musteri}) 
              this.validateText(text)}}
          />

        </View>
        <View style={styles.buttonContainerKK}>
          <TouchableOpacity
            style={styles.buttonStyleKK}
            onPress={() => {this.KayitOl()}}>
            <Text style={styles.buttonColorKK} > Kayıt Ol </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonRegisterKK}
          onPress={() => { this.props.navigation.navigate('Login') }}>
          <Text style={styles.buttonColor}>Zaten Üye Misin? Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    );
  }
}