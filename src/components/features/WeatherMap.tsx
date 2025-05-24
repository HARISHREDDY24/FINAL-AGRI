import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

interface WeatherMapProps {
  center: [number, number];
  markers: {
    position: [number, number];
    title: string;
    info: string;
  }[];
}

const WeatherMap: React.FC<WeatherMapProps> = ({ center, markers }) => {
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41]
  });

  return (
    <MapContainer 
      center={center} 
      zoom={13} 
      style={{ height: '400px', width: '100%' }}
      className="rounded-lg shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker 
          key={index} 
          position={marker.position}
          icon={customIcon}
        >
          <Popup>
            <div>
              <h3 className="font-semibold">{marker.title}</h3>
              <p>{marker.info}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WeatherMap;