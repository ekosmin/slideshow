///<reference path="phaser/typescript/phaser.d.ts"/>
///<reference path="Slide.ts"/>
module Main {

    export class Slideshow {

        private static slide: number = -1;
        private static slides: Slide[] = [
            new Slide("foo"),
            new Slide("baz", "http://google.com")
        ]

        public static advance(console: Phaser.Text): void {
            Slideshow.slide++;
            console.inputEnabled = true;
            console.events.onInputDown.add(Slideshow.openWindow, this);
            Slideshow.drawSlide(Slideshow.slides[Slideshow.slide], console);
        }

        private static drawSlide(slide: Slide, console: Phaser.Text) {
            console.setText(slide.text);
        }

        private static openWindow(): void {
            var curr: Slide = Slideshow.slides[Slideshow.slide];
            if (curr.link != null && curr.link != "") {
                window.open(curr.link);
            }
        }
    }

}