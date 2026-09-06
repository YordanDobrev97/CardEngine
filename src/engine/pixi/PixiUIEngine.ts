import {
    Container,
    Graphics,
    Text
} from 'pixi.js';
import { RenderObject } from '../rendering/RenderObject';
import { ButtonStyle } from '../ui/Button';
import { TextStyle } from '../ui/TextStyle';
import { UIEngine } from '../ui/UIEngine';
import { PixiRenderObject } from '../rendering/PixiRenderObject';

export class PixiUiEngine implements UIEngine {

    createText(value: string, options: TextStyle) {
        const text = new Text({
            text: value,
            style: {
                fontSize: options.fontSize,
                fill: options.color,
                fontFamily: options.fontFamily,
                fontWeight: options.fontWeight,
                letterSpacing: options.letterSpacing,

                stroke: options.stroke
                    ? {
                        color: options.stroke.color,
                        width: options.stroke.width,
                    }
                    : undefined,

                dropShadow: options.shadow
                    ? {
                        color: options.shadow.color,
                        alpha: options.shadow.alpha,
                        blur: options.shadow.blur,
                        distance: options.shadow.distance,
                    }
                    : undefined,
            }
        });
        return new PixiRenderObject(text);
    }
    createButton(label: string, style: ButtonStyle): RenderObject {
        const width = style.width ?? 220;
        const height = style.height ?? 64;
        const radius = style.borderRadius ?? 10;

        const container = new Container();

        const background = new Graphics()
            .roundRect(0, 0, width, height, radius)
            .fill(style.backgroundColor ?? '#1A1712');

        if (style.borderWidth) {
            background.stroke({
                color: style.borderColor ?? '#FFFFFF',
                width: style.borderWidth,
            });
        }

        const text = new Text({
            text: label,
            style: {
                fill: style.textColor ?? '#FFFFFF',
                fontSize: style.fontSize ?? 24,
                fontFamily: style.fontFamily ?? 'Arial',
                fontWeight: style.fontWeight ?? 'bold',
            },
        });

        text.x = (width - text.width) / 2;
        text.y = (height - text.height) / 2;

        container.addChild(background);
        container.addChild(text);

        return new PixiRenderObject(container);
    }

}