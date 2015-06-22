///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Slide.ts"/>
///<reference path="Utils.ts"/>
module Main {

    export class Slideshow {

        private static slide: number = -1;
        private static slides: Slide[] = [
            new Slide("Today's lesson is playing Guess Who. Click the button below to advance slides."),
            new Slide("Here is a face from the game.", "", "herman"),
            new Slide("Click here to open the game.", "http://localhost:63342/guess-who/index.html")
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