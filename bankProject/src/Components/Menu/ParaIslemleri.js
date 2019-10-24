import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../faturaHavaleVirmanStyle.js';
export default class ParaIslemleri extends Component {
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
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>İŞLEMLER</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {this.props.navigation.navigate('HavaleAliciHesap',{musteriNo: musteriNo,islemTuruID:1})}}>
                <Icon name="random" size={16} color="black" backgroundColor="#c5002F">
                <Text style={styles.buttonColor} >  HAVALE </Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {this.props.navigation.navigate('VirmanAliciHesap',{musteriNo: musteriNo,islemTuruID:2})}}>
                <Icon name="retweet" size={16} color="black" backgroundColor="#c5002F">
                <Text style={styles.buttonColor} >  VİRMAN </Text>
                </Icon>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
