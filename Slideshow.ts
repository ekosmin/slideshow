///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Slide.ts"/>
///<reference path="Utils.ts"/>
module Main {

    export class Slideshow {

        private static slide: number = -1;
        private static slides: Slide[] = [
            new Slide("Today's lesson is playing Guess Who. Click the button below to advance slides."),
            new Slide("First, play some fridge poetry by clicking here. Come back when you're finished",
                "http://localhost:63342/fridge-poetry/index.html"),
            new Slide("Here is a face from Guess Who.", "", "herman", ""),
            new Slide("Here are some instructions on how to play.", "", "", "next"),
            new Slide("Click here to open Guess Who.", "http://localhost:63342/guess-who/index.html")
        ]

        private static level: Level;

        public static initialize(level: Level): void {
            Slideshow.level = level;
            level.console.inputEnabled = true;
            level.console.events.onInputDown.add(Slideshow.openWindow, this);
            Slideshow.advance(level.console);
        }

        public static advance(console: Phaser.Text): void {
            Slideshow.slide++;
            Slideshow.drawSlide(Slideshow.slides[Slideshow.slide], console);
        }

        private static drawSlide(slide: Slide, console: Phaser.Text) {
            console.setText(slide.text);
            Slideshow.addImage(slide);
            Slideshow.addVideo(slide);
        }

        private static addVideo(slide: Slide) {
            if (!Utils.isNullOrEmpty(slide.video)) {
                var player:HTMLVideoElement = Slideshow.getPlayer();

                var mp4Vid = document.getElementById('mp4Source');
                var oggVid = document.getElementById('oggSource');

                player.pause();

                mp4Vid.setAttribute('src', 'eh5v.files/html5video/' + slide.video + '.m4v');
                oggVid.setAttribute('src', 'eh5v.files/html5video/' + slide.video + '.ogv');

                player.load();
                document.getElementById("videoWrapper").style.visibility = "visible";
            } else {
                document.getElementById("videoWrapper").style.visibility = "hidden";
                Slideshow.getPlayer().pause();
            }
        }

        private static getPlayer(): HTMLVideoElement {
            return document.getElementsByTagName("video")[0];
        }

        private static addImage(slide: Slide) {
            if (!Utils.isNullOrEmpty(slide.image)) {
                var image: Phaser.Image = Slideshow.level.add.image(0, 0, slide.image);
                Slideshow.level.image = image;
                Slideshow.resizeImage(image);
                image.x = Slideshow.level.game.width/2 - image.width/2;
            } else {
                if (Slideshow.level.image) {
                    Slideshow.level.image.destroy();
                }
            }
        }

        private static resizeImage(image: Phaser.Image) {
            var maxWidth = Slideshow.level.game.width;
            var maxHeight = Slideshow.level.game.height/2;

            if (image.width > maxWidth) {
                var widthScale = maxWidth/image.width;
                image.width = image.width * widthScale;
                image.height = image.height * widthScale;
            }

            if (image.height > maxHeight) {
                var heightScale = maxHeight/image.height;
                image.width = image.width * heightScale;
                image.height = image.height * heightScale;
            }
        }

        private static openWindow(): void {
            var curr: Slide = Slideshow.slides[Slideshow.slide];
            if (!Utils.isNullOrEmpty(curr.link)) {
                window.open(curr.link);
            }
        }
    }

}