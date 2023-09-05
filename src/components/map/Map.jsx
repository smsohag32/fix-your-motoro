"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: "https://i.ibb.co/J5PF1MZ/location.png",
  iconSize: [50, 50], // size of the icon
});

const Map = ({ position, title }) => {
  let newPosition;
  if (position?.length > 0) {
    newPosition = position;
  } else {
    newPosition = [23.805332718063315, 90.36954993030622];
  }

  return (
    <div className="w-full">
      <MapContainer center={newPosition} zoom={30}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={newPosition} icon={customIcon}>
          <Popup>{title || ""}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
