import React, { PureComponent } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';


// var myIcon = Leaflet.icon({
//   iconUrl: '../../public/images/icon.jpg'
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76]
// });

class ReactLeafletMap extends PureComponent {
  state = {
    lat: -41.2864,
    lng: 174.7842,
    zoom: 11,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map id="mapid" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Some Place</strong> <br /> Some deets
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default ReactLeafletMap;
