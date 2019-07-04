import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Style from '../styles/global.module.scss'

const position = [-14.2350044, -51.925281]

const MyMap = () => {
  return (
      <Map center={position} zoom={3} className={Style.mapPane}>
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