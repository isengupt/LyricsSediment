import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import _ from "lodash";
import { Task } from "./Task";
import { Tasks } from "/imports/api/tasks";
import { SongPoint } from "../database/Points";
import MapGL, { Marker, Popup, Source, Layer } from "@urbica/react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pins from "./pins";
import { TaskForm } from "./TaskForm";
import { LoginForm } from "./LoginForm";
import SidePanel from "./SidePanel";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiaXNlbmd1cHQ3ODE3IiwiYSI6ImNrZzQ3cWduajBpMXoyeGwwd2hpNjRidzcifQ.dek7zmdCnM9T-dMnXrARSQ";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);
  const [highlights, setHighlights] = useState(null);
  useEffect(() => {
    Meteor.call("getDates", (e, r) => {
      console.log(e);
      if (!e) {
        console.log(e);
        if (r) {
          console.log(r);
        }
      }
    });
  }, []);

  useEffect(() => {
    Meteor.call("getPoints", (e, r) => {
      console.log(e);
      if (!e) {
        console.log(e);
        if (r) {
          console.log(r);
          setSongs(r);
        }
      }
    });
  }, []);

  const [viewport, setViewport] = useState({
    latitude: 37.78,
    longitude: -122.41,
    zoom: 11,
  });

  const { user } = useTracker(() => {
    Meteor.subscribe("tasks");

    return {
      user: Meteor.user(),
    };
  });

  const [position, setPosition] = useState({
    longitude: 0,
    latitude: 0,
  });

  const style = {
    padding: "10px",
    color: "#fff",
    cursor: "pointer",
    background: "#1978c8",
    borderRadius: "6px",
  };

  const onDragEnd = (lngLat) => {
    setPosition({ longitude: lngLat.lng, latitude: lngLat.lat });
  };

  const onMarkerClick = (event) => {
    alert("You clicked on marker");
    event.stopPropagation();
  };

  const _onClickMarker = (city) => {
    setPopupInfo(city);
  };

  const  passHighLight = (r) => {
    console.log(r);
    setHighlights(r);
  }

  function _renderPopup() {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          className="map-pop"
          longitude={popupInfo.location.lng}
          latitude={popupInfo.location.lat}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <div className="pop-info">
            <div className="pop-title"> {popupInfo.title}</div>
            <img className="pop-image" width={120} src={popupInfo.image} />
          </div>
        </Popup>
      )
    );
  }

  if (!user) {
    return (
      <div className="simple-todos-react">
        <LoginForm />
      </div>
    );
  }

  return (
    <div className="simple-todos-react">
      <MapGL
        style={{ width: "100%", height: "600px" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        accessToken={MAPBOX_ACCESS_TOKEN}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        onViewportChange={setViewport}
      >
        <Pins data={songs} highlights={highlights} onClick={_onClickMarker} />

        {_renderPopup()}
      </MapGL>
      <SidePanel
        songInfo={popupInfo}

        setHighlights={setHighlights}
      />
    </div>
  );
};

export default App;
