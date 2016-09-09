namespace MyComponents {
    
    export class Main extends etch.drawing.Stage{

        constructor(maxDelta?: number){
            super(maxDelta);
        }

        setup() {
            super.setup();
        }

        draw() {
            this.ctx.fillStyle = "#FF0000";
            this.ctx.fillRect(0, 0, 150, 150);
        }
    }
}