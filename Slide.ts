///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Slide {

        private static slide: number = -1;
        private static slides: string[] = ["Hello again!", "Still there...?"];

        public static advance(console: Phaser.Text): void {
            Slide.slide++;
            console.setText(Slide.slides[Slide.slide]);
        }
    }

}