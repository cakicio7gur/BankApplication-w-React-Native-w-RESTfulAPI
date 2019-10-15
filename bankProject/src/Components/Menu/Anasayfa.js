import React, {Component} from 'react';
import {Text,View,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../faturaHavaleVirmanStyle.js';
export default class Anasayfa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      bakiye: 0,
    };
  }

  componentDidMount() {
    const { musteriNo } = this.props.navigation.state.params;
    fetch(
      'http://bankrestapi.azurewebsites.net/api/Hesap/GetToplamBakiye/'+musteriNo,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({bakiye: response});      
      })
      .catch(err => alert(err));
  }

  render() {
    const { musteriNo } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
          <Icon name="database" style={{marginTop:15}} size={90} color="#c5002f"></Icon>
            <Text style={styles.total,{marginTop:15}}>VARLIKLARIM</Text>
            <Text style={styles.cost}> {this.state.bakiye} TL</Text>
          </View>

          <View style={styles.bodyHome}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyleMenu}
                onPress={() => {
                this.props.navigation.navigate('Hesaplarim', {musteriNo: musteriNo});
                }}>
                <Icon
                  name="briefcase"
                  size={16}
                  color="white"
                  backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}> HESAPLARIM</Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyleMenu}
                onPress={() => {
                  this.props.navigation.navigate('ParaIslemleri',{musteriNo: musteriNo});
                }}>
                <Icon
                  name="exchange"
                  size={16}
                  color="white"
                  backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}> PARA TRANSFERLERİ </Text>
                </Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonStyleMenu}
                onPress={() => {
                  this.props.navigation.navigate('FaturaOdemeKurumSecimi',{musteriNo: musteriNo,islemTuruID:5});
                }}>
                <Icon
                  name="money"
                  size={16}
                  color="white"
                  backgroundColor="#c5002F">
                  <Text style={styles.buttonColorMenu}> ÖDEME İŞLEMLERİ </Text>
                </Icon>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
