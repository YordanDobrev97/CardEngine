import { LayoutOptions } from "../types/LayoutOptions";

export interface ButtonStyle {
    width?: number;
    height?: number;

    backgroundColor?: string;

    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;

    textColor?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold';
}

export type ButtonVariant =  | 'primary' | 'secondary' | 'danger';

export interface ButtonOptions {
    variant?: ButtonVariant;
    layout?: LayoutOptions;
}