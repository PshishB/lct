import React from "react";
import { MapContainer, TileLayer, Marker, Polyline, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ vertices, edges, startPoint, endPoint }) => {
    const polyline = edges.map(edge => [vertices[edge[0]], vertices[edge[1]]]);

    const specialPoints = [
        { coords: [51.515, -0.09], color: 'red' },
        { coords: [51.52, -0.1], color: 'green' },
        { coords: [51.53, -0.11], color: 'blue' }
    ];

    return (
      <MapContainer center={startPoint} zoom={13} style={{ height: '500px', width: '800px' }} className="main__map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {vertices.map((vertex, index) => (
          <Marker key={index} position={vertex} />
        ))}
        <Polyline positions={polyline} color="blue" />
        <Marker position={startPoint} />
        <Marker position={endPoint} />
        {specialPoints.map((point, index) => (
          <CircleMarker
            key={index}
            center={point.coords}
            color={point.color}
            radius={10}
          />
        ))}
      </MapContainer>
    );
}

export default Map;
