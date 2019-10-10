import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FaturaOdemeFaturaSecimi extends Component {
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
          <View style={styles.header}></View>
          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorHesap}>FATURA SEÇİMİ</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}98,60 TL </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}980,60 TL </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}980,60 TL </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}980,60 TL </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}980,60 TL </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text>
                <Text style={{ fontWeight: "bold" }}>{"\n"}{"\n"}980,60 TL </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('FaturaOdemeHesapSecimi')}}>
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
    flex: 0.30,
    backgroundColor: "#F8F8F8",
    marginTop: 15,
    alignItems: 'center',
  },
  body: {
    flex: 0.5,
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
