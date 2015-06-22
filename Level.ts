///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Button.ts"/>
module Main {

    export class Level extends Phaser.State {

        public console: Phaser.Text;

        create() {
            this.game.stage.backgroundColor = '#777777';

            var style: {} = {font: "32px Arial", fill: "#FFFFFF", align: "left"};
            this.console = this.game.add.text(0, this.game.height/2, "", style);
            Slideshow.advance(this.console);

            var group: Phaser.Group = this.game.add.group();
            group.add(new Button(this));
        }

    }

}