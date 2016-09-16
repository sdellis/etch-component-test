namespace MyComponents {

    // declare var shapes = [];

    export class Main extends etch.drawing.Stage{

        public shapes: any[];
        public currentPos: any;
        public drawmode: boolean = false;

        constructor(maxDelta?: number){
            super(maxDelta);
        }

        setup() {
            super.setup();
            this.shapes = [];
            this.currentPos = {x:0,y:0};
            this.position = null;
            this.stage.mousePos.x = 0;
            this.stage.mousePos.y = 0;
            this.canvas.htmlElement.addEventListener('mousedown', (e) => {
                this.mousePos = this.stage.mousePos.clone();
                console.log('mouseX: ', this.mousePos.x, ' mouseY: ', this.mousePos.y);
                this.toggleDrawMode();
                if (this.drawmode){
                  this.currentPos.x = this.mousePos.x;
                  this.currentPos.y = this.mousePos.y;
                }else{
                  var rectangle = new Path2D();
                  rectangle.rect(this.currentPos.x, this.currentPos.y, this.mousePos.x - this.currentPos.x, this.mousePos.y - this.currentPos.y);
                  this.shapes.push(rectangle);
                }

            }, false);
        }

        toggleDrawMode(){
          this.drawmode = !this.drawmode;
        }

        update() {

        }

        draw() {
            this.ctx.strokeStyle = "#FF0000";

            for (var i = 0; i < this.shapes.length; i++) {
              var myShape= this.shapes[i];
              this.ctx.stroke(myShape);
            }

            if(this.drawmode){
              var rectangle = new Path2D();
              rectangle.rect(this.currentPos.x, this.currentPos.y, this.mousePos.x - this.currentPos.x, this.mousePos.y - this.currentPos.y);
              this.ctx.stroke(rectangle);
            }

        }


    }
}
