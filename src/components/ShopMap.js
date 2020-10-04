import "./ShopMap.css";
import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [13, 0]
});

class MapLeaflet extends Component {

  render() {
    const position = [44.435818, 26.101634];
    return (
      <div id="map">
      	<h2 > <FontAwesomeIcon icon = {faMapMarkerAlt} size ="lg"/> You can find us here </h2>
        <Map style={{ height: "400px" }} center={position} zoom={20}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customMarker}>
            <Popup>
             Meow !
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}
export default MapLeaflet