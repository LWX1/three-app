import { 
    BoxBufferGeometry, 
    CylinderBufferGeometry, 
    Line, 
    Mesh, 
    MeshStandardMaterial, 
    Points, 
    SphereBufferGeometry 
} from "three";

export const box:Line = new Line(
    new BoxBufferGeometry(10,10,10),
    new MeshStandardMaterial({color: "red"}),
)
box.position.x = -10;

export const sphere:Mesh = new Mesh( // 网格物体
    new SphereBufferGeometry(5), // 几何对象
    new MeshStandardMaterial() // 网格标准材质
)

sphere.position.x = 10;

export const cylinder:Points = new Points(
    new CylinderBufferGeometry(5,5,10,32,5),
    new MeshStandardMaterial() 
)

cylinder.position.z = 10