
export interface RenderObject {
    readonly width: number;
    readonly height: number;
    readonly originalWidth: number;
    readonly originalHeight: number;

    x: number;
    y: number;

    setScale(scale: number): void;
}