// import { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//working block part
// import { useState} from "react";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export default function BusMap() {
//   const [bus, setBus] = useState({ lat: 22.5726, lng: 88.3639 });

  // Simulate bus movement
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBus((prev) => ({
//         lat: prev.lat + (Math.random() - 0.5) * 0.001,
//         lng: prev.lng + (Math.random() - 0.5) * 0.001,
//       }));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

  // Simulate bus movement--------00999
// const URL='http://localhost:5000/bus';
// async function loc() {
//     const res= await fetch(URL);
//     const data=await res.json();
//     // alert(data.lat,data.lng);
    
//     setBus({
//         lat: data.lat,
//         lng: data.lng,
//     });
// }


//alternative to below block
const bus={lat:22.5726, lng:88.3639, name: '33A'};
//*---------------------------------------------------------------------------------------------------------Working part
// const URL = 'http://localhost:5000/bus';
// const [bus, setBus] = useState({ lat: 22.5726, lng: 88.3639 });

// async function loc() {
//   try {
//     const res = await fetch(URL);
//     const data = await res.json();

//     // alert(`${data.lat}, ${data.lng}`);
    

//     setBus({
//       lat: data.lat,
//       lng: data.lng,
//     });
//   } catch (error) {
//     console.error("Error fetching bus location:", error);
//   }
// }


// setInterval(async()=>{
//     loc();
// },3000)

//---------------------------------------------------------------------------------------------------------------------------


  return (
    <MapContainer center={[bus.lat, bus.lng]} zoom={15} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[bus.lat, bus.lng]}>
        <Popup>🚍 {bus.name} Bus Location</Popup>
      </Marker>
    </MapContainer>
  );
}