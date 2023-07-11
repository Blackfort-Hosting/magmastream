import type asyncHooks from "node:async_hooks";
export declare class AsyncResource implements asyncHooks.AsyncResource {
    type: string;
    _asyncId: undefined | number;
    _triggerAsyncId: undefined | number | asyncHooks.AsyncResourceOptions;
    constructor(type: string, triggerAsyncId?: number | asyncHooks.AsyncResourceOptions);
    static bind<Func extends (this: ThisArg, ...args: any[]) => any, ThisArg>(fn: Func, type?: string, thisArg?: ThisArg): any;
    bind<Func extends (...args: any[]) => any>(fn: Func, thisArg?: any): any;
    runInAsyncScope<This, Result>(fn: (this: This, ...args: any[]) => Result, thisArg?: This, ...args: any[]): Result;
    emitDestroy(): this;
    asyncId(): number;
    triggerAsyncId(): number;
}
