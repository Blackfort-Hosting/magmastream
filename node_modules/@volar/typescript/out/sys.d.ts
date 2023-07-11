import type { ServiceEnvironment, Disposable } from '@volar/language-service';
import type * as ts from 'typescript/lib/tsserverlibrary';
import { IDtsHost } from './dtsHost';
export declare function createSys(ts: typeof import('typescript/lib/tsserverlibrary'), env: ServiceEnvironment, dtsHost?: IDtsHost): ts.System & {
    version: number;
    sync(): Promise<number>;
} & Disposable;
