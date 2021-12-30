import React, { useEffect, useRef } from "react";
import EThree from "src/component/three";
import { box, cylinder, sphere } from "src/component/three/basicObject";
import { axesHelper, gridHelper } from "src/component/three/helper";
import { ambientLight } from "src/component/three/lights";
// const GUI = require("three/examples/jsm/libs/lil-gui.module.min.js");


const Home = () => {
    const refCanvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(refCanvas.current?.offsetHeight,refCanvas.current?.offsetWidth, refCanvas)
       const three = new EThree({dom: refCanvas.current!});
       three.addObject(box, sphere, cylinder);
       three.addObject(axesHelper, gridHelper);
       three.addObject(ambientLight);
    }, [])
    return <div ref={refCanvas} style={{width: "100%", height: "100%"}}>
    </div>
}

export default Home;