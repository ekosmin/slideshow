///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Level.ts"/>
///<reference path="Slideshow.ts"/>
module Main {

    export class Button extends Phaser.Sprite {

        private level: Level;

        constructor(level: Level) {
            super(level.game, level.game.width/2, 0, 'button', 0);
            this.level = level;
            this.width = this.width/8;
            this.height = this.height/8;
            this.y = level.game.height - this.height;

            this.inputEnabled = true;
            this.events.onInputDown.add(this.advanceSlide, this);
        }

        private advanceSlide(): void {
            Slideshow.advance(this.level.console);
        }
    }
}