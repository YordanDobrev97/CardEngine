import { TextVariant } from '../ui/TextOptions';
import { TextStyle } from '../ui/TextStyle';
import { Theme } from './Theme';

export class ThemeResolver {
    private _theme: Theme;
    constructor(theme: Theme) {
        this._theme = theme;
    }

    resolve(variant: TextVariant): TextStyle {
        return this._theme[variant];
    }
}