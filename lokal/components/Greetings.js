import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';


export default class Greetings extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <Text style = {styles.h1}>Haere Mai! </Text>
      <Text style = {styles.h3}>Welcome to Te Whanganui a Tara Wellington </Text>
        <View style = {styles.lineStyle} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    mainLogo: {
      flex:1,
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginTop: 2,
      marginLeft: 50,
      marginRight:50,
  },

  lineStyle:{
    flex: 1,
    borderBottomWidth: 2,
    borderColor:'white',
    marginLeft:20,
    marginRight:20,
  },

  h1 :{
    textAlign: "center",
    color: 'white',
    fontFamily:"sans-serif",
    // fontWeight: 400,
  },

  h3 :{
    textAlign: "center",
    color:'white',
    fontFamily: "sans-serif",
    // fontWeight: 400,
  }
});
