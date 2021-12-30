import React, { useEffect, useRef } from "react";
import EThree from "src/component/three";
import { axesHelper, gridHelper, pointHelper } from "src/component/three/helper";
import { ambientLight, pointLight, spotLight } from "src/component/three/lights";
// import {  stage } from "src/component/three/lightsBasicObject";
import { codeBox } from "src/component/three/selfObjects";
// const GUI = require("three/examples/jsm/libs/lil-gui.module.min.js");


const MyGeometry = () => {
    const refCanvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
       const three = new EThree({dom: refCanvas.current!});
       three.addObject(codeBox);
       three.addObject(ambientLight, pointLight, spotLight);
       pointHelper.position.set(50,50,50);
       three.addObject(axesHelper, gridHelper);
    }, [])
    return <div ref={refCanvas} style={{width: "100%", height: "100%"}}>
    </div>
}

export default MyGeometry;