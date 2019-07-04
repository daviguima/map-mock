import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]

const MyMap = () => {
  return (
    <Map center={position} zoom={13}>
      <p>mapa</p>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>MAPA DE TEC<br />EMBRACE/INPE</Popup>
      </Marker>
    </Map>
  )
}

export default MyMap