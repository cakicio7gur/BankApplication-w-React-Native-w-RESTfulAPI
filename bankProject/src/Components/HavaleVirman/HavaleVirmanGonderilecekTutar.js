import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TouchableHighlight, ScrollView, TextInput, Alert } from 'react-native';
import moment from 'moment';
import styles from '../styles.js';
export default class HavaleGonderilecekTutar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validateTutar: false,
      tutar:""
    };
  }
  tutarKontrol = () => {
    var islemTarihi = moment().format();
    const { musteriNo, aliciHesap, gonderenHesap, islemTuruID } = this.props.navigation.state.params;
    if (parseFloat(this.state.tutar) > 0) {
      if (gonderenHesap.bakiye < parseFloat(this.state.tutar)) {
        Alert.alert(
          "Yetersiz Bakiye!",
          "Göndermek istediğiniz tutar kullanılabilir bakiyeden küçük olmalıdır!")
      }
      else {
        this.props.navigation.navigate('HavaleVirmanOnayEkrani', { musteriNo: musteriNo, aliciHesap: aliciHesap, gonderenHesap: gonderenHesap, gonderilecekTutar: this.state.tutar, islemTuruID: islemTuruID, islemTarihi: islemTarihi })
      }
    }
    else {
      Alert.alert(
        "Hata!",
        "Göndermek istediğiniz tutar 0 dan büyük olmalıdır!")
    }
  }
  validateTutar = (text) => {
    this.setState({ tutar: text.replace(/[^0-9]/g, '') });
    if (text != '')
      this.setState({ validateTutar: true })
    else
      this.setState({ validateTutar: false })
  }
  render() {

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}></View>
          <View style={styles.header}></View>
          <View style={styles.body}>

            <View style={styles.buttonContainer}>
              <View
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorMenu}>GÖNDERİLECEK TUTAR</Text>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <TextInput
                style={styles.buttonStyleAbone}
                placeholder="Örn: 1500"
                underlineColorAndroid='transparent'
                placeholderTextColor="gray"
                keyboardType="phone-pad"
                maxLength={7}
                onChangeText={(text) => this.validateTutar(text)}>
              </TextInput>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.tutarKontrol() }}>
                <Text style={styles.buttonColorMenu}> DEVAM </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

