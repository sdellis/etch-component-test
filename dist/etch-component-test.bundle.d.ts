// base-component v1.0.2 https://github.com/viewdir/base-component#readme
interface Window {
    _Components: any;
}

declare var TinyEmitter: any;
declare namespace _Components {
    class BaseComponent implements IBaseComponent {
        options: IBaseComponentOptions;
        protected _$element: JQuery;
        constructor(options: IBaseComponentOptions);
        protected _init(): boolean;
        protected _getDefaultOptions(): IBaseComponentOptions;
        protected _emit(event: string, ...args: any[]): void;
        protected _resize(): void;
        databind(data?: any): void;
    }
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}

declare namespace _Components {
    interface IBaseComponent {
        options: IBaseComponentOptions;
        databind(data?: any): void;
    }
}

declare namespace _Components {
    interface IBaseComponentOptions {
        element?: string;
    }
}

declare function escape(s: string): any;
declare function unescape(s: string): any;

interface Array<T>{
    clone(): Array<T>;
    contains(val: any): boolean;
    indexOf(searchElement: any, fromIndex?: number): number;
    indexOfTest(test: (item: any) => boolean, fromIndex?: number): number;
    insert(item: any, index: number): void;
    last(): any;
    move(fromIndex: number, toIndex: number): void;
    remove(item: any): void;
    removeAt(index: number): void;
}

interface Math {
    clamp(value: number, min: number, max: number): number;
    constrain(value: number, low: number, high: number): number;
    degreesToRadians(degrees: number): number;
    distanceBetween(x1: number, y1: number, x2: number, y2: number): number;
    lerp(start: number, stop: number, amount: number): number;
    mag(a: number, b: number, c: number): number;
    map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;
    median(values: number[]): number;
    randomBetween(low: number, high?: number): number;
    roundToDecimalPlace(num: number, dec: number): number;
    radiansToDegrees(radians: number): number;
    normalise(num: number, min: number, max: number): number;
    sq(n: number): number;
    TAU: number;
}

interface Number {
    isInteger(): boolean;
}

interface String {
    b64_to_utf8(str: string): string;
    contains(str: string): boolean;
    endsWith(text: string): boolean;
    hashCode(): string;
    isAlphanumeric(): boolean;
    ltrim(): string;
    rtrim(): string;
    startsWith(text: string): boolean;
    toCssClass(): string;
    toFileName(): string;
    trim(): string;
    utf8_to_b64(str: string): string;
}

interface StringConstructor {
    format(template: string, ...args: any[]): string;
}
declare module nullstone {
    var version: string;
}
declare module nullstone {
    function Annotation(type: Function, name: string, value: any, forbidMultiple?: boolean): void;
    function GetAnnotations(type: Function, name: string): any[];
    interface ITypedAnnotation<T> {
        (type: Function, ...values: T[]): any;
        Get(type: Function): T[];
    }
    function CreateTypedAnnotation<T>(name: string): ITypedAnnotation<T>;
}
declare module nullstone {
    function convertAnyToType(val: any, type: Function): any;
    function convertStringToEnum<T>(val: string, en: any): T;
    function registerTypeConverter(type: Function, converter: (val: any) => any): void;
    function registerEnumConverter(e: any, converter: (val: any) => any): void;
}
declare module nullstone {
    class DirResolver implements ITypeResolver {
        loadAsync(moduleName: string, name: string): Promise<any>;
        resolveType(moduleName: string, name: string, oresolve: IOutType): boolean;
    }
}
declare module nullstone {
    class Enum {
        Object: any;
        constructor(Object: any);
        static fromAny<T>(enuType: any, val: any, fallback?: number): number;
    }
}
declare module nullstone {
    function equals(val1: any, val2: any): boolean;
}
declare module nullstone {
    interface IEventArgs {
    }
    interface IEventCallback<T extends IEventArgs> {
        (sender: any, args: T): any;
    }
    interface IObserverFunc<T> extends Function {
        (value: T): any;
    }
    class Event<T extends IEventArgs> implements IObservable<T> {
        private $$callbacks;
        private $$scopes;
        has: boolean;
        on(callback: IEventCallback<T>, scope: any): void;
        off(callback: IEventCallback<T>, scope: any): void;
        raise(sender: any, args: T): void;
        raiseAsync(sender: any, args: T): void;
        subscribe(observer: IObserver<T> | IObserverFunc<T>): IDisposable;
    }
}
declare module nullstone {
    interface IInterfaceDeclaration<T> {
        name: string;
        is(o: any): boolean;
        as(o: any): T;
        mark(type: any): IInterfaceDeclaration<T>;
    }
    class Interface<T> implements IInterfaceDeclaration<T> {
        name: string;
        constructor(name: string);
        is(o: any): boolean;
        as(o: any): T;
        mark(type: any): Interface<T>;
    }
}
declare module nullstone {
    interface ICollection<T> extends IEnumerable<T> {
        Count: number;
        GetValueAt(index: number): T;
        SetValueAt(index: number, value: T): any;
        Insert(index: number, value: T): any;
        Add(value: T): any;
        Remove(value: T): boolean;
        RemoveAt(index: number): any;
        Clear(): any;
    }
    var ICollection_: Interface<ICollection<any>>;
}
declare module nullstone {
    interface IEnumerable<T> {
        getEnumerator(isReverse?: boolean): IEnumerator<T>;
    }
    interface IEnumerableDeclaration<T> extends IInterfaceDeclaration<T> {
        empty: IEnumerable<T>;
        fromArray(arr: T[]): IEnumerable<T>;
        toArray(en: IEnumerable<T>): T[];
    }
    var IEnumerable_: IEnumerableDeclaration<any>;
}
declare module nullstone {
    interface IEnumerator<T> {
        current: T;
        moveNext(): boolean;
    }
    interface IEnumeratorDeclaration<T> extends IInterfaceDeclaration<T> {
        empty: IEnumerator<T>;
        fromArray(arr: T[], isReverse?: boolean): IEnumerator<T>;
    }
    var IEnumerator_: IEnumeratorDeclaration<any>;
}
declare module nullstone {
    interface IIndexedPropertyInfo {
        getValue(obj: any, index: number): any;
        setValue(obj: any, index: number, value: any): any;
    }
    class IndexedPropertyInfo implements IIndexedPropertyInfo {
        GetFunc: (index: number) => any;
        SetFunc: (index: number, value: any) => any;
        propertyType: Function;
        getValue(ro: any, index: number): any;
        setValue(ro: any, index: number, value: any): void;
        static find(typeOrObj: any): IndexedPropertyInfo;
    }
}
declare module nullstone {
    interface IDisposable {
        dispose(): any;
    }
    var IDisposable_: Interface<IDisposable>;
    interface IObservable<T> {
        subscribe(observer: IObserver<T>): IDisposable;
    }
    var IObservable_: Interface<IObservable<any>>;
}
declare module nullstone {
    interface IObserver<T> {
        onCompleted(): any;
        onError(err: Error): any;
        onNext(value: T): any;
    }
    var IObserver_: Interface<IObserver<any>>;
}
declare module nullstone {
    interface ITypeResolver {
        resolveType(moduleName: string, name: string, oresolve: IOutType): boolean;
    }
}
declare module nullstone {
    interface ILibrary {
        name: string;
        uri: Uri;
        sourcePath: string;
        basePath: string;
        useMin: boolean;
        exports: string;
        deps: string[];
        rootModule: any;
        isLoaded: boolean;
        loadAsync(): Promise<Library>;
        resolveType(moduleName: string, name: string, oresolve: IOutType): boolean;
        add(type: any, name?: string): ILibrary;
        addPrimitive(type: any, name?: string): ILibrary;
        addEnum(enu: any, name: string): ILibrary;
    }
    class Library implements ILibrary {
        private $$module;
        private $$sourcePath;
        private $$basePath;
        private $$primtypes;
        private $$types;
        private $$loaded;
        name: string;
        uri: Uri;
        exports: string;
        deps: string[];
        useMin: boolean;
        sourcePath: string;
        basePath: string;
        isLoaded: boolean;
        constructor(name: string);
        rootModule: any;
        loadAsync(): Promise<Library>;
        private $configModule();
        resolveType(moduleName: string, name: string, oresolve: IOutType): boolean;
        add(type: any, name?: string): ILibrary;
        addPrimitive(type: any, name?: string): ILibrary;
        addEnum(enu: any, name: string): ILibrary;
    }
}
declare module nullstone {
    interface ILibraryResolver extends ITypeResolver {
        libraryCreated: Event<IEventArgs>;
        loadTypeAsync(uri: string, name: string): Promise<any>;
        resolve(uri: string): ILibrary;
    }
    interface ILibraryCreatedEventArgs extends IEventArgs {
        library: ILibrary;
    }
    class LibraryResolver implements ILibraryResolver {
        private $$libs;
        libraryCreated: Event<{}>;
        dirResolver: DirResolver;
        createLibrary(uri: string): ILibrary;
        loadTypeAsync(uri: string, name: string): Promise<any>;
        resolve(uri: string): ILibrary;
        resolveType(uri: string, name: string, oresolve: IOutType): boolean;
        private $$onLibraryCreated(lib);
    }
}
declare module nullstone {
    class Memoizer<T> {
        private $$creator;
        private $$cache;
        constructor(creator: (key: string) => T);
        memoize(key: string): T;
    }
}
declare module nullstone {
    function getPropertyDescriptor(obj: any, name: string): PropertyDescriptor;
    function hasProperty(obj: any, name: string): boolean;
}
declare module nullstone {
    interface IPropertyInfo {
        name: string;
        getValue(obj: any): any;
        setValue(obj: any, value: any): any;
    }
    class PropertyInfo implements IPropertyInfo {
        private $$getFunc;
        private $$setFunc;
        name: string;
        getValue(obj: any): any;
        setValue(obj: any, value: any): any;
        static find(typeOrObj: any, name: string): IPropertyInfo;
    }
}
declare module nullstone {
    function getTypeName(type: Function): string;
    function getTypeParent(type: Function): Function;
    function addTypeInterfaces(type: Function, ...interfaces: IInterfaceDeclaration<any>[]): void;
    function doesInheritFrom(t: Function, type: any): boolean;
}
declare module nullstone {
    enum UriKind {
        RelativeOrAbsolute = 0,
        Absolute = 1,
        Relative = 2,
    }
    class Uri {
        private $$originalString;
        private $$kind;
        constructor(uri: Uri);
        constructor(uri: string, kind?: UriKind);
        constructor(baseUri: Uri, relativeUri: string);
        constructor(baseUri: Uri, relativeUri: Uri);
        kind: UriKind;
        authority: string;
        host: string;
        port: number;
        absolutePath: string;
        scheme: string;
        fragment: string;
        resource: string;
        originalString: string;
        isAbsoluteUri: boolean;
        toString(): string;
        equals(other: Uri): boolean;
        static isNullOrEmpty(uri: Uri): boolean;
    }
}
declare module nullstone {
    interface IOutType {
        type: any;
        isPrimitive: boolean;
    }
    interface ITypeManager {
        defaultUri: string;
        xUri: string;
        resolveLibrary(uri: string): ILibrary;
        loadTypeAsync(uri: string, name: string): Promise<any>;
        resolveType(uri: string, name: string, oresolve: IOutType): boolean;
        add(uri: string, name: string, type: any): ITypeManager;
        addPrimitive(uri: string, name: string, type: any): ITypeManager;
        addEnum(uri: string, name: string, enu: any): ITypeManager;
    }
    class TypeManager implements ITypeManager {
        defaultUri: string;
        xUri: string;
        libResolver: ILibraryResolver;
        constructor(defaultUri: string, xUri: string);
        createLibResolver(): ILibraryResolver;
        resolveLibrary(uri: string): ILibrary;
        loadTypeAsync(uri: string, name: string): Promise<any>;
        resolveType(uri: string, name: string, oresolve: IOutType): boolean;
        add(uri: string, name: string, type: any): ITypeManager;
        addPrimitive(uri: string, name: string, type: any): ITypeManager;
        addEnum(uri: string, name: string, enu: any): ITypeManager;
    }
}
declare module nullstone {
    class AggregateError {
        errors: any[];
        constructor(errors: any[]);
        flat: any[];
    }
}
declare module nullstone {
    class DirLoadError {
        path: string;
        error: any;
        constructor(path: string, error: any);
    }
}
declare module nullstone {
    class LibraryLoadError {
        library: Library;
        error: Error;
        constructor(library: Library, error: Error);
    }
}
declare module nullstone.markup.events {
    interface IResolveType {
        (xmlns: string, name: string): IOutType;
    }
    interface IResolveObject {
        (type: any): any;
    }
    interface IResolvePrimitive {
        (type: any, text: string): any;
    }
    interface IResolveResources {
        (owner: any, ownerType: any): any;
    }
    interface IBranchSkip<T> {
        (root: T, obj: any): any;
    }
    interface IObject {
        (obj: any, isContent: boolean): any;
    }
    interface IObjectEnd {
        (obj: any, key: any, isContent: boolean, prev: any): any;
    }
    interface IText {
        (text: string): any;
    }
    interface IName {
        (name: string): any;
    }
    interface IPropertyStart {
        (ownerType: any, propName: string): any;
    }
    interface IPropertyEnd {
        (ownerType: any, propName: string): any;
    }
    interface IAttributeStart {
        (ownerType: any, attrName: string): any;
    }
    interface IAttributeEnd {
        (ownerType: any, attrName: string, obj: any): any;
    }
    interface IResumableError {
        (e: Error): boolean;
    }
    interface IError {
        (e: Error): any;
    }
}
declare module nullstone.markup {
    interface IMarkupExtension {
        init(val: string): any;
        resolveTypeFields?(resolver: (full: string) => any): any;
        transmute?(os: any[]): any;
    }
    function finishMarkupExtension(me: IMarkupExtension, prefixResolver: INsPrefixResolver, resolver: events.IResolveType, os: any[]): any;
}
declare module nullstone.markup {
    interface INsPrefixResolver {
        lookupNamespaceURI(prefix: string): string;
    }
    interface IMarkupExtensionParser {
        setNamespaces(defaultXmlns: string, xXmlns: string): IMarkupExtensionParser;
        onResolveType(cb?: events.IResolveType): IMarkupExtensionParser;
        onResolveObject(cb?: events.IResolveObject): IMarkupExtensionParser;
        onResolvePrimitive(cb?: events.IResolvePrimitive): IMarkupExtensionParser;
        onError(cb?: events.IError): IMarkupExtensionParser;
        parse(val: string, resolver: INsPrefixResolver, os: any[]): any;
    }
}
declare module nullstone.markup {
    interface IMarkupParser<T> {
        on(listener: IMarkupSax<T>): IMarkupParser<T>;
        setNamespaces(defaultXmlns: string, xXmlns: string): IMarkupParser<T>;
        setExtensionParser(parser: IMarkupExtensionParser): IMarkupParser<T>;
        parse(root: T): any;
        skipBranch(): any;
        resolvePrefix(prefix: string): string;
        walkUpObjects(): IEnumerator<any>;
    }
    var NO_PARSER: IMarkupParser<any>;
    interface IMarkupSax<T> {
        resolveType?: events.IResolveType;
        resolveObject?: events.IResolveObject;
        resolvePrimitive?: events.IResolvePrimitive;
        resolveResources?: events.IResolveResources;
        branchSkip?: events.IBranchSkip<T>;
        object?: events.IObject;
        objectEnd?: events.IObjectEnd;
        contentText?: events.IText;
        name?: events.IName;
        propertyStart?: events.IPropertyStart;
        propertyEnd?: events.IPropertyEnd;
        attributeStart?: events.IAttributeStart;
        attributeEnd?: events.IAttributeEnd;
        error?: events.IResumableError;
        end?: () => any;
    }
    function createMarkupSax<T>(listener: IMarkupSax<T>): IMarkupSax<T>;
}
declare module nullstone.markup {
    class Markup<T> {
        uri: Uri;
        root: T;
        private $$isLoaded;
        constructor(uri: string);
        isLoaded: boolean;
        createParser(): IMarkupParser<T>;
        resolve(typemgr: ITypeManager, customCollector?: ICustomCollector, customExcluder?: ICustomExcluder): Promise<any>;
        loadAsync(): Promise<Markup<T>>;
        loadRoot(data: string): T;
        setRoot(markup: T): Markup<T>;
    }
}
declare module nullstone.markup {
    interface ICustomCollector {
        (ownerUri: string, ownerName: string, propName: string, val: any): any;
    }
    interface ICustomExcluder {
        (uri: string, name: string): boolean;
    }
    interface IMarkupDependencyResolver<T> {
        add(uri: string, name: string): boolean;
        collect(root: T, customCollector?: ICustomCollector, customExcluder?: ICustomExcluder): any;
        resolve(): Promise<any>;
    }
    class MarkupDependencyResolver<T> implements IMarkupDependencyResolver<T> {
        typeManager: ITypeManager;
        parser: IMarkupParser<T>;
        private $$uris;
        private $$names;
        private $$fulls;
        constructor(typeManager: ITypeManager, parser: IMarkupParser<T>);
        collect(root: T, customCollector?: ICustomCollector, customExcluder?: ICustomExcluder): void;
        add(uri: string, name: string): boolean;
        resolve(): Promise<any>;
    }
}
declare module nullstone.markup.xaml {
    class SkipBranchError extends Error {
        root: Element;
        constructor(root: Element);
    }
}
declare module nullstone.markup.xaml {
    class XamlExtensionParser implements IMarkupExtensionParser {
        private $$defaultXmlns;
        private $$xXmlns;
        private $$onResolveType;
        private $$onResolveObject;
        private $$onResolvePrimitive;
        private $$onError;
        setNamespaces(defaultXmlns: string, xXmlns: string): XamlExtensionParser;
        parse(value: string, resolver: INsPrefixResolver, os: any[]): any;
        private $$doParse(ctx, os);
        private $$parseName(ctx);
        private $$startExtension(ctx, os);
        private $$parseXNull(ctx);
        private $$parseXType(ctx);
        private $$parseXStatic(ctx);
        private $$parseKeyValue(ctx, os);
        private $$finishKeyValue(ctx, key, val, os);
        private $$parseSingleQuoted(ctx);
        private $$ensure();
        onResolveType(cb?: events.IResolveType): XamlExtensionParser;
        onResolveObject(cb?: events.IResolveObject): XamlExtensionParser;
        onResolvePrimitive(cb?: events.IResolvePrimitive): XamlExtensionParser;
        onError(cb?: events.IError): XamlExtensionParser;
    }
}
declare module nullstone.markup.xaml {
    class XamlMarkup extends markup.Markup<Element> {
        static create(uri: string): XamlMarkup;
        static create(uri: Uri): XamlMarkup;
        createParser(): XamlParser;
        loadRoot(data: string): Element;
    }
}
declare module nullstone.markup.xaml {
    var DEFAULT_XMLNS: string;
    var DEFAULT_XMLNS_X: string;
    class XamlParser implements IMarkupParser<Element> {
        private $$onResolveType;
        private $$onResolveObject;
        private $$onResolvePrimitive;
        private $$onResolveResources;
        private $$onBranchSkip;
        private $$onObject;
        private $$onObjectEnd;
        private $$onContentText;
        private $$onName;
        private $$onPropertyStart;
        private $$onPropertyEnd;
        private $$onAttributeStart;
        private $$onAttributeEnd;
        private $$onError;
        private $$onEnd;
        private $$extension;
        private $$defaultXmlns;
        private $$xXmlns;
        private $$objectStack;
        private $$skipnext;
        private $$curel;
        private $$curkey;
        constructor();
        on(listener: IMarkupSax<Element>): XamlParser;
        setNamespaces(defaultXmlns: string, xXmlns: string): XamlParser;
        setExtensionParser(parser: IMarkupExtensionParser): XamlParser;
        parse(el: Element): XamlParser;
        skipBranch(): void;
        walkUpObjects(): IEnumerator<any>;
        resolvePrefix(prefix: string): string;
        private $$handleElement(el, isContent);
        private $$handleResources(owner, ownerType, resEl);
        private $$tryHandleError(el, xmlns, name);
        private $$tryHandlePropertyTag(el, xmlns, name);
        private $$tryHandlePrimitive(el, oresolve, isContent);
        private $$processAttributes(el);
        private $$processAttribute(attr);
        private $$shouldSkipAttr(prefix, name);
        private $$tryHandleXAttribute(uri, name, value);
        private $$handleAttribute(uri, name, value, attr);
        private $$getAttrValue(val, attr);
        private $$destroy();
    }
}
interface IFulfilledFunc<T, TResult> {
    (value: T): void | TResult | Promise<TResult>;
}
interface IRejectedFunc<TResult> {
    (reason: any): void | TResult | Promise<TResult>;
}
interface IResolveFunc<T> {
    (value?: T | Promise<T>): void;
}
interface IRejectFunc {
    (reason?: any): void;
}
interface Promise<T> {
    then<TResult>(onFulfilled?: IFulfilledFunc<T, TResult>, onRejected?: IRejectedFunc<TResult>): Promise<TResult>;
    catch(onRejected?: (reason: any) => T | Promise<T>): Promise<T>;
    tap(onFulfilled?: (value: T) => void, onRejected?: (err: any) => void): Promise<T>;
}
interface PromiseConstructor {
    prototype: Promise<any>;
    new <T>(init: (resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    <T>(init: (resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    all<T>(values: Promise<void>[]): Promise<void>;
    all<T>(...values: Promise<void>[]): Promise<void>;
    all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
    all<T>(...values: (T | Promise<T>)[]): Promise<T[]>;
    race<T>(values: Promise<T>[]): Promise<T>;
    reject(reason: any): Promise<void>;
    reject<T>(reason: any): Promise<T>;
    resolve<T>(value: T | Promise<T>): Promise<T>;
    resolve(): Promise<void>;
}
declare var Promise: PromiseConstructor;
declare module nullstone {
    class PromiseImpl<T> implements Promise<T> {
        private $$state;
        private $$value;
        private $$deferreds;
        constructor(init: (resolve: IResolveFunc<T>, reject: IRejectFunc) => void);
        then<TResult>(onFulfilled?: IFulfilledFunc<T, TResult>, onRejected?: IRejectedFunc<TResult>): Promise<TResult>;
        catch(onRejected?: (reason: any) => T | Promise<T>): Promise<T>;
        tap(onFulfilled?: (value: T) => void, onRejected?: (err: any) => void): Promise<T>;
        private _handle<TResult>(deferred);
        static all<T>(values: Promise<void>[]): Promise<void>;
        static all<T>(...values: Promise<void>[]): Promise<void>;
        static all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
        static all<T>(...values: (T | Promise<T>)[]): Promise<T[]>;
        static race<T>(values: Promise<T>[]): Promise<T>;
        static reject<T>(reason: any): Promise<void> | Promise<T>;
        static resolve(): Promise<void>;
        static resolve<T>(value: T | Promise<T>): Promise<T>;
        private _resolve;
        private _reject;
        private _finale();
        private _setImmediateFn(func);
    }
}


import ITimerListener = etch.engine.ITimerListener;
declare var requestAnimFrame: any;
declare module etch.engine {
    class ClockTimer {
        private _listeners;
        private _lastTime;
        registerTimer(listener: ITimerListener): void;
        unregisterTimer(listener: ITimerListener): void;
        private _doTick();
        private _requestAnimationTick();
    }
}

declare module etch.primitives {
    interface IVector {
        x: number;
        y: number;
    }
    class Vector implements IVector {
        x: number;
        y: number;
        constructor(x: number, y: number);
        get(): Vector;
        set(x: number, y: number): void;
        add(v: Vector): Vector;
        static add(v1: Vector, v2: Vector): Vector;
        clone(): Vector;
        static LERP(start: Vector, end: Vector, p: number): Vector;
        sub(v: Vector): Vector;
        static sub(v1: Vector, v2: Vector): Vector;
        mult(n: number): Vector;
        static mult(v1: Vector, v2: Vector): Vector;
        static multN(v1: Vector, n: number): Vector;
        div(n: number): Vector;
        static div(v1: Vector, v2: Vector): Vector;
        static divN(v1: Vector, n: number): Vector;
        mag(): number;
        magSq(): number;
        normalize(): Vector;
        limit(max: number): Vector;
        heading(): number;
        static random2D(): Vector;
        static fromAngle(angle: number): Vector;
        toPoint(): Point;
    }
}

declare module etch.exceptions {
    class Exception {
        Message: string;
        constructor(message: string);
        toString(): string;
    }
    class ArgumentException extends Exception {
        constructor(message: string);
    }
    class ArgumentNullException extends Exception {
        constructor(message: string);
    }
    class InvalidOperationException extends Exception {
        constructor(message: string);
    }
    class NotSupportedException extends Exception {
        constructor(message: string);
    }
    class IndexOutOfRangeException extends Exception {
        constructor(index: number);
    }
    class ArgumentOutOfRangeException extends Exception {
        constructor(msg: string);
    }
    class AttachException extends Exception {
        Data: any;
        constructor(message: string, data: any);
    }
    class InvalidJsonException extends Exception {
        JsonText: string;
        InnerException: Error;
        constructor(jsonText: string, innerException: Error);
    }
    class TargetInvocationException extends Exception {
        InnerException: Exception;
        constructor(message: string, innerException: Exception);
    }
    class UnknownTypeException extends Exception {
        FullTypeName: string;
        constructor(fullTypeName: string);
    }
    class FormatException extends Exception {
        constructor(message: string);
    }
}

import INotifyCollectionChanged = etch.events.INotifyCollectionChanged;
declare module etch.collections {
    class ObservableCollection<T> implements nullstone.IEnumerable<T>, nullstone.ICollection<T>, INotifyCollectionChanged, INotifyPropertyChanged {
        private _ht;
        getEnumerator(): nullstone.IEnumerator<T>;
        CollectionChanged: nullstone.Event<CollectionChangedEventArgs>;
        PropertyChanged: nullstone.Event<PropertyChangedEventArgs>;
        Count: number;
        ToArray(): T[];
        GetValueAt(index: number): T;
        SetValueAt(index: number, value: T): void;
        Add(value: T): void;
        AddRange(values: T[]): void;
        Insert(index: number, value: T): void;
        IndexOf(value: T): number;
        Contains(value: T): boolean;
        Remove(value: T): boolean;
        RemoveAt(index: number): void;
        Clear(): void;
        private _RaisePropertyChanged(propertyName);
    }
}

/// <reference path="Engine/ClockTimer.d.ts" />
/// <reference path="Primitives/Vector.d.ts" />
/// <reference path="Exceptions/Exceptions.d.ts" />
/// <reference path="Collections/ObservableCollection.d.ts" />

declare module etch.collections {
    class PropertyChangedEventArgs implements nullstone.IEventArgs {
        PropertyName: string;
        constructor(propertyName: string);
    }
    interface INotifyPropertyChanged {
        PropertyChanged: nullstone.Event<PropertyChangedEventArgs>;
    }
    var INotifyPropertyChanged_: nullstone.Interface<INotifyPropertyChanged>;
}

import Size = etch.primitives.Size;
declare module etch.drawing {
    class Canvas implements IDisplayContext {
        htmlElement: HTMLCanvasElement;
        isCached: boolean;
        stage: etch.drawing.Stage;
        constructor(parentElement?: HTMLElement);
        ctx: CanvasRenderingContext2D;
        width: number;
        height: number;
        size: Size;
        style: any;
        hide(): void;
        show(): void;
    }
}

declare module etch.drawing {
    class DisplayObject implements IDisplayObject {
        private _displayList;
        deltaTime: number;
        frameCount: number;
        height: number;
        isCached: boolean;
        isInitialised: boolean;
        isPaused: boolean;
        isVisible: boolean;
        lastVisualTick: number;
        position: Point;
        drawFrom: IDisplayContext;
        drawTo: IDisplayContext;
        width: number;
        zIndex: number;
        init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void;
        ctx: CanvasRenderingContext2D;
        canvasWidth: number;
        canvasHeight: number;
        stage: etch.drawing.Stage;
        displayList: DisplayObjectCollection<IDisplayObject>;
        setup(): void;
        update(): void;
        draw(): void;
        isFirstFrame(): boolean;
        dispose(): void;
        play(): void;
        pause(): void;
        resize(): void;
        show(): void;
        hide(): void;
    }
}

import ObservableCollection = etch.collections.ObservableCollection;
declare module etch.drawing {
    class DisplayObjectCollection<T extends IDisplayObject> extends ObservableCollection<T> {
        constructor();
        add(value: T): void;
        addRange(values: T[]): void;
        remove(value: T): boolean;
        swap(obj1: T, obj2: T): void;
        toFront(obj: T): void;
        toBack(obj: T): void;
        setIndex(obj: T, index: number): void;
        bottom: T;
        top: T;
    }
}

declare module etch.drawing {
    interface IDisplayContext {
        ctx: CanvasRenderingContext2D;
        width: number;
        height: number;
        isCached: boolean;
    }
}

import DisplayObjectCollection = etch.drawing.DisplayObjectCollection;
import IDisplayContext = etch.drawing.IDisplayContext;
import Point = etch.primitives.Point;
import Stage = etch.drawing.Stage;
declare module etch.drawing {
    interface IDisplayObject extends IDisplayContext {
        canvasWidth: number;
        canvasHeight: number;
        deltaTime: number;
        displayList: DisplayObjectCollection<IDisplayObject>;
        dispose(): void;
        draw(): void;
        drawFrom: IDisplayContext;
        drawTo: IDisplayContext;
        frameCount: number;
        height: number;
        hide(): void;
        init(drawTo: IDisplayContext, drawFrom?: IDisplayContext): void;
        isFirstFrame(): boolean;
        isInitialised: boolean;
        isPaused: boolean;
        isVisible: boolean;
        lastVisualTick: number;
        pause(): void;
        play(): void;
        position: Point;
        resize(): void;
        setup(): void;
        show(): void;
        update(): void;
        width: number;
        zIndex: number;
    }
}

import ClockTimer = etch.engine.ClockTimer;
import Canvas = etch.drawing.Canvas;
import DisplayObject = etch.drawing.DisplayObject;
import IDisplayObject = etch.drawing.IDisplayObject;
declare module etch.drawing {
    class Stage extends DisplayObject implements ITimerListener {
        private _maxDelta;
        deltaTime: number;
        lastVisualTick: number;
        mousePos: etch.primitives.Point;
        timer: ClockTimer;
        ticked: nullstone.Event<number>;
        constructor(maxDelta?: number);
        init(drawTo: IDisplayContext): void;
        canvas: Canvas;
        width: number;
        height: number;
        private _getMousePos(canvas, e);
        onTicked(lastTime: number, nowTime: number): void;
        setup(): void;
        setupDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void;
        update(): void;
        updateDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void;
        draw(): void;
        drawDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void;
        resizeDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void;
        dispose(): void;
        disposeDisplayList(displayList: DisplayObjectCollection<IDisplayObject>): void;
        resize(): void;
    }
}

declare module etch.engine {
    interface ITimerListener {
        onTicked(lastTime: number, nowTime: number): any;
    }
}

declare module etch.events {
    enum CollectionChangedAction {
        Add = 1,
        Remove = 2,
        Replace = 3,
        Reset = 4,
    }
    class CollectionChangedEventArgs implements nullstone.IEventArgs {
        Action: CollectionChangedAction;
        OldStartingIndex: number;
        NewStartingIndex: number;
        OldItems: any[];
        NewItems: any[];
        static Reset(allValues: any[]): CollectionChangedEventArgs;
        static Replace(newValue: any, oldValue: any, index: number): CollectionChangedEventArgs;
        static Add(newValue: any, index: number): CollectionChangedEventArgs;
        static AddRange(newValues: any[], index: number): CollectionChangedEventArgs;
        static Remove(oldValue: any, index: number): CollectionChangedEventArgs;
    }
}

import CollectionChangedEventArgs = etch.events.CollectionChangedEventArgs;
declare module etch.events {
    interface INotifyCollectionChanged {
        CollectionChanged: nullstone.Event<CollectionChangedEventArgs>;
    }
    var INotifyCollectionChanged_: nullstone.Interface<INotifyCollectionChanged>;
}

declare module etch.events {
    class PropertyChangedEventArgs implements nullstone.IEventArgs {
        PropertyName: string;
        constructor(propertyName: string);
    }
    interface INotifyPropertyChanged {
        PropertyChanged: nullstone.Event<PropertyChangedEventArgs>;
    }
    var INotifyPropertyChanged_: nullstone.Interface<INotifyPropertyChanged>;
}

import RoutedEventArgs = etch.events.RoutedEventArgs;
declare module etch.events {
    class RoutedEvent<T extends RoutedEventArgs> extends nullstone.Event<T> {
    }
}

declare module etch.events {
    class RoutedEventArgs implements nullstone.IEventArgs {
        Handled: boolean;
        Source: any;
        OriginalSource: any;
    }
}

declare module etch.primitives {
    interface IPoint {
        x: number;
        y: number;
    }
    class Point implements IPoint {
        x: number;
        y: number;
        constructor(x?: number, y?: number);
        static isEqual(p1: IPoint, p2: IPoint): boolean;
        static copyTo(src: IPoint, dest: IPoint): void;
        clone(): Point;
        toVector(): Vector;
    }
}

declare module etch.primitives {
    interface ISize {
        width: number;
        height: number;
    }
    class Size implements ISize {
        width: number;
        height: number;
        constructor(width?: number, height?: number);
        static copyTo(src: ISize, dest: ISize): void;
        static isEqual(size1: ISize, size2: ISize): boolean;
        static isEmpty(size: Size): boolean;
        static min(dest: ISize, size2: ISize): void;
        static isUndef(size: ISize): boolean;
        static undef(size: ISize): void;
    }
}

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
        toggleDrawMode(): void;
        update(): void;
        draw(): void;
    }
}
