///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Preloader extends Phaser.State {


        preload() {
            this.load.image('herman', 'assets/HERMAN.png');
            this.load.image('button', 'assets/button.png');
        }

        create() {
            this.game.state.start('Level', true, false);
        }

    }

}