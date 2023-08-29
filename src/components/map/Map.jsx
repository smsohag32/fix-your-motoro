"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //   iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38], // size of the icon
});

const Map = () => {
  const position = [23.805332718063315, 90.36954993030622];
  return (
    <div className="max-w-md mx-auto">
      <MapContainer center={position} zoom={90} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
  );
};

export default Map;
