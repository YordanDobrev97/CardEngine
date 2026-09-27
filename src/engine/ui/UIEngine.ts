import { RenderObject } from "../rendering/RenderObject";
import { ButtonStyle } from "./Button";
import { TextStyle } from "./TextStyle";
import { BackgroundOptions } from './Background';

export interface UIEngine {
    createBackground(type: BackgroundOptions): RenderObject;
    createText(value: string, style: TextStyle): RenderObject;
    createButton(label: string, style: ButtonStyle): RenderObject;
}