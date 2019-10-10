import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HavaleGonderilecekTutar extends Component {
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
                <Text style={styles.buttonColorHesap}>GÖNDERİLECEK TUTAR</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyle}
                placeholder="Örn: 1500"
                underlineColorAndroid='transparent'
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                maxLength={11}>

              </TextInput>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('HavaleVirmanOnayEkrani') }}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
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
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 5,
    padding: 6,
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
  }
});
