"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// 527 Coffee coordinates (Jl. Maulana Yusuf, Cimuncang, Serang, Banten)
const CAFE_LAT = -6.1143;
const CAFE_LNG = 106.1522;
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/GDKVC4sJcMr9kYFj8";

// Custom marker icon using Leaflet's default marker assets from CDN
// (fixes known issue with missing marker icons in webpack/Next.js builds)
const cafeIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Small helper component to invalidate map size after container animates in
function MapResizer() {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 400);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
}

export default function CafeMap() {
  return (
    <MapContainer
      center={[CAFE_LAT, CAFE_LNG]}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
      attributionControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[CAFE_LAT, CAFE_LNG]}
        icon={cafeIcon}
        eventHandlers={{
          click: () => {
            window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
          },
        }}
      >
        <Popup>
          <div style={{ textAlign: "center", minWidth: 140 }}>
            <strong style={{ fontSize: "1rem" }}>527 Coffee</strong>
            <br />
            <span style={{ fontSize: "0.75rem", color: "#666" }}>
              Jl. Maulana Yusuf, Serang
            </span>
            <br />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: 6,
                fontSize: "0.75rem",
                color: "#2563eb",
                textDecoration: "underline",
              }}
            >
              Open in Google Maps ↗
            </a>
          </div>
        </Popup>
      </Marker>
      <MapResizer />
    </MapContainer>
  );
}
