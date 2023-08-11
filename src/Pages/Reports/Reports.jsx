import React, { Component } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Sidebar from "../../components/sidebar/Sidebar";

class Reports extends Component {


  
  state = {
    markers: [
      { name: "Pooja", position: { lat: 22.9736889, lng: 72.6298079 } },
      { name: "Dhruva", position: { lat: 22.9952, lng: 72.6041 } },
      { name: "Mehul", position: { lat: 23.012, lng: 72.5108 } },
      { name: "Akash", position: { lat: 22.9642, lng: 72.5903 } },
      { name: "Swati", position: { lat: 22.9636889, lng: 72.6398079 } },
      { name: "Marker", position: { lat: 23.0686, lng: 72.6536 } },
      // Add more markers as needed
    ],
  };

  // Handle marker click event
  // onMarkerClick = (props, marker, e) => {
  //   console.log("Clicked on marker: ", props.name);
  // };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true,
    });
    console.log(`${marker.name}`)
  };

  // Handle InfoWindow close event
  onInfoWindowClose = () => {
    this.setState({
      activeMarker: null,
      showingInfoWindow: false,
    });
  };



  
  render() {
    // const { markers } = this.state;
    // const { markers, activeMarker, showingInfoWindow } = this.state;

    return (
      <>
        <div className="App">
          <div className="glass glass2">
            <Sidebar />
            <div className="main_dashboard">
              <h1>Google Map</h1>
              <div style={{ width: "100%", height: "500px" }}>
                {/* <Map
                  google={this.props.google}
                  zoom={11}
                  initialCenter={{ lat: 22.9736889, lng: 72.6298079 }}
                  style={{ width: "100rem", height: "85vh" }}
                >
                  {markers.map((marker, index) => (
                    <Marker
                      key={index}
                      onClick={this.onMarkerClick}
                      name={marker.name}
                      position={marker.position}
                      className='marker-name'
                    />
                  ))}
                  <InfoWindow
                    marker={activeMarker}
                    visible={showingInfoWindow}
                    onClose={this.onInfoWindowClose}
                  >
                    <div>
                 
                      {activeMarker && <div>{activeMarker.name}</div>}
                    </div>
                  </InfoWindow>
                </Map> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC1CL-suEWuweVkFTB-SHluR8uw5uqSV9k",
// })(Reports);
export default Reports;