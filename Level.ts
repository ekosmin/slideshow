///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Button.ts"/>
module Main {

    export class Level extends Phaser.State {

        public console: Phaser.Text;
        public image: Phaser.Image;

        create() {
            this.game.stage.backgroundColor = '#777777';
            //document.getElementById("videoWrapper").style.visibility = "hidden";
            //document.getElementById("videoWrapper").style.height = 0;
            var player:HTMLVideoElement = document.getElementsByTagName("video")[0];

            var mp4Vid = document.getElementById('mp4Source');
            var oggVid = document.getElementById('oggSource');

            player.pause();

            // Now simply set the 'src' attribute of the mp4Vid variable!!!!
            // (...using the jQuery library in this case)

            mp4Vid.setAttribute('src', 'eh5v.files/html5video/next.m4v');
            oggVid.setAttribute('src', 'eh5v.files/html5video/next.ogv');

            player.load();
            player.play();

            var style: {} = {font: "32px Arial", fill: "#FFFFFF", align: "left",
                wordWrap: true, wordWrapWidth: this.game.width};
            this.console = this.game.add.text(0, this.game.height/2, "", style);
            Slideshow.initialize(this);

            var group: Phaser.Group = this.game.add.group();
            group.add(new Button(this));
        }

    }

}