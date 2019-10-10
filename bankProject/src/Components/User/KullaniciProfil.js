import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class KullaniciProfil extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
          </View>
          <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
          <View style={styles.body}>

            <View style={styles.bodyContent}>
              <Text style={styles.name}>Özgür ÇAKICI</Text>

              <View style={styles.buttonContainer}>
              <Text style={styles.buttonColorInfo}> Telefon:</Text>
              <TouchableHighlight>
                <TextInput style={styles.buttonColor}>0(542) 341 10 21 </TextInput>
              </TouchableHighlight>
              </View>

               <View style={styles.buttonContainer}>
              <Text style={styles.buttonColorInfo}> E-Mail:</Text>
              <TouchableHighlight>
                <TextInput style={styles.buttonColor}>cakicozgur@gmail.com </TextInput>
              </TouchableHighlight>
              </View>

              <TouchableHighlight
                style={styles.buttonContainer}>
                <Text style={styles.buttonColor} > Doğum Tarihi:   22/03/1996 </Text>
              </TouchableHighlight>


              <View style={styles.buttonContainer}>
              <Text style={styles.buttonColorInfo}> Açık Adres:</Text>
              <TouchableHighlight>
                <TextInput style={styles.buttonColor}>İstiklal Mah. No:18 </TextInput>
              </TouchableHighlight>
              </View>

              <TouchableHighlight
                style={styles.buttonContainer}>
                <Text style={styles.buttonColor} > Kayıt Tarihi:   07/09/2015 15:40 </Text>
              </TouchableHighlight>


              <TouchableOpacity
                style={styles.cikis}>
                <Text style={styles.buttonColor}> BİLGİLERİMİ GÜNCELLE </Text>
              </TouchableOpacity>
              <Text style={styles.registerColor}>Kullanıcı bilgilerinizi güncellemek için değiştirmek istediğiniz bilgilerinizi girdikten sonra bilgilerimi güncelle butonuna basınız..</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 110,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 20
  },
  name: {
    fontSize: 20,
    color: "black",
    fontFamily: 'Bahnschrift',
    fontWeight: 'bold',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 10,
    height: 38,
    width: 340,
    backgroundColor: "gray",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row"
  },
  cikis: {
    marginTop: 10,
    height: 38,
    width: 340,
    backgroundColor: "#c5002F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row"
  },
  buttonColor: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
  },
  buttonColorInfo: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Bahnschrift',
  },
  registerColor: {
    fontFamily: 'Bahnschrift',
    marginTop:10,
  },
});