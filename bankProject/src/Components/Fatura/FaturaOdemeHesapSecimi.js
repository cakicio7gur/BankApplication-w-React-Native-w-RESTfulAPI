import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import styles from '../styles.js';
 
export default class FaturaOdemeHesapSecimi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container,{marginTop:15}}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>HESAP SEÇİMİ</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('FaturaOdemeOnayEkrani')}}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

