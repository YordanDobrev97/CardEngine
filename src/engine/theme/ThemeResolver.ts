import { ButtonStyle, ButtonVariant } from '../ui/Button';
import { TextVariant } from '../ui/Text';
import { TextStyle } from '../ui/TextStyle';
import { Theme } from './Theme';

export class ThemeResolver {
    private _theme: Theme;
    constructor(theme: Theme) {
        this._theme = theme;
    }

    resolveText(variant: TextVariant): TextStyle {
        return this._theme.text[variant];
    }

    resolveButton(variant: ButtonVariant): ButtonStyle {
        return this._theme.button[variant];
    }
}