import type { FileStat, FileType } from '@volar/language-service';
export interface IDtsHost {
    stat(uri: string): Promise<FileStat | undefined>;
    readFile(fileName: string): Promise<string | undefined>;
    readDirectory(dirName: string): Promise<[string, FileType][]>;
}
export declare function createJsDelivrDtsHost(versions?: Record<string, string>, onFetch?: (fileName: string, text: string) => void): IDtsHost;
export declare function getPackageNameOfDtsPath(path: string): string | undefined;
