
import {  MeshStandardMaterial } from "three";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import { frameColorTexture, frameDisplaceTexture, frameRoughnessTexture } from "./textTure";

const objLoader:OBJLoader = new OBJLoader();
// const mtlLoader:MTLLoader = new MTLLoader();
export const framePromise = objLoader.loadAsync(require("src/public/model/photo/1.obj").default);
// export const framePromise = new Promise<Group>((resolve,reject) => {
//     mtlLoader.loadAsync(require("src/public/model/frame.mtl").default).then(materials => {
//         // materials.preload();
//         objLoader
//         .setMaterials(materials)
//         .loadAsync(require("src/public/model/frame.obj").default)
//         .then(group => {
//             resolve(group);
//         }).catch(err => {
//             reject(err);
//         })
//     })
// })
export const frameMateral:MeshStandardMaterial = new MeshStandardMaterial({
    map: frameColorTexture,
    roughnessMap: frameRoughnessTexture,
    bumpMap: frameDisplaceTexture
})