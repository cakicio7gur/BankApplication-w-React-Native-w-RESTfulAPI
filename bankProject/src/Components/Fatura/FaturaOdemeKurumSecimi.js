import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles.js';

export default class FaturaOdemeKurumSecimi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.header}></View>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>KURUM SEÇİMİ</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >TELEFON</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { this.props.navigation.navigate('FaturaOdemeAboneBilgi') }}>
                <Text style={styles.buttonColor}>SU</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >ELEKTRİK</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >DOĞALGAZ</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}>
                <Icon name="home" size={18} color="white" backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}> ANASAYFA </Text>
                </Icon>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}




