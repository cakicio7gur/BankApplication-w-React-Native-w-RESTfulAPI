import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
                <Text style={styles.buttonColorHesap}>KURUM SEÇİMİ</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.3,
    backgroundColor: "#F8F8F8",
    padding: 30,
    alignItems: 'center',
  },
  body: {
    flex: 0.4,
    backgroundColor: "#F8F8F8",
    alignItems: 'center',
  },
  buttonContainer: {
    width: '85%',
    justifyContent: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 12,
    margin: 5,
    flexDirection: "row",
    borderWidth: 0.8,
    borderColor: "#c5002F",
  },
  buttonColor: {
    fontFamily: 'Bahnschrift',
  },
  buttonStyleHesap: {
    backgroundColor: "#c5002F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 6,
    margin: 5,
    flexDirection: "row"
  },
  buttonColorHesap: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
    fontSize: 14
  },
  buttonStyleMenu: {
    backgroundColor: "#c5002F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
    margin: 5,
    flexDirection: "row"
  },
  buttonColorMenu: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
    fontSize: 14
  },
});

