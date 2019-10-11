import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles.js';
export default class Anasayfa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <ImageBackground style={styles.avatar}>
              <Text style={styles.info}> Varlıklarım</Text>
            </ImageBackground>
            <Text style={styles.total}>Toplam</Text>
            <Text style={styles.cost}>1500,00 TL</Text>
          </View>

          <View style={styles.bodyHome}>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('Hesaplarim') }}>
                <Icon name="briefcase" size={16} color="white" backgroundColor="#c5002F">
                <Text style={styles.buttonColorMenu}>  TÜM HESAPLARIM</Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('ParaIslemleri') }}>
                <Icon name="exchange" size={16} color="white" backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}>  PARA TRANSFERLERİ </Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('FaturaOdemeKurumSecimi') }}>
                <Icon name="money" size={16} color="white" backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}>  ÖDEME İŞLEMLERİ </Text>
                </Icon>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}
