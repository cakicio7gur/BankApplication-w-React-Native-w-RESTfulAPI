import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../kullaniciProfilStyle.js';
export default class KullaniciProfil extends Component {

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerKP}>
          </View>
          <Image style={styles.avatarKP} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
          <View style={styles.bodyKP}>

            <View style={styles.bodyContent}>
              <Text style={styles.name}>Özgür ÇAKICI</Text>

              <View style={styles.buttonContainerKP}>
              <Text style={styles.buttonColorKP}> Telefon:</Text>
              <TouchableHighlight>
                <TextInput style={styles.buttonColorKP}>0(542) 341 10 21 </TextInput>
              </TouchableHighlight>
              </View>

               <View style={styles.buttonContainerKP}>
              <Text style={styles.buttonColorKP}> E-Mail:</Text>
              <TouchableHighlight>
                <TextInput style={styles.buttonColorKP}>cakicozgur@gmail.com </TextInput>
              </TouchableHighlight>
              </View>

              <TouchableHighlight
                style={styles.buttonContainerKP}>
                <Text style={styles.buttonColorKP} > Doğum Tarihi:   22/03/1996 </Text>
              </TouchableHighlight>


              <View style={styles.buttonContainerKP}>
              <Text style={styles.buttonColorKP}> Açık Adres:</Text>
              <TouchableHighlight>
                <TextInput style={styles.buttonColorKP}>İstiklal Mah. No:18 </TextInput>
              </TouchableHighlight>
              </View>

              <TouchableHighlight
                style={styles.buttonContainerKP}>
                <Text style={styles.buttonColorKP} > Kayıt Tarihi:   07/09/2015 15:40 </Text>
              </TouchableHighlight>


              <TouchableOpacity
                style={styles.cikis}>
                <Text style={styles.buttonColorKP}> BİLGİLERİMİ GÜNCELLE </Text>
              </TouchableOpacity>
              <Text style={styles.registerColorKP}>Kullanıcı bilgilerinizi güncellemek için değiştirmek istediğiniz bilgilerinizi girdikten sonra bilgilerimi güncelle butonuna basınız..</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}