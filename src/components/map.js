import React from 'react'
import { Map, Marker, Popup, TileLayer, ImageOverlay, GeoJSON } from 'react-leaflet'
import Style from '../styles/global.module.scss'
import { geojsonData } from "./equator_anomaly.geojson"

const position = [-14.2350044, -51.925281]

const MyMap = () => {

  const options = {
    color: "#000000",
    opacity: 0.8,
  };

  return (
      <Map center={position} zoom={3} className={Style.mapPane}>

        <ImageOverlay
          bounds={[[19, -90], [-51, -30]]}
          url="http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312950"
          transparent={true}/>

        <ImageOverlay
          bounds={[[19, -90], [-51, -30]]}
          url="http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312960"
          transparent={true}/>

        <ImageOverlay
          bounds={[[19, -90], [-51, -30]]}
          url="http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312970"
          transparent={true}/>

        <ImageOverlay
          bounds={[[19, -90], [-51, -30]]}
          url="http://www2.inpe.br/climaespacial/AGCTecViewer/faces/servlet_image_rt.jsp?idImage=312980"
          transparent={true}/>

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Marker position={position}>
          <Popup>MAPA DE TEC<br />EMBRACE/INPE</Popup>
        </Marker>

        <GeoJSON data={geojsonData} {...options}/>

      </Map>
  )
}

export default MyMap