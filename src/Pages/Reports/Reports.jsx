// /* eslint-disable jsx-a11y/iframe-has-title */
// import React from "react";
// import Sidebar from "../../components/sidebar/Sidebar";
// import "./Reports.css";
// // import Map from "./Map/Map";

// export default function Reports() {
//   return (
//     <div className="App">
//       <div className="glass2">
//         <Sidebar />
//         <div className="main_dashboard2">
//           <h1>Report</h1>
//           {/* <Map /> */}
//           <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.359545986128!2d72.62743921126184!3d22.97380247912137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e88a6f8d477a7%3A0xd2e7196dbea927f6!2sMultispan%20Control%20Instruments%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1689765620156!5m2!1sen!2sin"
//         width="98%" height="800" allowfullscreen="" loading="lazy"
//         referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Sidebar from "../../components/sidebar/Sidebar";

class Reports extends Component {
  state = {
    markers: [
      { name: "Marker 1", position: { lat: 22.9736889, lng: 72.6298079 } },
      { name: "Marker 2", position: { lat: 22.9952, lng: 72.6041 } },
      { name: "Marker 3", position: { lat: 23.0120, lng: 72.5108 } },
      { name: "Marker 4", position: { lat: 22.9642, lng: 72.5903 } },
      { name: "Marker 6", position: { lat: 22.9636889, lng: 72.6398079 } },
      { name: "Marker 7", position: { lat: 23.0686, lng: 72.6536 } },
      // Add more markers as needed
    ],
  };

  // Handle marker click event
  onMarkerClick = (props, marker, e) => {
    console.log("Clicked on marker: ", props.name);
  };

  render() {
    const { markers } = this.state;

    return (
      <>
        <div className="App">
          <div className="glass glass2">
            <Sidebar />
            <div className="main_dashboard">
              <h1>Google Map</h1>
              <div style={{ width: "100%", height: "500px" }}>
                <Map
                  google={this.props.google}
                  zoom={11}
                  initialCenter={{ lat: 22.9736889, lng: 72.6298079 }}
                  style={{ width: "100rem", height: "85vh" }}
                >
                  {/* Map through the markers array and render multiple markers */}
                  {markers.map((marker, index) => (
                    <Marker
                      key={index}
                      onClick={this.onMarkerClick}
                      name={marker.name}
                      position={marker.position}
                    />
                  ))}
                  <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
                </Map>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC1CL-suEWuweVkFTB-SHluR8uw5uqSV9k",
})(Reports);
