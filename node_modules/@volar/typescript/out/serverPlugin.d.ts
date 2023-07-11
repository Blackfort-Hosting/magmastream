import { VirtualFiles } from '@volar/language-core';
import type * as ts from 'typescript/lib/tsserverlibrary';
export declare function decorateLanguageServiceHost(virtualFiles: VirtualFiles, languageServiceHost: ts.LanguageServiceHost, ts: typeof import('typescript/lib/tsserverlibrary'), exts: string[]): void;
