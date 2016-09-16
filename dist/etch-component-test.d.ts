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
    }
}

declare namespace MyComponents {
    interface IEtchComponentOptions extends _Components.IBaseComponentOptions {
    }
}

declare namespace MyComponents {
    class Main extends etch.drawing.Stage {
        shapes: any[];
        currentPos: any;
        drawmode: boolean;
        constructor(maxDelta?: number);
        setup(): void;
        toggleDrawMode(): void;
        update(): void;
        draw(): void;
    }
}
