import React, { Component } from 'react';
import { TouchableOpacity, Text, View, TextInput,Alert,ScrollView } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';
import styles from './kullaniciKayitStyle.js';
import * as EmailValidator from 'email-validator'
export default class KullaniciKayit2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mailError:"",
      phoneError:"",
      Musteri:{},
      validateText: false,
      validateNumber: false,
      validateEmail: false,
      validatedogumtarihi:false,
      isDateTimePickerVisible: false,
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
                    Alert.alert("Başarılı!",
                    "Kayıt işlemi başarılı bir şekilde tamamlanmıştır.",[{text:'OK',onPress:()=>{
                      this.props.navigation.navigate('Login')
                    }}])
                })
                .catch(err=>{alert(err)})

            })
        }
    else{
       {
           Alert.alert('Hata!', 'Lütfen bilgileri eksiksiz giriniz!')
       }
    }
}
validateEmail = (text) => {
  if(text != '' && EmailValidator.validate(text) ){
    this.setState({validateEmail : true,mailError:""})
  }
  else{
    this.setState({validateEmail: false,mailError:"!"})      
  }  
}
validateNumber = (text) => {
  let musteri = this.state.Musteri;
  musteri.cepTelefonu = text.replace(/[^0-9]/g, ''); 
  this.setState({Musteri: musteri});
  if(text !== '' && musteri.cepTelefonu.length==11){
    this.setState({validateNumber: true,phoneError:""}); 
}
  else
    this.setState({validateNumber: false,phoneError:"!"})
}
validateText = (text) => {
  let musteri=this.state.Musteri;
  musteri.acikAdres=text.replace(/[&+=?@€£$¥#|'~₺{}<>;^*%!-]/g, '');
  this.setState({Musteri:musteri})
  if (text != '') {
    this.setState({ validateText: true })
  }
  else {
    this.setState({ validateText: false })
  }
}
handlePicker = (datetime) => {
  let musteri = this.state.Musteri;
  musteri.dogumTarihi = moment(datetime).format('DD MMMM YYYY');
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
        <ScrollView>
        <View style={styles.inputContainerKK}>
        <TouchableOpacity style={styles.datetimeText}
        onPress={this.showPicker}>
          <Text style={{color: 'gray', fontSize: 15,}}>Doğum Tarihi Seçiniz:  <Text style={{color:"black"}}>{this.state.Musteri.dogumTarihi}</Text></Text>
        </TouchableOpacity>
                <DateTimePicker
                  isVisible={this.state.isDateTimePickerVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'date'}
                  datePickerModeAndroid={'calendar'}
                  maximumDate={new Date()}
                />
          <View style={{flexDirection:"row"}}>
            <TextInput id='email' 
            maxLength={20}
            placeholder="E-Mail"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            keyboardType={'email-address'}
            onChangeText={(text) =>{
              let musteri = this.state.Musteri;
              musteri.mail = text;
              this.setState({Musteri: musteri}) 
              this.validateEmail(text)}}
          />
          <Text style={styles.inputStyleIcon}> {this.state.mailError} </Text>
          </View>

          <View style={{flexDirection:"row"}}>
          <TextInput 
            maxLength={11} 
            keyboardType={'phone-pad'}
            placeholder="Cep Telefonu"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            value={this.state.Musteri.cepTelefonu}
            onChangeText={(text) =>this.validateNumber(text)}
          />
          <Text style={styles.inputStyleIcon}> {this.state.phoneError} </Text>
          </View>

          <TextInput id='acikAdres' 
            maxLength={50} 
            multiline={true}
            placeholder="Açık Adres"
            underlineColorAndroid='transparent'
            placeholderTextColor="gray"
            style={styles.inputStyleKK}
            value={this.state.Musteri.acikAdres}
            onChangeText={(text) =>this.validateText(text)}
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
          <Text style={styles.registerColorKK}>Zaten Üye Misin? Giriş Yap</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}