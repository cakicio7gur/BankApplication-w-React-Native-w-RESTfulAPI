import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HavaleOnayEkrani extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Onayla = () => {
    Alert.alert(
      "İşleminiz Tamamlanmıştır!", 
      "Para transfer işleminiz başarılı bir şekilde tamamlanmıştır!",
      [{text: 'OK', onPress:() => this.props.navigation.navigate("Anasayfa")}])
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
                <Text style={styles.buttonColorHesap}>İŞLEM DETAYLARI</Text>
              </TouchableHighlight>
            </View>

            <Text style={styles.infoColor} >GÖNDEREN HESAP</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >Özgür ÇAKICI - 100110 </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor}>ALICI HESAP</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >Hacı Süleyman - 100210 </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor} >TUTAR</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} > 100 TL </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor} >İŞLEM TARİHİ</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} > 16/08/2019 </Text>
              </TouchableOpacity>
            </View>


            <Text style={styles.infoColor} >AÇIKLAMA</Text>
            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyle}
                placeholder="Ben Okula Getmeyemi"
                placeholderTextColor="black"
                fontFamily="Serif"
                maxLength={11}>
              </TextInput>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.Onayla() }}>
                <Text style={styles.buttonColorMenu}> ONAYLA </Text>
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
    padding: 15,
    alignItems: 'center',
  },
  body: {
    flex: 0.4,
    backgroundColor: "#F8F8F8",
    alignItems: 'center',
    justifyContent: "center",
  },
  buttonContainer: {
    width: '85%',
    justifyContent: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "flex-start",
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
  infoColor: {
    fontFamily: 'Bahnschrift',
    color: '#c5002F'
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