import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import styles from '../styles.js';
export default class HavaleAliciHesap extends Component {
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
                <Text style={styles.buttonColorMenu}>ALICI HESAP</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyle}
                placeholder="Örn: 100110"
                underlineColorAndroid='transparent'
                placeholderTextColor="gray"
                maxLength={11}>

              </TextInput>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('HavaleVirmanGonderenHesap') }}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
