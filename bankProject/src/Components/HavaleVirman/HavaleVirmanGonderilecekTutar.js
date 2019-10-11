import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import styles from '../styles.js';
export default class HavaleGonderilecekTutar extends Component {
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
                <Text style={styles.buttonColorMenu}>GÖNDERİLECEK TUTAR</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyle}
                placeholder="Örn: 1500"
                underlineColorAndroid='transparent'
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                maxLength={11}>

              </TextInput>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('HavaleVirmanOnayEkrani') }}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

