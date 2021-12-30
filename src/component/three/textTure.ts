import { Texture, TextureLoader } from "three";
import ImgBg  from "src/public/img/texture.jpg";

const textureLoader:TextureLoader = new TextureLoader();

export const pictureTexture:Texture = textureLoader.load(ImgBg);

export const frameColorTexture = textureLoader.load(require("src/public/model/photo/WoodFloor024_1K_Color.jpg").default);

export const frameRoughnessTexture = textureLoader.load(require("src/public/model/photo/WoodFloor024_1K_Roughness.jpg").default);

export const frameDisplaceTexture = textureLoader.load(require("src/public/model/photo/WoodFloor024_1K_Displacement.jpg").default);