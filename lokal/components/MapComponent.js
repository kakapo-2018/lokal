import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';

import MapView from 'react-native-maps';


export default class MapComp extends React.Component {


  render() {
    return (
      <ScrollView style={styles.mapContainer}>
      <MapView style={styles.map}
        region={{
              latitude: -41.2864,
              longitude: 174.7842,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,    
        }}

        >
      </MapView>
        <View style = {styles.lineStyle} />
      </ScrollView>
    );
  }
  

}
const styles = StyleSheet.create({

mapContainer:{
  margin: 20,
  flex:2,  
},

map:{
  minHeight: 200,
},

lineStyle:{
  flex: 1,
  borderBottomWidth: 2,
  borderColor:'white',
  marginTop: 20,
  marginLeft:20,
  marginRight:20,
},

});


