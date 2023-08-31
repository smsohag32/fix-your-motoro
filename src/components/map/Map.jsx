"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //   iconUrl: require("./icons/placeholder.png"),
  iconSize: [30, 38], // size of the icon
});

const Map = ({ lat, lon }) => {
  console.log(lat, lon);
  
  const position = [
    lat !== "" ? lat : 23.805332718063315,
    lon !== "" ? lon : 90.36954993030622,
  ];

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
