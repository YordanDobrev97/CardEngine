import { Theme } from './Theme';

export const defaultTheme: Theme = {
    text: {
        primary: {
            fontFamily: 'Arial',
            fontSize: 68,
            fontWeight: 'bold',
            color: '#FFFFFF',
            letterSpacing: 1,

            stroke: {
                color: '#000000',
                width: 4,
            },

            shadow: {
                color: '#000000',
                alpha: 0.8,
                blur: 6,
                distance: 3,
            },
        },
    },
    button: {
        primary: {
            width: 220,
            height: 64,
            backgroundColor: '#1B1B1B',
            borderColor: '#C8A15A',
            borderWidth: 2,
            borderRadius: 10,
            fontSize: 36,
        },

        secondary: {
            width: 220,
            height: 64,
            backgroundColor: '#2A2A2A',
            borderColor: '#6B6B6B',
            borderWidth: 1,
            borderRadius: 10,
        },

        danger: {
            width: 220,
            height: 64,
            backgroundColor: '#5A1F1F',
            borderColor: '#A94444',
            borderWidth: 2,
            borderRadius: 10,
        },
    }
};