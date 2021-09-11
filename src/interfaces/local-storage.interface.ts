export interface LocalStorageInterface {
    set(key: any, value: any): void;
    get(key: any): void;
    remove(key: any): void;
    clear(): void;
}