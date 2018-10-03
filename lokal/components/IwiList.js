import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getIwis} from '../redux/actions'


const styles = StyleSheet.create({

  h1 :{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    color: 'white',
    fontFamily:"sans-serif",
  },
  
  h2 :{
    fontSize: 20,
    textAlign: "center",
    color:'black',
    fontFamily: "sans-serif",
  },
  
  lineStyle:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginRight:20,
    marginLeft:20,
  },

  iwiContainer :{
    backgroundColor: "rgb(211,211,211)",
    margin:20,
    borderRadius:2,
    padding:5,
  },

  btnStyle:{
    marginTop:2,
    marginLeft:10,
    marginRight:10,
    backgroundColor: "rgb(185,185,185)",
    borderRadius:5,
  },
});


class IwiList extends React.Component {
  constructor(props){
    super(props)

  }


  

  render() {

    return (
      <ScrollView style={styles.iwiContainer}>
        <View style={styles.listContainer}>
        {this.props.iwiInfo.map(iwi => {
          return( 
            <View style={styles.btnStyle} key={iwi.id}>
                <TouchableOpacity >   
                    <Text style={styles.h2}>{iwi.iwi_name}</Text>
                </TouchableOpacity>
            </View>
      )})
      }  
      </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    iwiInfo: state.iwiData
  }
}

  
  function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
    getIwis: getIwis
    },dispatch)
  }

  export default connect(mapStateToProps, mapDispatchToProps)(IwiList)



