import React, { useEffect, useRef } from "react";
import EThree from "src/component/three";
import { axesHelper, gridHelper } from "src/component/three/helper";
import { ambientLight, pointLight, spotLight } from "src/component/three/lights";
import {  planeBufferGeometry } from "src/component/three/lightsBasicObject";
import { frameMateral, framePromise } from "src/component/three/loaderModel";
import { Material, Mesh } from "three";
// const GUI = require("three/examples/jsm/libs/lil-gui.module.min.js");


const Model = () => {
    const refCanvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // console.log(refCanvas.current?.offsetHeight,refCanvas.current?.offsetWidth, refCanvas)
       const three = new EThree({dom: refCanvas.current!});
       three.addObject(planeBufferGeometry);
       three.addObject(ambientLight, spotLight, pointLight);
       three.addObject(axesHelper,gridHelper );
       framePromise.then(group => {
           const frameMesh:Mesh = group.children[0] as Mesh;
           (frameMesh.material as Material).dispose();
           frameMesh.material = frameMateral;
           group.rotateY(-Math.PI/2);
           group.scale.set(2,2,2);
           group.position.y = 25;
        three.addObject(group);
       })
     
    }, [])
    return <div ref={refCanvas} style={{width: "100%", height: "100%"}}>
    </div>
}

export default Model;