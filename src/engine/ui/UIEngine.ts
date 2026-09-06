import { RenderObject } from "../rendering/RenderObject";
import { ButtonStyle } from "./Button";
import { TextStyle } from "./TextStyle";

export interface UIEngine {
    createText(value: string, style: TextStyle): RenderObject;
    createButton(label: string, style: ButtonStyle): RenderObject;
}