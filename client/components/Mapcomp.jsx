import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import RouterForwarder from './RouterForwarder';
import {getStories} from '../actions/index'


const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>{children}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <div style={{ display: 'none' }}>{items}</div>
}


class ReactLeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: -41.2864,
      lng: 174.7842,
      zoom: 11,
    };
  }
 
  componentDidMount() {} 

  
  render() {
      const iwiStories = this.props;
      const center = [this.state.lat, this.state.lng]
      const welly = [{ key: 'Wellington', position: [-41.30, 174.775], children: 'Kia Ora'}]
      const markers = this.props.iwiStories.map(story => {
        return {
          key: story.title,
          position: [story.latitude, story.longitude],
          children: story.title
        }
      })
          
    return (
      <div>
        <Map id="mapid" center={center} zoom={this.state.zoom}>
        
        {/* Title layer obligatory with openstreetmaps */}
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MyMarkersList markers={markers}/>

        </Map>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    iwiStories: state.iwiStories,
  }
}

export default connect(mapStateToProps) (ReactLeafletMap);