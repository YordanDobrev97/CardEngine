import { Theme } from './Theme';

export const defaultTheme: Theme = {
    primary: {
        fontFamily: 'Arial',
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFFFFF',
        letterSpacing: 1,

        stroke: {
            color: '#000000',
            width: 2,
        },

        shadow: {
            color: '#000000',
            alpha: 0.3,
            blur: 4,
            distance: 2,
        },
    },
};