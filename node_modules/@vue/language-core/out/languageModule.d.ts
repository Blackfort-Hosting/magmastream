import type { Language } from '@volar/language-core';
import { VueFile } from './sourceFile';
import { VueCompilerOptions } from './types';
import type * as ts from 'typescript/lib/tsserverlibrary';
export declare function createLanguage(compilerOptions?: ts.CompilerOptions, _vueCompilerOptions?: Partial<VueCompilerOptions>, ts?: typeof import('typescript/lib/tsserverlibrary'), codegenStack?: boolean): Language<VueFile>;
export declare function createLanguages(compilerOptions?: ts.CompilerOptions, vueCompilerOptions?: Partial<VueCompilerOptions>, ts?: typeof import('typescript/lib/tsserverlibrary'), codegenStack?: boolean): Language[];
