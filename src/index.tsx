import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TwoCircles } from "./pieces/TwoCircles";
import SvgWrapper from "./SvgWrapper";
import { TwoWaves } from "./pieces/TwoWaves";
import { CircleWave } from "./pieces/CircleWave";
import { ThreeCircles } from "./pieces/ThreeCircles";
import { ThreeWaves } from "./pieces/ThreeWaves";
import { Radial } from "./Components/Radial";
import { RadialWave } from "./pieces/RadialWave";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/circles"
          element={
            <SvgWrapper>
              <TwoCircles
                {...{
                  pixelSpacing: 50,
                  combDistance: 0.1,
                }}
              />
            </SvgWrapper>
          }
        />
        <Route
          path="/waves"
          element={
            <SvgWrapper>
              <TwoWaves
                {...{
                  pixelSpacing: 50,
                  combDistance: 0.1,
                }}
              />
            </SvgWrapper>
          }
        />
        <Route
          path="/circle-wave"
          element={
            <SvgWrapper>
              <CircleWave
                {...{
                  pixelSpacing: 50,
                  combDistance: 0.1,
                }}
              />
            </SvgWrapper>
          }
        />
        <Route
          path="/three-circles"
          element={
            <SvgWrapper>
              <ThreeCircles
                {...{
                  pixelSpacing: 50,
                  combDistance: 0.1,
                }}
              />
            </SvgWrapper>
          }
        />
        <Route
          path="/three-waves"
          element={
            <SvgWrapper>
              <ThreeWaves
                {...{
                  pixelSpacing: 50,
                  combDistance: 0.1,
                }}
              />
            </SvgWrapper>
          }
        />
        <Route
          path="/radial-wave"
          element={
            <SvgWrapper>
              <RadialWave
                {...{
                  pixelSpacing: 50,
                  combDistance: 0.1,
                }}
              />
            </SvgWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
