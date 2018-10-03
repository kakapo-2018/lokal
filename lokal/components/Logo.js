import React from 'react';
import { ScrollView, StyleSheet, Image, View } from 'react-native';


export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
        source={
        __DEV__
         ? require('../assets/logos/largeTitle-dev.png')
        : require('../assets/logos/largeTitle-dev.png')
        }
        style={styles.mainLogo}
        />
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
});
