import { LayoutOptions } from "../types/LayoutOptions";

export interface RenderObject {
    readonly width: number;
    readonly height: number;
    readonly originalWidth: number;
    readonly originalHeight: number;

    x: number;
    y: number;

    layout?: LayoutOptions;

    setScale(scale: number): void;
}