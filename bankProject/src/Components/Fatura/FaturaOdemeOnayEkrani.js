import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class FaturaOdemeOnayEkrani extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  Onayla = () => {
    Alert.alert(
      "İşleminiz Tamamlanmıştır!", 
      "Fatura ödeme işleminiz başarılı bir şekilde tamamlanmıştır!",
      [{text: 'OK', onPress:() => this.props.navigation.navigate("Anasayfa")}])
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorHesap}>İŞLEM DETAYLARI</Text>
              </TouchableHighlight>
            </View>

            <Text style={styles.infoColor} >KURUM BİLGİLERİ</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >ASKİ</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor}>FATURA BİLGİLERİ</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor}>
                  Son Ödeme Tarihi: 22/03/2019{"\n"}{"\n"}
                  Ad Soyad: Öz*** Ça**** {"\n"}{"\n"}
                  Abone No: 678965</Text></TouchableOpacity>
            </View>

            <Text style={styles.infoColor} >TUTAR</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} > 98,60 TL </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.infoColor} >İŞLEM TARİHİ</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} > 22/03/1996 </Text>
              </TouchableOpacity>
            </View>


            <Text style={styles.infoColor} >ÖDENECEK HESAP</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyle}>
                <Text style={styles.buttonColor} >Özgür ÇAKICI - 100110 </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
              onPress={() => { this.Onayla()}}>
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
  body: {
    flex: 0.4,
    backgroundColor: "#F8F8F8",
    alignItems: 'center',
    justifyContent: "center",
    marginTop:15
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
  infoColor: {
    fontFamily: 'Bahnschrift',
    color: '#c5002F'
  }
});