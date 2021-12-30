import React, { useCallback, useEffect, useRef } from "react";
import EThree from "src/component/three";
import { axesHelper, gridHelper } from "src/component/three/helper";
import { hemisphereLight } from "src/component/three/lights";
import { stage } from "src/component/three/lightsBasicObject";
import { gltfObject } from "src/component/three/personObject";

import * as THREE from 'three';
import { AnimationMixer, Clock, SkeletonHelper } from "three";
const { GUI } = require("three/examples/jsm/libs/lil-gui.module.min.js");


const Person = () => {
    const refCanvas = useRef<HTMLDivElement>(null);

    const changeAnimation = ( animationList: THREE.AnimationAction[], active:number) => {
        animationList.map((item,index) => {
            if(index !== active) {
                item.stop();
            }else {
                item.play();
            }
            return item;
        })
    }

    const creacteFloder = useCallback(
        (animationList: THREE.AnimationAction[]) => {
            const panel = new GUI({ width: 310 });
            const folder = panel.addFolder("运动类型");
            const options = {
                run: () => {
                    changeAnimation(animationList, 2)
                },
                walk:() => {
                    changeAnimation(animationList, 1)
                }, 
                idle: () => {
                    changeAnimation(animationList, 0)
                }, 
                tPose: () => {
                    changeAnimation(animationList, 3)
                }, 
            }
            Object.keys(options).map(item => {
                folder.add(options, item);
                return item;
            })
        },
        []
    )
    

    useEffect(() => {
        let mixer: AnimationMixer;
        const three = new EThree({ dom: refCanvas.current! });

        three.camera.position.set(1, 3.5, -3);
        let clock = new Clock();
        // const dirLight = new THREE.DirectionalLight(0xffffff);
        // dirLight.position.set(- 3, 10, - 10);
        // dirLight.castShadow = true;
        // dirLight.shadow.camera.top = 2;
        // dirLight.shadow.camera.bottom = - 2;
        // dirLight.shadow.camera.left = - 2;
        // dirLight.shadow.camera.right = 2;
        // dirLight.shadow.camera.near = 0.1;
        // dirLight.shadow.camera.far = 40;
        // three.scene.add(dirLight);

        // 贴图格式 默认为THREE.LinearEncoding
        three.renderer.outputEncoding = THREE.sRGBEncoding;
        // three.renderer.shadowMap.enabled = true;
        // three.camera.lookAt(0, 1, 0);
        three.scene.background = new THREE.Color("0xa0a0a0");
        hemisphereLight.position.set(0, 20, 0);
        three.addObject(stage);
        three.addObject(axesHelper, gridHelper);
        three.addObject(hemisphereLight);
        gltfObject.then(gltf => {
            const model = gltf.scene;
            three.addObject(model);
            const skeleton = new SkeletonHelper(model);
            skeleton.visible = false;
            three.addObject(skeleton);
            const animations = gltf.animations;
            mixer = new AnimationMixer(model);
            const idleAction = mixer.clipAction(animations[0]);
            const walkAction = mixer.clipAction(animations[3]);
            const runAction = mixer.clipAction(animations[1]);
            const tPoseAction = mixer.clipAction(animations[2]);
            creacteFloder([idleAction, walkAction, runAction, tPoseAction]);
            mixer.setTime(0.1);
            // idleAction.play();
            runAction.play();
            // tPoseAction.play();
            // walkAction.play();
            // console.log(gltf, idleAction)
        })
        function animateing() {

            // Render loop
            mixer?.update(clock.getDelta());
            three.renderer.render(three.scene, three.camera);
            requestAnimationFrame(animateing);
        }
        animateing();
        return () => {

        }

    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    return <div ref={refCanvas} style={{ width: "100%", height: "100%" }}>
    </div>
}

export default Person;