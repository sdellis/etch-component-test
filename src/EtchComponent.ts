namespace MyComponents {

    export class EtchComponent extends _Components.BaseComponent {

        public canvas: etch.drawing.Canvas;
        public main: Main;

        constructor(options: IEtchComponentOptions) {
            super(options);

            this._init();
            this._resize();
        }

        public test(): void {
            this._emit(EtchComponent.Events.TEST, [1, 2, 'three']);
        }

        protected _init(): boolean {
            var success: boolean = super._init();

            if (!success){
                console.error("Component failed to initialise");
            }

            this.canvas = new Canvas();
            this.canvas.style.backgroundColor = '#333';
            this.canvas.width = 750;
            this.canvas.height = 750;
            this.main = new Main();
            this.main.init(this.canvas);

            return success;
        }

        protected _getDefaultOptions(): IEtchComponentOptions {
            return <IEtchComponentOptions>{
            }
        }

        protected _resize(): void {

        }
    }
}

namespace MyComponents.EtchComponent {
    export class Events {
        static TEST: string = 'test';
    }
}

(function(w) {
    if (!w.MyComponents){
        w.MyComponents = MyComponents;
    } else {
        w.MyComponents.EtchComponent = MyComponents.EtchComponent;
    }
})(window);
