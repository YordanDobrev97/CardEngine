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
import { BackgroundOptions } from '../ui/Background';

export class PixiUiEngine implements UIEngine {

    createBackground(options: BackgroundOptions): RenderObject {
        const container = new Container();
        container.label = 'background';

        if (options.type === 'color') {
            const bg = new Graphics();

            bg.rect(0, 0, 100, 100).fill({
                color: options.color
            });

            container.addChild(bg);
        }

        return new PixiRenderObject(container);
    }

    createText(value: string, options: TextStyle) {
        const text = new Text({
            text: value,
            style: {
                fontSize: options.fontSize,
                fill: options.color,
                fontFamily: options.fontFamily,
                fontWeight: options.fontWeight,
                // letterSpacing: options.letterSpacing,

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
        container.label = 'Container';

        const background = new Graphics()
            .roundRect(0, 0, width, height, radius)
            .fill(style.backgroundColor ?? '#1A1712');
        background.label = 'Background';

        if (style.borderWidth) {
            background.stroke({
                color: style.borderColor ?? '#FFFFFF',
                width: style.borderWidth,
            });
        }

        const text = this.createText(label, {
            color: style.textColor ?? '#FFFFFF',
            fontSize: style.fontSize ?? 24,
            fontFamily: style.fontFamily ?? 'Arial',
            fontWeight: style.fontWeight ?? 'bold',
        });
    
        text.displayObject.x = (width - text.displayObject.width) / 2;
        text.displayObject.y = (height - text.displayObject.height) / 2;
        console.log(text)

        container.addChild(background);
        container.addChild(text.displayObject);

        return new PixiRenderObject(container);
    }

}