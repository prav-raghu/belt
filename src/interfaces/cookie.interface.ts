export interface CookieInterface {
    read(token: string): string | null;
    set(key: string, value: string, expiration: any): void;
    get(key: string): string;
    remove(name: string): void;
    removeAll(): void;
}