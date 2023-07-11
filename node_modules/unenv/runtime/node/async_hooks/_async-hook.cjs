"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerAsyncId = exports.executionAsyncResource = exports.executionAsyncId = exports.createHook = exports.AsyncHook = void 0;
class AsyncHook {
  constructor(callbacks = {}) {
    this._enabled = false;
    this._callbacks = {};
    this._callbacks = callbacks;
  }
  enable() {
    this._enabled = true;
    return this;
  }
  disable() {
    this._enabled = false;
    return this;
  }
  init(asyncId, type, triggerAsyncId2, resource) {
    if (this._enabled && this._callbacks.init) {
      this._callbacks.init(asyncId, type, triggerAsyncId2, resource);
    }
  }
  before(asyncId) {
    if (this._enabled && this._callbacks.before) {
      this._callbacks.before(asyncId);
    }
  }
  after(asyncId) {
    if (this._enabled && this._callbacks.after) {
      this._callbacks.after(asyncId);
    }
  }
  destroy(asyncId) {
    if (this._enabled && this._callbacks.destroy) {
      this._callbacks.destroy(asyncId);
    }
  }
  promiseResolve(asyncId) {
    if (this._enabled && this._callbacks.promiseResolve) {
      this._callbacks.promiseResolve(asyncId);
    }
  }
}
exports.AsyncHook = AsyncHook;
const createHook = function createHook2(callbacks) {
  const asyncHook = new AsyncHook(callbacks);
  return asyncHook;
};
exports.createHook = createHook;
const executionAsyncId = function executionAsyncId2() {
  return 0;
};
exports.executionAsyncId = executionAsyncId;
const executionAsyncResource = function () {
  return /* @__PURE__ */Object.create(null);
};
exports.executionAsyncResource = executionAsyncResource;
const triggerAsyncId = function () {
  return 0;
};
exports.triggerAsyncId = triggerAsyncId;