
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const gltfLoader = new GLTFLoader();

export const gltfObject = new Promise<GLTF>((resolve, reject) => {
    gltfLoader.loadAsync(require("src/public/model/gltf/Soldier.glb").default).then(gltf => {
        resolve(gltf)
    })
})
