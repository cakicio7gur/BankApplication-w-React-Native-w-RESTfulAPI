import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8F8F8",
    },
    containerHH:{
      flex: 1,
      backgroundColor: "#F2F2F2",
    },
    header: {
      flex: 0.3,
      backgroundColor: "#F8F8F8",
      padding: 30,
      alignItems: 'center',
    },
    headerKP: {
      backgroundColor: "#F8F8F8",
      height: 110,
      justifyContent: "flex-start",
      alignItems: "center",
    },  
    body: {
      flex: 0.4,
      backgroundColor: "#F8F8F8",
      alignItems: 'center',
    },
    avatar: {
      marginBottom: 10,
    },
    avatarKP: {
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
    bodyKP: {
      marginTop: 40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
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
    bodyHome: {
      flex: 0.5,
      backgroundColor: "#F8F8F8",
      alignItems: 'center',
    },
    info: {
      color: 'black',
      justifyContent: 'space-between',
      textAlign: 'center',
      fontFamily: 'Bahnschrift',
      fontSize: 16
    },
    buttonContainer: {
      width: '85%',
      justifyContent: "center",
    },
    buttonContainerKP: {
      marginTop: 10,
      height: 38,
      width: 340,
      backgroundColor: "gray",
      alignItems: "center",
      borderRadius: 5,
      flexDirection: "row"
    },
    buttonStyle: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      padding: 12,
      margin: 5,
      flexDirection: "row",
      borderWidth: 0.8,
      borderColor: "#c5002F",
    },
    buttonStyleKurum: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      padding: 12,
      margin: 5,
      flexDirection: "row",
      borderWidth: 0.8,
      borderColor: "black",
    },
    buttonColor: {
      fontFamily: 'Bahnschrift',
    },
    buttonColorKP: {
      color: 'white',
      fontWeight: 'bold',
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
    buttonStyleAbone: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderRadius: 5,
      padding: 6,
      margin: 5,
      flexDirection: "row",
      borderWidth: 0.8,
      borderColor: "#c5002F",
    },
    buttonStyleFaturaSecimi: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderRadius: 5,
      padding: 12,
      margin: 5,
      flexDirection: "row",
      borderWidth: 0.8,
      borderColor: "#c5002F",
    },  
    hesapNo: {
      fontWeight: "bold",
      fontSize: 16,
      fontFamily: 'Bahnschrift',
    },
    hesapNoTop: {
      fontWeight: "bold",
      fontSize: 24,
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
    },
    infoColor: {
      fontFamily: 'Bahnschrift',
      color: '#c5002F'
    },
    buttonStyleOnayEkrani: {
      justifyContent: "center",
      alignItems: "flex-start",
      borderRadius: 5,
      padding: 12,
      margin: 5,
      flexDirection: "row",
      borderWidth: 0.8,
      borderColor: "#c5002F",
    },
    hesapHareketleri: {
      backgroundColor: "#c5002f",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      padding: 12,
      margin: 6,
      flexDirection: "row",
      fontFamily:'Bahnschrift'
    },
    buttonTextHesapHareket: {
      color: '#c5002f',
      fontSize: 18,
      fontFamily:'Bahnschrift'
    },
    cizgi: {
      backgroundColor: 'black',
      width: 1,
      height: '100%',
      opacity: .3,
    },
    gelenTutar: {
      borderColor: 'green',
      color: 'green',
    },
    gidenTutar: {
      borderColor: 'red',
      color: '#ff0000',
    },
    modal: {
      height: 250,
      width: 300,
      borderRadius: 5,
      borderColor: '#c5002f',
      borderWidth: 1.5,
      padding: 15
    },
    islemDetay: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily:'Bahnschrift'
    },
    textInfo: {
      fontSize: 15,
      fontWeight: 'bold',
      fontFamily:'Bahnschrift'
    },
    textView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 5
    },
    geriButton: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      borderWidth: .4,
      borderColor: '#c5002f',
      marginTop: 50,
      padding: 8,
      flexDirection: "row",
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },    
    detayView: {
    flex: .3,
    margin: 20,
    padding: 10,
    },
    hesapNoHesapDetay: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
      fontFamily:'Bahnschrift'
    },
    adSoyad: {
      fontSize: 24,
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily:'Bahnschrift'
    },
    satirView: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 20,
    },
    satir: {
      fontSize: 16,
      opacity: .7,
      fontFamily:'Bahnschrift'
    },
    satirBilgi: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    altCizgi: {
      backgroundColor: 'black',
      opacity: .3,
      height: 1,
      marginTop: 4,
    },
    hesaplarView: {
      flex: 1,
      marginTop: 5,
    },
    hesapBilgiContainer: {
      flex: 17,
      backgroundColor: "white",
      padding: 5,
      margin: 10,
      borderWidth: 0.4,
      borderRadius: 5,
      borderColor: "#c5002f",
      fontFamily: 'Bahnschrift',
    },
    buttonContainerHesaplarim: {
      marginTop: 15,
      justifyContent: "center",
      alignItems: 'center'
    },
    buttonStyleHesaplarim: {
      backgroundColor: "#c5002F",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      padding: 8,
      margin: 5,
      flexDirection: "row",
      width: '94%',
    },
    inputContainerKK: {
      flex: 3,
      justifyContent: "space-evenly",
    },
    inputStyleKK: {
      backgroundColor: "#F8F8F8",
      padding: 5,
      margin: 25,
      borderBottomWidth: 2,
      borderRadius: 5,
      borderColor: "#c5002F",
      fontFamily: 'Bahnschrift',
    },
    buttonContainerKK: {
      flex: 0.5,
      justifyContent: "center",
    },
    buttonStyleKK: {
      backgroundColor: "#c5002f",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
      padding: 10,
      margin: 100,
      flexDirection: "row"
    },
    buttonColorKK: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Bahnschrift',
    },
    buttonRegisterKK: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
      borderRadius: 30,
    },
    datetimeText:{
      borderRadius:5,
      borderBottomWidth:2,
      borderColor: '#c5002f', 
      backgroundColor:'#f8f8f8',
      width:'66%',
      height:40,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 11,
    },
    imageStyle: {
      flex: 1,
      width: null,
      height: null
    },
    styleLogo: {
      flex: 2,
    },
    inputContainerL: {
      flex: 0.6,
      justifyContent: "space-evenly",
    },
    inputContainerLogin: {
      flex: 0.6,
    },
    inputStyleL: {
      backgroundColor: "#F8F8F8",
      padding: 5,
      margin: 20,
      borderBottomWidth: 2,
      borderColor: "#c5002F",
      fontFamily: 'Bahnschrift',
    },
    buttonContainerHesapHareketleri:{
      marginTop:260,
      flex: 0.4,
      justifyContent: "center",
    },
    buttonContainerHesapHareket: {
      flex: 0.4,
      justifyContent: "center",
    },
    buttonContainerL: {
      marginTop:100,
      flex: 0.4,
      justifyContent: "center",
    },
    registerColorL: {
      fontWeight: 'bold',
      fontFamily: 'Bahnschrift',
    },
    bosluk: {
      flex: 0.2,
    },
    boslukTop: {
      flex: 0.5,
    },
    bottomBosluk: {
      flex: 0.1
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
    registerColorKP: {
      fontFamily: 'Bahnschrift',
      marginTop:10,
    },
    hareketBilgi: {
      flex: .8,
      backgroundColor: "white",
      padding: 2,
      margin: 7,
      borderWidth: 0.7,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    tarih: {
      flex: .2,
      backgroundColor: "white",
      padding: 2,
      margin: 7,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });