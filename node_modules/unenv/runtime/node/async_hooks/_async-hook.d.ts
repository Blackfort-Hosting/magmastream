import type asyncHooks from "node:async_hooks";
export declare class AsyncHook implements asyncHooks.HookCallbacks {
    _enabled: boolean;
    _callbacks: asyncHooks.HookCallbacks;
    constructor(callbacks?: asyncHooks.HookCallbacks);
    enable(): this;
    disable(): this;
    init(asyncId: number, type: string, triggerAsyncId: number, resource: any): void;
    before(asyncId: number): void;
    after(asyncId: number): void;
    destroy(asyncId: number): void;
    promiseResolve(asyncId: number): void;
}
export declare const createHook: typeof asyncHooks.createHook;
export declare const executionAsyncId: typeof asyncHooks.executionAsyncId;
export declare const executionAsyncResource: typeof asyncHooks.executionAsyncResource;
export declare const triggerAsyncId: typeof asyncHooks.triggerAsyncId;
