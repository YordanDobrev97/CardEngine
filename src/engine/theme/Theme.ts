import { TextVariant } from '../ui/Text';
import { TextStyle } from '../ui/TextStyle';
import { ButtonStyle, ButtonVariant } from '../ui/Button';

export interface Theme {
    text: Record<TextVariant, TextStyle>;
    button: Record<ButtonVariant, ButtonStyle>;
}