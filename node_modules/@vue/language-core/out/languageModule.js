"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLanguages = exports.createLanguage = void 0;
const path_1 = require("path");
const plugins_1 = require("./plugins");
const sourceFile_1 = require("./sourceFile");
const sharedTypes = require("./utils/directorySharedTypes");
const ts_1 = require("./utils/ts");
function createLanguage(compilerOptions = {}, _vueCompilerOptions = {}, ts = require('typescript'), codegenStack = false) {
    const vueCompilerOptions = (0, ts_1.resolveVueCompilerOptions)(_vueCompilerOptions);
    patchResolveModuleNames(ts, vueCompilerOptions);
    const vueLanguagePlugin = (0, plugins_1.getDefaultVueLanguagePlugins)(ts, compilerOptions, vueCompilerOptions, codegenStack);
    const languageModule = {
        createVirtualFile(fileName, snapshot, languageId) {
            if (languageId === 'vue'
                || (!languageId
                    && vueCompilerOptions.extensions.some(ext => fileName.endsWith(ext)))) {
                return new sourceFile_1.VueFile(fileName, snapshot, vueCompilerOptions, vueLanguagePlugin, ts, codegenStack);
            }
        },
        updateVirtualFile(sourceFile, snapshot) {
            sourceFile.update(snapshot);
        },
        resolveHost(host) {
            const sharedTypesSnapshot = ts.ScriptSnapshot.fromString(sharedTypes.getTypesCode(vueCompilerOptions));
            const sharedTypesFileName = path_1.posix.join(host.getCurrentDirectory(), sharedTypes.baseName);
            return {
                ...host,
                getScriptFileNames() {
                    return [
                        sharedTypesFileName,
                        ...host.getScriptFileNames(),
                    ];
                },
                getScriptSnapshot(fileName) {
                    if (fileName === sharedTypesFileName) {
                        return sharedTypesSnapshot;
                    }
                    return host.getScriptSnapshot(fileName);
                },
            };
        },
    };
    return languageModule;
}
exports.createLanguage = createLanguage;
function createLanguages(compilerOptions = {}, vueCompilerOptions = {}, ts = require('typescript'), codegenStack = false) {
    return [
        createLanguage(compilerOptions, vueCompilerOptions, ts, codegenStack),
        ...vueCompilerOptions.experimentalAdditionalLanguageModules?.map(module => require(module)) ?? [],
    ];
}
exports.createLanguages = createLanguages;
function patchResolveModuleNames(ts, vueCompilerOptions) {
    try {
        // from https://github.com/vuejs/language-tools/pull/1543
        if (!(ts.__vuePatchResolveModuleNames)) {
            ts.__vuePatchResolveModuleNames = true;
            const resolveModuleNames = ts.resolveModuleName;
            ts.resolveModuleName = (...args) => {
                if (args[6] === ts.ModuleKind.ESNext && vueCompilerOptions.extensions.some(ext => args[0].endsWith(ext))) {
                    args[6] = ts.ModuleKind.CommonJS;
                }
                return resolveModuleNames(...args);
            };
        }
    }
    catch (e) {
        // console.warn('[volar] patchResolveModuleNames failed', e);
    }
}
//# sourceMappingURL=languageModule.js.map