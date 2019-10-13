import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView, Alert } from 'react-native';
import styles from '../styles.js';
export default class FaturaOdemeOnayEkrani extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  Onayla = () => {
    Alert.alert(
      "İşleminiz Tamamlanmıştır!", 
      "Fatura ödeme işleminiz başarılı bir şekilde tamamlanmıştır!",
      [{text: 'OK', onPress:() => this.props.navigation.navigate("Anasayfa")}])
  }
  render() {
    return (
      <View style={styles.container,{marginTop:15}}>
        <ScrollView>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>İŞLEM DETAYLARI</Text>
              </View>
            </View>

            <Text style={styles.infoColor} >KURUM BİLGİLERİ</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleOnayEkrani}>
                <Text style={styles.buttonColor} >ASKİ</Text>
              </View>
            </View>

            <Text style={styles.infoColor}>FATURA BİLGİLERİ</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleOnayEkrani}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text></View>
            </View>

            <Text style={styles.infoColor} >TUTAR</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleOnayEkrani}>
                <Text style={styles.buttonColor} > 98,60 TL </Text>
              </View>
            </View>

            <Text style={styles.infoColor} >İŞLEM TARİHİ</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleOnayEkrani}>
                <Text style={styles.buttonColor} > 22/03/1996 </Text>
              </View>
            </View>
            
            <Text style={styles.infoColor} >ÖDENECEK HESAP</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.buttonStyleOnayEkrani}>
                <Text style={styles.buttonColor} >Özgür ÇAKICI - 100110 </Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
              onPress={() => { this.Onayla()}}>
                <Text style={styles.buttonColorMenu}> ONAYLA </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
