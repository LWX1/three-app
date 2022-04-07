// @ts-nocheck
import React, { useEffect, useRef } from "react";
// import EThree from "src/component/three";
// import { box, cylinder, sphere } from "src/component/three/basicObject";
// import { axesHelper, cameraOrthoHelper, gridHelper } from "src/component/three/helper";
// import { ambientLight } from "src/component/three/lights";
// import { codeBox } from "src/component/three/selfObjects";
import { BufferGeometry, CameraHelper, Float16BufferAttribute, Float32BufferAttribute, Float64BufferAttribute, Group, MathUtils, Mesh, MeshBasicMaterial, OrthographicCamera, PerspectiveCamera, Points, PointsMaterial, Scene, SphereGeometry, WebGLRenderer } from "three";
// const GUI = require("three/examples/jsm/libs/lil-gui.module.min.js");
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const Camera = () => {
    const refCanvas = useRef<HTMLDivElement>(null);

    useEffect(() => {
        //    const three = new EThree({dom: refCanvas.current!, camera: 'OrthographicCamera'});
        //    three.addObject(codeBox);
        //    three.addObject(box, sphere, cylinder);
        //    three.addObject(axesHelper, gridHelper);
        //    three.addObject(ambientLight);
        //    cameraOrthoHelper(three.camera, three.scene);
        const scene = new Scene();
        let SCREEN_WIDTH =  refCanvas.current?.offsetWidth;
		let SCREEN_HEIGHT = refCanvas.current?.offsetHeight;
        let aspect = SCREEN_WIDTH/ SCREEN_HEIGHT;
        //
        const frustumSize = 600;
        const camera = new PerspectiveCamera(50, 0.5 * aspect, 1, 10000);
        camera.position.z = 2500;


        const cameraPerspective = new PerspectiveCamera(50, 0.5 * aspect, 1, 1000);

        const cameraPerspectiveHelper = new CameraHelper(cameraPerspective);
        scene.add(cameraPerspectiveHelper);

        //
        const cameraOrtho = new OrthographicCamera(0.5 * frustumSize * aspect / - 2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000);

        const cameraOrthoHelper = new CameraHelper(cameraOrtho);
        scene.add(cameraOrthoHelper);

        //

        // const activeCamera = cameraPerspective;
        // const activeHelper = cameraPerspectiveHelper;


        // counteract different front orientation of cameras vs rig

        cameraOrtho.rotation.y = Math.PI;
        cameraPerspective.rotation.y = Math.PI;

        const cameraRig = new Group();

        cameraRig.add(cameraPerspective);
        cameraRig.add(cameraOrtho);

        scene.add(cameraRig);

        //

        const mesh = new Mesh(
            new SphereGeometry(100, 16, 8),
            new MeshBasicMaterial({ color: 0xffffff, wireframe: true })
        );
        scene.add(mesh);

        const mesh2 = new Mesh(
            new SphereGeometry(50, 16, 8),
            new MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
        );
        mesh2.position.y = 150;
        mesh.add(mesh2);

        const mesh3 = new Mesh(
            new SphereGeometry(5, 16, 8),
            new MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
        );
        mesh3.position.z = 150;
        cameraRig.add(mesh3);

        //

        const geometry = new BufferGeometry();
        const vertices = [];

        for (let i = 0; i < 10000; i++) {

            vertices.push(MathUtils.randFloatSpread(2000)); // x
            vertices.push(MathUtils.randFloatSpread(2000)); // y
            vertices.push(MathUtils.randFloatSpread(2000)); // z

        }
        console.log(new Float16BufferAttribute(vertices, 3))
        console.log(new Float32BufferAttribute(vertices, 3))
        console.log(new Float64BufferAttribute(vertices, 3))
        geometry.setAttribute('position', (new  Float32BufferAttribute(vertices, 3)));

        const particles = new Points(geometry, new PointsMaterial({ color: 0x888888 }));
        scene.add(particles);

        //

        const renderer = new WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        refCanvas.current.appendChild(renderer.domElement);

        renderer.autoClear = false;

        
        const orbitControls = new OrbitControls(camera, renderer.domElement);
        // const orbitControls2 = new OrbitControls(activeCamera, renderer.domElement);
        function animate() {

            requestAnimationFrame( animate );
            orbitControls?.update();
            //  orbitControls2?.update();
            render();
        }
        animate();

        function render() {

            const r = 5|| Date.now() * 0.0005;

            mesh.position.x = 700 * Math.cos( r );
            mesh.position.z = 700 * Math.sin( r );
            mesh.position.y = 700 * Math.sin( r );

            mesh.children[ 0 ].position.x = 70 * Math.cos( 2 * r );
            mesh.children[ 0 ].position.z = 70 * Math.sin( r );

            // if ( activeCamera === cameraPerspective ) {

            //     cameraPerspective.fov = 35 + 30 * Math.sin( 0.5 * r );
            //     cameraPerspective.far = mesh.position.length();
            //     cameraPerspective.updateProjectionMatrix();

            //     cameraPerspectiveHelper.update();
                cameraPerspectiveHelper.visible = false;

                cameraOrthoHelper.visible = false;

            // } else {

            //     cameraOrtho.far = mesh.position.length();
            //     cameraOrtho.updateProjectionMatrix();

            //     cameraOrthoHelper.update();
            //     cameraOrthoHelper.visible = true;

            //     cameraPerspectiveHelper.visible = false;

            // }

            cameraRig.lookAt( mesh.position );

            renderer.clear();

            // activeHelper.visible = true;

            renderer.setViewport( 0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT );
            // renderer.render( scene, activeCamera );

            // activeHelper.visible = true;

            // renderer.setViewport( SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT );
            renderer.render( scene, camera );

        }




    }, [])
    return <div ref={refCanvas} style={{ width: "100%", height: "100%" }}>
    </div>
}

export default Camera;