import { AmbientLight, HemisphereLight, PointLight, SpotLight } from "three";

 // 环境光
export const ambientLight:AmbientLight = new AmbientLight("#fff",.3);

/**
 * 点光源
 * params：
 * color颜色
 * intensity - (可选参数) 光照强度。 缺省值 1。
 * distance - 这个距离表示从光源到光照强度为0的位置。 当设置为0时，光永远不会消失(距离无穷大)。缺省值 0.
 * decay - 沿着光照距离的衰退量。缺省值 1。 在 physically correct 模式中，decay = 2。
 * 
 */
export const pointLight:PointLight = new PointLight("yellow", 1, 50, 1);

pointLight.position.set(20,20,20);


/**
 * color - (可选参数) 十六进制光照颜色。 缺省值 0xffffff (白色)。
 * intensity - (可选参数) 光照强度。 缺省值 1。
 * distance - 从光源发出光的最大距离，其强度根据光源的距离线性衰减。
 * angle - 光线散射角度，最大为Math.PI/2。
 * penumbra - 聚光锥的半影衰减百分比。在0和1之间的值。默认为0。
 * decay - 沿着光照距离的衰减量。
 */

export const spotLight:SpotLight = new SpotLight("#FFF", 1, 500, Math.PI/4, 1, 1);
spotLight.castShadow = true;
spotLight.position.set(-30,50,30);

/**
 *  skyColor - (可选参数) 天空中发出光线的颜色。 缺省值 0xffffff。
 *  groundColor - (可选参数) 地面发出光线的颜色。 缺省值 0xffffff。
 *  intensity - (可选参数) 光照强度。 缺省值 1。
 */

export const hemisphereLight:HemisphereLight = new HemisphereLight( 0xffffff, 0x444444, 1 );
