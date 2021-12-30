import React, { useEffect, useRef } from "react";
import EThree from "src/component/three";
import { axesHelper, gridHelper, pointHelper, spotHelper } from "src/component/three/helper";
import { ambientLight, pointLight, spotLight } from "src/component/three/lights";
import { box, planeBufferGeometry, stage } from "src/component/three/lightsBasicObject";
// const GUI = require("three/examples/jsm/libs/lil-gui.module.min.js");


const Lights = () => {
    const refCanvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(refCanvas.current?.offsetHeight,refCanvas.current?.offsetWidth, refCanvas)
       const three = new EThree({dom: refCanvas.current!});
       three.addObject(box, stage, planeBufferGeometry);
       three.addObject(ambientLight, spotLight, pointLight);
       pointHelper.position.set(50,50,50);
       three.addObject(axesHelper, gridHelper, pointHelper, spotHelper);
    }, [])
    return <div ref={refCanvas} style={{width: "100%", height: "100%"}}>
    </div>
}

export default Lights;