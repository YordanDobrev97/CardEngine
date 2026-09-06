import { LayoutOptions } from "../types/LayoutOptions";

export type TextVariant = 'primary';

export interface TextOptions {
    variant?: TextVariant;
    layout?: LayoutOptions;
}