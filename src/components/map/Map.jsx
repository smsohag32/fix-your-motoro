"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useRef } from "react";

const customIcon = new Icon({
  iconUrl: "https://i.ibb.co/J5PF1MZ/location.png",
  iconSize: [50, 50],
});

const Map = ({ position, title }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && position?.length > 0) {
      mapRef.current.leafletElement.panTo(position);
    }
  }, [position]);

  return (
    <div className="w-full">
      <div style={{ height: "300px" }}>
        <MapContainer
          center={position}
          zoom={14}
          ref={mapRef}
          style={{ height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{title || ""}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
