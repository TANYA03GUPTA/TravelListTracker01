import { useSearchParams, useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import useUrlPosition from "../hooks/useUrlPosition";

export default function Map() {
  const flagemojiToPNG = (flag) => {
    var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  };

  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([45, 10]);
  const [userLocation, setUserLocation] = useState(null);

  const {
    isLoading: isLoadingPosition,
    position: geolocationPosition,
    getPosition,
  } = useGeolocation();

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  useEffect(
    function () {
      if (geolocationPosition)
        setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    },
    [geolocationPosition]
  );

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "loading..." : "Set your position"}
      </Button>

      <MapContainer
        className={styles.map}
        //center={mapPosition}
        center={mapLat && mapLng ? [mapLat, mapLng] : mapPosition}
        zoom={8}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
        OpenStreetMap
        </a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              <span>{flagemojiToPNG(city.emoji)}</span>
              {city.cityName}
            </Popup>
          </Marker>
        ))}
        <ChangeCenter
          position={mapLat && mapLng ? [mapLat, mapLng] : mapPosition}
        />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  //
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
  //const navigate = useNavigate();
  //const map = useMapEvents({
  //  click: () => map.locate(),
  //  locationfound: (location) => {
  //    console.log("location found:", location);
  //    navigate(`form?lat=${location.latlng.lat}&lng=${location.latlng.lng}`);
  //  },
  //});
}
