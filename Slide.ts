///<reference path="phaser/typescript/phaser.d.ts"/>
module Main {

    export class Slide {

        public text: string;
        public link: string;
        public image: string;
        public video: string;

        constructor(text: string, link?: string, image?: string, video?: string) {
            this.text = text;
            this.link = link;
            this.image = image;
            this.video = video;
        }
    }

}