/**
 * 
 */
import {
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
    Vector3,
    Object3D,
    OrthographicCamera,
} from 'three';

import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

interface Iparams {
    dom: HTMLElement;
    openStats?: Boolean;
    openOrbitControls?: Boolean;
    camera?: string;
}

/**
 * 阴影效果
 * 1、渲染器开启阴影   this.renderer.shadowMap.enabled = true;
 * 2、灯光开启阴影 spotLight.castShadow = true;
 * 3、物体接受阴影 stage.receiveShadow = true;
 * 4、物体产生阴影 box.castShadow = true;
 */

class EThree {
    private dom: HTMLElement;
    public camera: PerspectiveCamera | OrthographicCamera;
    public scene: Scene;
    public renderer: WebGLRenderer;
    private stats?: Stats;
    private openStats?: Boolean = true;
    private openOrbitControls?: Boolean = true;
    private orbitControls?: OrbitControls;
    constructor(params: Iparams) {
        this.dom = params.dom;
        this.openStats = params.openStats === undefined ? this.openStats : params.openStats;
        this.openOrbitControls = params.openOrbitControls === undefined ? this.openOrbitControls : params.openOrbitControls;
        this.renderer = new WebGLRenderer({
            antialias: true
        });
        this.renderer.shadowMap.enabled = true;
        this.scene = new Scene();
        if (params.camera === 'OrthographicCamera') {
            this.camera = new OrthographicCamera(
                this.dom.offsetWidth / - 2,
                this.dom.offsetWidth / 2,
                this.dom.offsetHeight / 2,
                this.dom.offsetHeight / - 2,
                1,
                1000);
                this.camera.position.set(300, 300, 300);
            
        } else {
            this.camera = new PerspectiveCamera(45, this.dom.offsetWidth / this.dom.offsetHeight, 1, 1000);
            // 相机的位置
            this.camera.position.set(0, 50, 200);
            

        }
        // 相机看向哪个地点
        this.camera.lookAt(new Vector3(0, 0, 0));
        // 怎么去看，斜着看还是正着看
        this.camera.up = new Vector3(0, 1, 0);



        this.renderer.setSize(this.dom.offsetWidth - 10, this.dom.offsetHeight - 10, true);


        // this.scene.add(box);

        // 添加性能监听器
        if (this.openStats) {
            this.addStats();
        }

        // // 设计背景颜色
        // this.renderer.setClearColor("#FFF");
        // // 清除颜色
        // this.renderer.clearColor();
        this.dom.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
        if (this.openOrbitControls) {
            this.addOrbitControls();
        }
        const renderFun = () => {
            // box.position.x += -0.01;
            // box.rotation.y += 0.001;
            // this.camera.position.x += -0.01;
            this.renderer.render(this.scene, this.camera);
            if (this.openStats) {
                this.stats?.update();
            }
            if (this.openOrbitControls) {
                this.orbitControls?.update();
            }
            requestAnimationFrame(renderFun);
        }

        renderFun();

    }
    addStats() {
        this.stats = Stats();
        const dom = this.stats.domElement;
        dom.style.cssText = "position:fixed;top:20px;right:20px;"
        this.dom.appendChild(dom);
    }

    addOrbitControls() {
        this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
        // 更改默认鼠标事件
        // this.orbitControls.mouseButtons = {
        //     LEFT: null as unknown as MOUSE,
        //     MIDDLE: MOUSE.DOLLY,
        //     RIGHT: MOUSE.ROTATE
        // }
        // this.orbitControls.autoRotate = true;
    }

    addObject(...object: Object3D[]) {
        // console.log(object)
        object.forEach(elem => {
            this.scene.add(elem);
        })
    }

    amimation() {

    }
}

export default EThree;