import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F8F8F8",
    },
    headerKP: {
        backgroundColor: "#F8F8F8",
        height: 110,
        justifyContent: "flex-start",
        alignItems: "center",
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
    bodyKP: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
      },    name: {
        fontSize: 20,
        color: "black",
        fontFamily: 'Bahnschrift',
        fontWeight: 'bold',
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
      buttonColorKP: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Bahnschrift',
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

})