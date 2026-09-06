export interface LayoutOptions {
    horizontal?: 'left' | 'center' | 'right';
    vertical?: 'top' | 'center' | 'bottom';

    shift?: {
        x?: number;
        y?: number;
    };
}