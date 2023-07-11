"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSys = void 0;
const path_1 = require("path");
const utilities_1 = require("./typescript/utilities");
const dtsHost_1 = require("./dtsHost");
let currentCwd = '';
function createSys(ts, env, dtsHost) {
    let version = 0;
    const rootPath = env.uriToFileName(env.rootUri.toString());
    const sys = ts.sys;
    const root = {
        dirs: {},
        files: {},
        requested: false,
    };
    const promises = new Set();
    const fileWatcher = env.onDidChangeWatchedFiles?.(({ changes }) => {
        for (const change of changes) {
            const fileName = env.uriToFileName(change.uri);
            const dirName = path_1.posix.dirname(fileName);
            const baseName = path_1.posix.basename(fileName);
            const dir = getDir(dirName);
            if (dir.files[baseName]) { // is requested file
                version++;
                if (change.type === 1) {
                    dir.files[baseName] = { exists: true };
                }
                else if (change.type === 2) {
                    dir.files[baseName] = { exists: true };
                }
                else if (change.type === 3) {
                    dir.files[baseName] = { exists: false };
                }
            }
        }
    });
    return {
        get version() {
            return version;
        },
        dispose() {
            fileWatcher?.dispose();
        },
        args: sys?.args ?? [],
        newLine: sys?.newLine ?? '\n',
        useCaseSensitiveFileNames: sys?.useCaseSensitiveFileNames ?? false,
        realpath: sys?.realpath,
        write: sys?.write ?? (() => { }),
        writeFile: sys?.writeFile ?? (() => { }),
        createDirectory: sys?.createDirectory ?? (() => { }),
        exit: sys?.exit ?? (() => { }),
        getExecutingFilePath: sys?.getExecutingFilePath ?? (() => rootPath + '/__fake__.js'),
        getCurrentDirectory: () => rootPath,
        getModifiedTime,
        readFile,
        readDirectory,
        getDirectories,
        resolvePath,
        fileExists,
        directoryExists,
        async sync() {
            while (promises.size) {
                await Promise.all(promises);
            }
            return version;
        },
    };
    function resolvePath(fsPath) {
        if (sys) {
            if (currentCwd !== rootPath) {
                currentCwd = rootPath;
                // https://github.com/vuejs/language-tools/issues/2039
                // https://github.com/vuejs/language-tools/issues/2234
                if (sys.directoryExists(rootPath)) {
                    // https://github.com/vuejs/language-tools/issues/2480
                    try {
                        process.chdir(rootPath);
                    }
                    catch { }
                }
            }
            return sys.resolvePath(fsPath).replace(/\\/g, '/');
        }
        return path_1.posix.resolve(fsPath).replace(/\\/g, '/');
    }
    function getModifiedTime(fileName) {
        fileName = resolvePath(fileName);
        const dirPath = path_1.posix.dirname(fileName);
        const dir = getDir(dirPath);
        const name = path_1.posix.basename(fileName);
        const modifiedTime = dir.files[name]?.modifiedTime;
        if (modifiedTime !== undefined) {
            return new Date(modifiedTime);
        }
    }
    function readFile(fileName, encoding) {
        fileName = resolvePath(fileName);
        const dirPath = path_1.posix.dirname(fileName);
        const dir = getDir(dirPath);
        const name = path_1.posix.basename(fileName);
        readFileWorker(fileName, encoding, dir);
        return dir.files[name]?.text;
    }
    function directoryExists(dirName) {
        dirName = resolvePath(dirName);
        const dir = getDir(dirName);
        if (dirName === '/node_modules' && dtsHost) {
            dir.exists = true;
        }
        else if (dirName.startsWith('/node_modules/') && dtsHost && !(0, dtsHost_1.getPackageNameOfDtsPath)(dirName)) {
            dir.exists = true;
        }
        else if (dir.exists === undefined) {
            dir.exists = false;
            const result = dirName.startsWith('/node_modules/') && dtsHost
                ? dtsHost.stat(dirName)
                : env.fs?.stat(env.fileNameToUri(dirName));
            if (typeof result === 'object' && 'then' in result) {
                const promise = result;
                promises.add(promise);
                result.then(result => {
                    promises.delete(promise);
                    dir.exists = result?.type === 2;
                    if (dir.exists) {
                        version++;
                    }
                });
            }
            else {
                dir.exists = result?.type === 2;
            }
        }
        return dir.exists;
    }
    function fileExists(fileName) {
        fileName = resolvePath(fileName);
        const dirPath = path_1.posix.dirname(fileName);
        const baseName = path_1.posix.basename(fileName);
        const dir = getDir(dirPath);
        const file = dir.files[baseName] ??= {};
        if (file.exists === undefined) {
            file.exists = false;
            const result = fileName.startsWith('/node_modules/') && dtsHost
                ? dtsHost.stat(fileName)
                : env.fs?.stat(env.fileNameToUri(fileName));
            if (typeof result === 'object' && 'then' in result) {
                const promise = result;
                promises.add(promise);
                result.then(result => {
                    promises.delete(promise);
                    file.exists = result?.type === 1;
                    if (file.exists) {
                        const time = Date.now();
                        file.modifiedTime = time !== file.modifiedTime ? time : file.modifiedTime + 1;
                        version++;
                    }
                });
            }
            else {
                file.exists = result?.type === 1;
            }
        }
        return file.exists;
    }
    // for import path completion
    function getDirectories(dirName) {
        dirName = resolvePath(dirName);
        readDirectoryWorker(dirName);
        const dir = getDir(dirName);
        return [...Object.entries(dir.dirs)].filter(([_, dir]) => dir.exists).map(([name]) => name);
    }
    function readDirectory(dirName, extensions, excludes, includes, depth) {
        dirName = resolvePath(dirName);
        const matches = (0, utilities_1.matchFiles)(dirName, extensions, excludes, includes, sys?.useCaseSensitiveFileNames ?? false, rootPath, depth, (dirPath) => {
            dirPath = resolvePath(dirPath);
            readDirectoryWorker(dirPath);
            const dir = getDir(dirPath);
            return {
                files: [...Object.entries(dir.files)].filter(([_, file]) => file.exists).map(([name]) => name),
                directories: [...Object.entries(dir.dirs)].filter(([_, dir]) => dir.exists).map(([name]) => name),
            };
        }, sys?.realpath ? (path => sys.realpath(path)) : (path => path));
        return [...new Set(matches)];
    }
    function readFileWorker(fileName, encoding, dir) {
        const name = path_1.posix.basename(fileName);
        dir.files[name] ??= {};
        const file = dir.files[name];
        if (file.exists === false || file.requested) {
            return;
        }
        file.requested = true;
        const uri = env.fileNameToUri(fileName);
        const result = fileName.startsWith('/node_modules/') && dtsHost
            ? dtsHost.readFile(fileName)
            : env.fs?.readFile(uri, encoding);
        if (typeof result === 'object' && 'then' in result) {
            const promise = result;
            promises.add(promise);
            result.then(result => {
                promises.delete(promise);
                if (result !== undefined) {
                    file.exists = true;
                    file.text = result;
                    const time = Date.now();
                    file.modifiedTime = time !== file.modifiedTime ? time : time + 1;
                    version++;
                }
                else {
                    file.exists = false;
                }
            });
        }
        else if (result !== undefined) {
            file.exists = true;
            file.text = result;
            const time = Date.now();
            file.modifiedTime = time !== file.modifiedTime ? time : time + 1;
        }
        else {
            file.exists = false;
        }
    }
    function readDirectoryWorker(dirName) {
        const dir = getDir(dirName);
        if (dir.requested) {
            return;
        }
        dir.requested = true;
        const result = dirName.startsWith('/node_modules/') && dtsHost
            ? dtsHost.readDirectory(dirName)
            : env.fs?.readDirectory(env.fileNameToUri(dirName || '.'));
        if (typeof result === 'object' && 'then' in result) {
            const promise = result;
            promises.add(promise);
            result.then((result) => {
                promises.delete(promise);
                if (onReadDirectoryResult(dirName, dir, result)) {
                    version++;
                }
            });
        }
        else {
            onReadDirectoryResult(dirName, dir, result ?? []);
        }
    }
    function onReadDirectoryResult(dirName, dir, result) {
        // See https://github.com/microsoft/TypeScript/blob/e1a9290051a3b0cbdfbadc3adbcc155a4641522a/src/compiler/sys.ts#L1853-L1857
        result = result.filter(([name]) => name !== '.' && name !== '..');
        let updated = false;
        for (const [name, _fileType] of result) {
            let fileType = _fileType;
            if (fileType === 64) {
                const stat = env.fs?.stat(env.fileNameToUri(dirName + '/' + name));
                if (typeof stat === 'object' && 'then' in stat) {
                    const promise = stat;
                    promises.add(promise);
                    stat.then((stat) => {
                        promises.delete(promise);
                        if (stat?.type === 1) {
                            dir.files[name] ??= {};
                            if (!dir.files[name].exists) {
                                dir.files[name].exists = true;
                                version++;
                            }
                        }
                        else if (stat?.type === 2) {
                            const childDir = getDirFromDir(dir, name);
                            if (!childDir.exists) {
                                childDir.exists = true;
                                version++;
                            }
                        }
                    });
                }
                else if (stat) {
                    fileType = stat.type;
                }
            }
            if (fileType === 1) {
                dir.files[name] ??= {};
                if (!dir.files[name].exists) {
                    dir.files[name].exists = true;
                    updated = true;
                }
            }
            else if (fileType === 2) {
                const childDir = getDirFromDir(dir, name);
                if (!childDir.exists) {
                    childDir.exists = true;
                    updated = true;
                }
            }
        }
        return updated;
    }
    function getDir(dirName) {
        const dirNames = [];
        let currentDirPath = dirName;
        let currentDirName = path_1.posix.basename(currentDirPath);
        let lastDirPath;
        while (lastDirPath !== currentDirPath) {
            lastDirPath = currentDirPath;
            dirNames.push(currentDirName);
            currentDirPath = path_1.posix.dirname(currentDirPath);
            currentDirName = path_1.posix.basename(currentDirPath);
        }
        let currentDir = root;
        for (let i = dirNames.length - 1; i >= 0; i--) {
            const nextDirName = dirNames[i];
            currentDir = getDirFromDir(currentDir, nextDirName);
        }
        return currentDir;
    }
    function getDirFromDir(dir, name) {
        let target = dir.dirs[name];
        if (!target) {
            target = {
                dirs: {},
                files: {},
            };
            dir.dirs[name] = target;
        }
        return target;
    }
}
exports.createSys = createSys;
//# sourceMappingURL=sys.js.map