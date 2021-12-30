import { BufferAttribute, BufferGeometry, Mesh, MeshStandardMaterial } from "three";
import { pictureTexture } from "./textTure";

const size = 20;
const points:Float32Array = new Float32Array([
    -size,size,size,
    size,size,size,
    size,size,-size,
    -size,size,-size,

    -size, -size, size,
    size, -size, size,
    size, -size, -size,
    -size, -size, -size
])

const index:number[] = [
    0,1,2,
    2,3,0,
    
    0,4,5,
    5,1,0,

    1,5,6,
    6,2,1,

    2,6,7,
    7,3,2,

    0,7,4,
    0,3,7,

    5,4,6,
    7,6,4
];

const uv:Float32Array = new Float32Array([
    0,0,
    1,0,
    1,1,
    0,1,

    0,0,
    1,0,
    1,1,
    0,1

]);

const geometry:BufferGeometry = new BufferGeometry();
geometry.setAttribute("position", new BufferAttribute(points, 3)); // 位置信息
geometry.setAttribute("normal", new BufferAttribute(points, 3)); // 法线信息，才会有光泽
geometry.setAttribute("uv", new BufferAttribute(uv, 2) );

geometry.setIndex(index);

const material:MeshStandardMaterial = new MeshStandardMaterial({
    color: "white",
    map: pictureTexture
})

export const codeBox:Mesh = new Mesh(geometry, material);

codeBox.position.y = 25;