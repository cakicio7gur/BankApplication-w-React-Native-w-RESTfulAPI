import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('Hesaplarim') }}>
                <Text style={styles.buttonColorMenu}>[4]</Text>
                <Text style={styles.buttonColorMenu}> HESAPLARIM</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('ParaIslemleri') }}>
                <Icon name="bars" size={14} color="white" backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}> MENU </Text>
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
    flex: 0.30,
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
    flex: 0.5,
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
    fontSize: 16
  },
  buttonContainer: {
    width: '85%',
    justifyContent: "center",
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
