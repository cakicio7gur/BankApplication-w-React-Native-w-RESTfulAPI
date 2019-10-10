import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class VirmanAliciHesap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.buttonContainer}>
              <TouchableHighlight
                style={styles.buttonStyleHesap}>
                <Text style={styles.buttonColorHesap}>ALICI HESAP</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contContainer}>
              <TouchableOpacity 
              style={styles.buttonContainer}>
                    <Text style={styles.hesapNo}> 1001 - 10 </Text>
                    <Text style={styles.hesapText}> Bakiye: 2050 TL</Text>
                    <Text style={styles.hesapText}> Kullanılabilir Bakiye: 2050 TL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyleMenu}
                onPress={() => { this.props.navigation.navigate('HavaleVirmanGonderenHesap') }}>
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
  body: {
    flex: 0.4,
    backgroundColor: "#F8F8F8",
    alignItems: 'center',
    marginTop:15,
  },
  buttonContainer: {
    width: '85%',
    justifyContent: "center",
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
  hesapNo: {
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: 'Bahnschrift',
  },
  hesapText: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Bahnschrift',
  },
  contContainer:{
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 5,
    padding: 5,
    margin: 5,
    flexDirection: "row",
    borderWidth: 0.8,
    borderColor: "#c5002F",
    fontFamily: 'Bahnschrift',
  }
});
