import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
                <Text style={styles.buttonColorHesap}>PARA İŞLEMLERİ</Text>
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 15,
    borderColor: "#c5002F",
    marginBottom: 10,
  },
  cost: {
    fontSize: 22,
    color: "#c5002F",
    fontWeight: 'bold',
  },
  total: {
    fontSize: 14,
    color: "gray",
  },
  body: {
    flex: 0.4,
    backgroundColor: "#F8F8F8",
    alignItems: 'center',
  },
  info: {
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute', // child
    bottom: 30, // position where you want
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Bahnschrift',
    fontSize: 15
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
  buttonStyleHesap: {
    backgroundColor: "#c5002F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 6,
    margin: 5,
    flexDirection: "row"
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
  buttonColor: {
    fontFamily: 'Bahnschrift',
  },
  buttonColorHesap: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
    fontSize: 14
  },
  buttonColorMenu: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
    fontSize: 14
  },
});
