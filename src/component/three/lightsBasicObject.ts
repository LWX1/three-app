import { 
    BoxBufferGeometry, 
    Mesh, 
    MeshStandardMaterial,
    PlaneBufferGeometry,  
} from "three";
import { pictureTexture } from "./textTure";

// 地面
export const stage:Mesh = new Mesh(
    new BoxBufferGeometry(200, 10, 200),
    new MeshStandardMaterial({
        color: "#fff",
        roughness: 0, // 光滑度
        

    }),
)
stage.position.y = -5;
stage.receiveShadow = true;

export const box:Mesh = new Mesh( // 网格物体
    new BoxBufferGeometry(20, 20, 20), // 几何对象
    new MeshStandardMaterial({
        color: "red",
        roughness: .3, // 光滑度
        metalness: 1, // 金属度
    }) // 网格标准材质
)
box.castShadow = true;

box.position.y = 10;

// 相框
export const planeBufferGeometry:Mesh = new Mesh(
    new PlaneBufferGeometry(60, 30),
    new MeshStandardMaterial({
        map:pictureTexture
    })
)
planeBufferGeometry.position.y = 25;
