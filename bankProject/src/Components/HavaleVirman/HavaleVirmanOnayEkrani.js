import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView, TextInput, Alert } from 'react-native';
import styles from '../styles.js';
export default class HavaleOnayEkrani extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Onayla = () => {
    Alert.alert(
      "İşleminiz Tamamlanmıştır!", 
      "Para transfer işleminiz başarılı bir şekilde tamamlanmıştır!",
      [{text: 'OK', onPress:() => this.props.navigation.navigate("Anasayfa")}])
  }

  render() {
    return (
      <View style={styles.container,{marginTop:15}}>
        <ScrollView>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>İŞLEM DETAYLARI</Text>
              </TouchableHighlight>
            </View>

            <Text style={styles.infoColor} >GÖNDEREN HESAP</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >Özgür ÇAKICI - 100110 </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor}>ALICI HESAP</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >Hacı Süleyman - 100210 </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor} >TUTAR</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} > 100 TL </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor} >İŞLEM TARİHİ</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} > 16/08/2019 </Text>
              </TouchableOpacity>
            </View>


            <Text style={styles.infoColor} >AÇIKLAMA</Text>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyle}
                placeholder="Ben Okula Getmeyemi"
                placeholderTextColor="black"
                fontFamily="Bahnschrift"
                maxLength={11}>
              </TextInput>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.Onayla() }}>
                <Text style={styles.buttonColorMenu}> ONAYLA </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

