"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactivity_1 = require("@vue/reactivity");
const script_1 = require("../generators/script");
const templateGen = require("../generators/template");
const scriptRanges_1 = require("../parsers/scriptRanges");
const scriptSetupRanges_1 = require("../parsers/scriptSetupRanges");
const language_core_1 = require("@volar/language-core");
const muggle = require("muggle-string");
const plugin = ({ modules, vueCompilerOptions, compilerOptions, codegenStack }) => {
    const ts = modules.typescript;
    const instances = new WeakMap();
    return {
        version: 1,
        getEmbeddedFileNames(fileName, sfc) {
            const tsx = useTsx(fileName, sfc);
            const fileNames = [];
            if (['js', 'ts', 'jsx', 'tsx'].includes(tsx.lang.value)) {
                fileNames.push(fileName + '.' + tsx.lang.value);
            }
            if (sfc.template) {
                fileNames.push(fileName + '.template_format.ts');
                fileNames.push(fileName + '.template_style.css');
            }
            return fileNames;
        },
        resolveEmbeddedFile(fileName, sfc, embeddedFile) {
            const _tsx = useTsx(fileName, sfc);
            const suffix = embeddedFile.fileName.replace(fileName, '');
            if (suffix === '.' + _tsx.lang.value) {
                embeddedFile.kind = language_core_1.FileKind.TypeScriptHostFile;
                embeddedFile.capabilities = {
                    ...language_core_1.FileCapabilities.full,
                    foldingRange: false,
                    documentFormatting: false,
                    documentSymbol: false,
                };
                const tsx = _tsx.tsxGen.value;
                if (tsx) {
                    const [content, contentStacks] = codegenStack ? muggle.track([...tsx.codes], [...tsx.codeStacks]) : [[...tsx.codes], [...tsx.codeStacks]];
                    embeddedFile.content = content;
                    embeddedFile.contentStacks = contentStacks;
                    embeddedFile.mirrorBehaviorMappings = [...tsx.mirrorBehaviorMappings];
                }
            }
            else if (suffix.match(/^\.template_format\.ts$/)) {
                embeddedFile.parentFileName = fileName + '.template.' + sfc.template?.lang;
                embeddedFile.kind = language_core_1.FileKind.TextFile;
                embeddedFile.capabilities = {
                    ...language_core_1.FileCapabilities.full,
                    diagnostic: false,
                    foldingRange: false,
                    codeAction: false,
                    inlayHint: false,
                };
                if (_tsx.htmlGen.value) {
                    const [content, contentStacks] = codegenStack ? muggle.track([..._tsx.htmlGen.value.formatCodes], [..._tsx.htmlGen.value.formatCodeStacks]) : [[..._tsx.htmlGen.value.formatCodes], [..._tsx.htmlGen.value.formatCodeStacks]];
                    embeddedFile.content = content;
                    embeddedFile.contentStacks = contentStacks;
                }
                for (const style of sfc.styles) {
                    embeddedFile.content.push('\n\n');
                    for (const cssVar of style.cssVars) {
                        embeddedFile.content.push('(');
                        embeddedFile.content.push([
                            cssVar.text,
                            style.name,
                            cssVar.offset,
                            {},
                        ]);
                        embeddedFile.content.push(');\n');
                    }
                }
            }
            else if (suffix.match(/^\.template_style\.css$/)) {
                embeddedFile.parentFileName = fileName + '.template.' + sfc.template?.lang;
                if (_tsx.htmlGen.value) {
                    const [content, contentStacks] = codegenStack ? muggle.track([..._tsx.htmlGen.value.cssCodes], [..._tsx.htmlGen.value.cssCodeStacks]) : [[..._tsx.htmlGen.value.cssCodes], [..._tsx.htmlGen.value.cssCodeStacks]];
                    embeddedFile.content = content;
                    embeddedFile.contentStacks = contentStacks;
                }
                // for color pickers support
                embeddedFile.capabilities.documentSymbol = true;
            }
        },
    };
    function useTsx(fileName, sfc) {
        if (!instances.has(sfc)) {
            instances.set(sfc, createTsx(fileName, sfc));
        }
        return instances.get(sfc);
    }
    function createTsx(fileName, _sfc) {
        const lang = (0, reactivity_1.computed)(() => {
            return !_sfc.script && !_sfc.scriptSetup ? 'ts'
                : _sfc.scriptSetup && _sfc.scriptSetup.lang !== 'js' ? _sfc.scriptSetup.lang
                    : _sfc.script && _sfc.script.lang !== 'js' ? _sfc.script.lang
                        : 'js';
        });
        const scriptRanges = (0, reactivity_1.computed)(() => _sfc.scriptAst
            ? (0, scriptRanges_1.parseScriptRanges)(ts, _sfc.scriptAst, !!_sfc.scriptSetup, false)
            : undefined);
        const scriptSetupRanges = (0, reactivity_1.computed)(() => _sfc.scriptSetupAst
            ? (0, scriptSetupRanges_1.parseScriptSetupRanges)(ts, _sfc.scriptSetupAst, vueCompilerOptions)
            : undefined);
        const htmlGen = (0, reactivity_1.computed)(() => {
            if (!_sfc.templateAst)
                return;
            return templateGen.generate(ts, compilerOptions, vueCompilerOptions, _sfc.template?.content ?? '', _sfc.template?.lang ?? 'html', _sfc, hasScriptSetupSlots.value, codegenStack);
        });
        const hasScriptSetupSlots = (0, reactivity_1.shallowRef)(false); // remove when https://github.com/vuejs/core/pull/5912 merged
        const tsxGen = (0, reactivity_1.computed)(() => {
            hasScriptSetupSlots.value = !!scriptSetupRanges.value?.slotsTypeArg;
            return (0, script_1.generate)(ts, fileName, _sfc, lang.value, scriptRanges.value, scriptSetupRanges.value, htmlGen.value, compilerOptions, vueCompilerOptions, codegenStack);
        });
        return {
            lang,
            tsxGen,
            htmlGen,
        };
    }
};
exports.default = plugin;
//# sourceMappingURL=vue-tsx.js.map