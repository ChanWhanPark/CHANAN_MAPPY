import Map from 'react-map-gl';

export default function MapViewer(){
  const mapboxToken =  "pk.eyJ1IjoiY2hhbmFucGFyayIsImEiOiJjbHF1dnY5eXc1MzJjMm1ta2JpNnUyajd5In0.7wBwb9B5cLl6OuZsJOF66g"
  return (
    <div className="mapbox">
      <Map
      mapboxAccessToken={mapboxToken}
      initialViewState={{
        longitude: 127.1143194,
        latitude: 37.5088916,
        zoom: 14
      }}
      style={{position: 'static', width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"/>
    </div>
  )
}