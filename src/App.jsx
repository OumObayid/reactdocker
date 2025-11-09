import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [moonSpeed, setMoonSpeed] = useState(6); // secondes par orbite
  const [earthSpeed, setEarthSpeed] = useState(20); // secondes par rotation de la Terre

  return (
    
    <div className="space">
      <div className="stars"></div>

      {/* Terre avec vitesse dynamique */}
      <div
        className="earth earth-spin"
        style={{ animationDuration: `${earthSpeed}s` }}
      ></div>

      {/* Orbite et Lune */}
      <div
        className="orbit"
        style={{ animationDuration: `${moonSpeed}s` }}
      >
        <div className="moon"></div>
      </div>

      {/* Contrôles */}
      <div className="controls">
        <div>
          <label>Rotation speed of the Moon :</label>
          <input
            type="range"
            min="2"
            max="15"
            step="0.5"
            value={moonSpeed}
            onChange={(e) => setMoonSpeed(e.target.value)}
          />
          <span>{moonSpeed}s</span>
        </div>

        <div>
          <label>Rotation speed of the Earth :</label>
          <input
            type="range"
            min="5"
            max="60"
            step="1"
            value={earthSpeed}
            onChange={(e) => setEarthSpeed(e.target.value)}
          />
          <span>{earthSpeed}s</span>
        </div>
      </div>
    </div>
  );
}
