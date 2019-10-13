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
              <View
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>ABONE BİLGİLERİ</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyleAbone}
                placeholder="Abone Numarası Giriniz..."
                underlineColorAndroid='transparent'
                placeholderTextColor="gray"
                maxLength={11}>
              </TextInput>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('FaturaOdemeFaturaSecimi') }}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
