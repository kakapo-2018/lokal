import React, { PureComponent } from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import RouterForwarder from './RouterForwarder';


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

class ReactLeafletMap extends PureComponent {
  //this sets where the map loads + zoom level
  state = {
    lat: -41.2864,
    lng: 174.7842,
    zoom: 11,
  }

  
  render() {
      const center = [this.state.lat, this.state.lng]

      const welly = [{ key: 'Wellington', position: [-41.2864, 174.7842], children: 'Kia Ora'}]

      const markers = [
        { key: 'NAME', position: [-41.30, 174.775], children: 'INFO' },
      ]

    return (
      <Map id="mapid" center={center} zoom={this.state.zoom}>
        {/* Title layer obligatory with openstreetmaps */}
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

          <MyMarkersList markers={welly} />

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
    )
  }
}


export default ReactLeafletMap;
