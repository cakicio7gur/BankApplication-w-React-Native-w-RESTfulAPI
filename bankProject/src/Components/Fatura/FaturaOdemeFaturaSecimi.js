import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import styles from '../styles.js';
export default class FaturaOdemeFaturaSecimi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  render() {
    return (
      <View style={styles.container,{marginTop:15}}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <View
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>FATURA SEÇİMİ</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyleFaturaSecimi}
                onPress={()=>{this.props.navigation.navigate('FaturaOdemeHesapSecimi')}}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}98,60 TL </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

