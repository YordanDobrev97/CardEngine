export interface TextStyle {
    fontFamily?: string;
    fontSize?: number;
    fontWeight?: 'normal' | 'bold';
    color?: string;
    letterSpacing?: number;

    stroke?: {
        color: string;
        width: number;
    };

    shadow?: {
        color?: string;
        alpha?: number;
        blur?: number;
        distance?: number;
    };
}