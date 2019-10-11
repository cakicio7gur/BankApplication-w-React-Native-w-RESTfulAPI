import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles.js';
export default class ParaIslemleri extends Component {
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
                <Text style={styles.buttonColorMenu}>PARA İŞLEMLERİ</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {this.props.navigation.navigate('HavaleAliciHesap')}}>
                <Text style={styles.buttonColor} >HAVALE</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {this.props.navigation.navigate('VirmanAliciHesap')}}>
                <Text style={styles.buttonColor} >VİRMAN</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {this.props.navigation.navigate('FaturaOdemeKurumSecimi')}}>
                <Text style={styles.buttonColor} >FATURA ÖDEME</Text>
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
