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
    const { musteriNo } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.header}></View>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <View
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>KURUM SEÇİMİ</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <View
                style={styles.buttonStyleKurum}>
                <Text style={styles.buttonColor} >TELEFON</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => { this.props.navigation.navigate('FaturaOdemeAboneBilgi') }}>
                <Text style={styles.buttonColor}>SU</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <View
                style={styles.buttonStyleKurum}>
                <Text style={styles.buttonColor} >ELEKTRİK</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <View
                style={styles.buttonStyleKurum}>
                <Text style={styles.buttonColor} >DOĞALGAZ</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}




