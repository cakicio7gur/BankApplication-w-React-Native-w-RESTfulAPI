import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
      },
      inputContainerKK: {
        marginTop:25,
        flex: 5,
        justifyContent: "center",
      },
      inputStyleKK: {
        backgroundColor: "#F8F8F8",
        padding: 5,
        margin: 25,
        width:"80%",
        borderBottomWidth: 2,
        borderRadius: 5,
        borderColor: "#c5002F",
        fontFamily: 'Bahnschrift',
      },
      inputStyleIcon: {
        backgroundColor: "#F8F8F8",
        padding: 5,
        marginTop: 25,
        marginBottom:15,
        marginRight:25,
        marginLeft:-10,
        width:"4%",
        fontFamily: 'Bahnschrift',
        color:"#c5002f",
        fontWeight:"bold",
        fontSize:18
      },      
      buttonContainerKK: {
        flex: 1,
        marginTop:25,
      },
      buttonStyleKK: {
        backgroundColor: "#c5002f",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 10,
        margin: 25,
        flexDirection: "row",
      },
      buttonColorKK: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Bahnschrift',
      },
      buttonRegisterKK: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonColor: {
        fontFamily: 'Bahnschrift',
      },
      datetimeText:{
        width:"80%",
        borderRadius:5,
        padding: 5,
        margin: 25,
        borderBottomWidth:2,
        borderColor: '#c5002f', 
        backgroundColor:'#f8f8f8',
        fontFamily: 'Bahnschrift',
        height:40,
      },
      registerColorKK: {
        fontWeight: 'bold',
        fontFamily: 'Bahnschrift',
      },
     validateMessage:{
      marginLeft: 25,
      color:"red"
      },
})