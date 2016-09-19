namespace MyComponents {

    // declare var shapes = [];

    export class Main extends etch.drawing.Stage{

        public shapes: any[];
        public shape: any;
        public rectangle: any;
        public currentPos: any;
        public drawmode: boolean = false;
        shapeCompleted = new nullstone.Event<string>(); // svg of completed shape

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
                  // set the anchor point on first click
                  this.currentPos.x = this.mousePos.x;
                  this.currentPos.y = this.mousePos.y;
                }else{
                  // finish the shape on second click and store it.
                  this.rectangle = {x:this.currentPos.x, y:this.currentPos.y, w:this.mousePos.x - this.currentPos.x, h:this.mousePos.y - this.currentPos.y};
                  this.drawRect(this.rectangle);
                }

            }, false);
        }

        drawRect(r){
          this.shapes.push(r);
          this.shapeCompleted.raise(this, "rectangle complete"); // publish event
        }

        toggleDrawMode(){
          this.drawmode = !this.drawmode;
        }

        update() {
          // redraw the shape in each frame as the mouse moves
          this.rectangle = {x:this.currentPos.x, y:this.currentPos.y, w:this.mousePos.x - this.currentPos.x, h:this.mousePos.y - this.currentPos.y};
        }

        draw() {
            this.ctx.strokeStyle = "#FF0000";

            for (var i = 0; i < this.shapes.length; i++) {
              var myShape= this.shapes[i];
              this.ctx.strokeRect(myShape.x, myShape.y, myShape.w, myShape.h);
            }

            if(this.drawmode){
              this.ctx.strokeRect(this.rectangle.x, this.rectangle.y, this.rectangle.w, this.rectangle.h);
            }

        }


    }
}
