///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Button.ts"/>
module Main {

    export class Level extends Phaser.State {

        public console: Phaser.Text;
        public image: Phaser.Image;

        create() {
            this.game.stage.backgroundColor = '#777777';
            //
            //document.getElementById("videoWrapper").style.height = 0;


            var style: {} = {font: "32px Arial", fill: "#FFFFFF", align: "left",
                wordWrap: true, wordWrapWidth: this.game.width};
            this.console = this.game.add.text(0, this.game.height/2, "", style);
            Slideshow.initialize(this);

            var group: Phaser.Group = this.game.add.group();
            group.add(new Button(this));
        }

    }

}