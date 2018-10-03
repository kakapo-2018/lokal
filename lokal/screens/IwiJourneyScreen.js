import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {getStories} from '../redux/actions/'


import MapComponent from '../components/MapComponent'
import Logo from '../components/Logo'
import StoryList from '../components/StoriesView'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#952e46',
  },
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

class IwiJourneyScreen extends React.Component {
  constructor(props){
    super(props)
  }
  

  componentDidMount () {
    this.props.getStories();
  }

  render() {    
    return (

      <View style={styles.container}> 
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Logo />
      <MapComponent />
      <View style = {styles.lineStyle} />
       <Text style={styles.h1}>Journeys</Text>
       <View style = {styles.lineStyle} />
          <StoryList />
      </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    iwiStories: state.iwiStories
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ 
  getStories: getStories
  },dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(IwiJourneyScreen);