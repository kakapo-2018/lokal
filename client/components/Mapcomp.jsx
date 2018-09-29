import React, { PureComponent } from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import RouterForwarder from './RouterForwarder';



// var myIcon = L.icon({
//   iconUrl: '../../public/images/icon.jpg',
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-10, -90]
// });
// L.marker([-41.30, 174.775], {icon: myIcon}).addTo(Map);

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
  state = {
    lat: -41.2864,
    lng: 174.7842,
    zoom: 11,
  }

  
  render() {
      const center = [this.state.lat, this.state.lng]
  
      const markers = [
        { key: 'marker1', position: [-41.30, 174.775], children: 'My first popup' },
        { key: 'marker2', position: [-41.28, 174.78], children: 'My second popup' },
        { key: 'marker3', position: [-41.29, 174.79], children: 'My third popup' },
      ]

    return (
      <Map id="mapid" center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Popup>
          <RouterForwarder context={this.context}>
            <Link to={'my destination'}>Go to My Destination</Link>
          </RouterForwarder>
        </Popup>

        <MyMarkersList markers={markers} />

        {/* <Marker position={position} icon={myIcon}>
          <Popup>
            <strong>Some Place</strong> <br /> Some deets
          </Popup>
        </Marker> */}
      </Map>
    )
  }
}

MyComponent.contextTypes = {
  router: PropTypes.object,
}

export default ReactLeafletMap;
