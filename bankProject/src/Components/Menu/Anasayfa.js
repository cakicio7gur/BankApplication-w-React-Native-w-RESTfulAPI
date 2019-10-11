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
                <Text style={styles.buttonColorMenu}>[4]</Text>
                <Text style={styles.buttonColorMenu}>   HESAPLARIM</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('ParaIslemleri') }}>
                <Icon name="cogs" size={16} color="white" backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}>  İŞLEMLERİM </Text>
                </Icon>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
