import { AxesHelper, GridHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";
import { hemisphereLight, pointLight, spotLight } from "./lights";
// const {GUI} = require("three/examples/jsm/libs/lil-gui.module.min.js");

export const axesHelper = new AxesHelper(500);
export const gridHelper = new GridHelper(500, 30, "red", "yellow");
export const pointHelper = new PointLightHelper(pointLight, pointLight.distance, pointLight.color);

export const spotHelper = new SpotLightHelper(spotLight, spotLight.color);

export const hemisphereLightHelper = new HemisphereLightHelper( hemisphereLight, 5 );