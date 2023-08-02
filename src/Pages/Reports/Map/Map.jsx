// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 23.0225,
//       lng: 72.5714
//     },
//     zoom: 11
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '80vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={23.0225}
//           lng={72.5714}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const LocationMarker = ({ lat, lng }) => (
  <div
    style={{
      position: "absolute",
      top: "-30px",
      left: "-15px",
      width: "30px",
      height: "30px",
      background: "red",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: "bold",
    }}
  >
    You are here
  </div>
);

export default function SimpleMap() {
  const [userLocation, setUserLocation] = useState(null);

  const defaultProps = {
    center: {
      lat: 23.0225,
      lng: 72.5714
    },
    zoom: 11
  };

  useEffect(() => {
    // Retrieve the user's geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }} // Replace with your Google Maps API key
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={userLocation} // Set the map center to user's location
      >
        {userLocation && (
          <LocationMarker lat={userLocation.lat} lng={userLocation.lng} />
        )}

        <AnyReactComponent
          lat={23.0225}
          lng={72.5714}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
