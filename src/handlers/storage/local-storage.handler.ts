import { LocalStorageInterface } from "../../interfaces/storage/local-storage.interface";

export class LocalStorageHandler implements LocalStorageInterface {

    public set(key: any, value: any): void {
        localStorage.setItem(key, value);
    }

    public get(key: any): void {
        localStorage.getItem(key);
    }

    public remove(key: any): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }

}