// etch-component-test v1.0.0 https://github.com/viewdir/etch-component-test#readme
declare namespace MyComponents {
    class EtchComponent extends _Components.BaseComponent {
        canvas: etch.drawing.Canvas;
        main: Main;
        constructor(options: IEtchComponentOptions);
        test(): void;
        protected _init(): boolean;
        protected _getDefaultOptions(): IEtchComponentOptions;
        protected _resize(): void;
    }
}
declare namespace MyComponents.EtchComponent {
    class Events {
        static TEST: string;
        static SHAPECOMPLETED: string;
    }
}

declare namespace MyComponents {
    interface IEtchComponentOptions extends _Components.IBaseComponentOptions {
    }
}

declare namespace MyComponents {
    class Main extends etch.drawing.Stage {
        shapes: any[];
        shape: any;
        rectangle: any;
        currentPos: any;
        drawmode: boolean;
        shapeCompleted: nullstone.Event<string>;
        constructor(maxDelta?: number);
        setup(): void;
        drawRect(r: any): void;
        toggleDrawMode(): void;
        update(): void;
        draw(): void;
    }
}
