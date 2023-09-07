import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Marker, Popup, TileLayer } from "react-leaflet";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const customIcon = new Icon({
  iconUrl: "https://i.ibb.co/J5PF1MZ/location.png",
  iconSize: [50, 50],
});

const Map = ({ position, title }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then((L) => {
        const newPosition =
          position?.length > 0
            ? position
            : [23.805332718063315, 90.36954993030622];

        const map = L.map("mapid").setView(newPosition, 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker(newPosition, { icon: customIcon }).addTo(map);
      });
    }
  }, [position]);

  return (
    <div className="w-full">
      {typeof window !== "undefined" && (
        <MapContainer center={position} zoom={30} id="mapid">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>{title || ""}</Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
