import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import RouterForwarder from './RouterForwarder';
// import {JourneyList} from './Journeylist'
import {getStories} from '../actions/index'


// Code in progress - to change map marker icon
// var myIcon = L.icon({
//   iconUrl: '../../public/images/icon.jpg',
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-10, -90]
// });
// L.marker([-41.30, 174.775], {icon: myIcon}).addTo(Map);

// code in progress - to make a line between markers on map
// var latlngs = [
//   [-41.30, 174.775],
//   [-41.28, 174.78],
//   [-41.29, 174.79]
// ];
// var polyline = L.polyline(latlngs, {color: 'red'}).addTo(Map);
// // zoom the map to the polyline
// map.fitBounds(polyline.getBounds());

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
 
  componentDidMount() {
    this.props.dispatch(getStories())
  } 

  
  render() {
      const iwiStories = this.props;

      const center = [this.state.lat, this.state.lng]

      const initial = {lat: -41.2864, lng: 174.7842, zoom: 11,}

      const welly = [{ key: 'Wellington', position: [-41.30, 174.775], children: 'Kia Ora'}]

      const markers = this.props.iwiStories.map(story => {
        return {
          key: story.title,
          position: [story.latitude, story.longitude],
          children: story.title
        }
      })
      
      // [
      //  { key: 'name', position: [-41.30, 174.775], children: 'INFO' },
      // ]



    return (
      <div>
      <Map id="mapid" center={center} zoom={this.state.zoom}>
        {/* Title layer obligatory with openstreetmaps */}
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

          <MyMarkersList markers={markers}/>

        {/* code in progress - link in popup
        <Popup>
          <RouterForwarder context={this.context}>
            <Link to={'my destination'}>Go to My Destination</Link>
          </RouterForwarder>
        </Popup> */}

        

        {/* <Marker position={position} icon={myIcon}>
          <Popup>
            <strong>Some Place</strong> <br /> Some deets
          </Popup>
        </Marker> */}
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
