///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Slide {

        public text: string;
        public link: string;

        constructor(text: string, link?: string) {
            this.text = text;
            this.link = link;
        }
    }

}