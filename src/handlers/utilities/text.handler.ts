import { TextInterface } from "../../interfaces/utilities/text.interface";

export class TextHandler implements TextInterface {

    public toTitleCase(value: string): string {
        return value.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() });
    }

    public toCamelCase(value: string): string {
        return value.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => { return index === 0 ? word.toLowerCase() : word.toUpperCase(); }).replace(/\s+/g, '');
    }

    public toPascalCase(value: string): string {
        return value.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) => { return word.toUpperCase() }).replace(/\s+/g, '');
    }

    public toKebabCase(value: string): string {
        return value.replace(/([a-z])([A-Z])([0-9])/g, "$1-$2").replace(/\s+/g, '-').toLowerCase().trim();
    }

    public toSnakeCase(value: string): string {
        return value.replace(/([a-z])([A-Z])([0-9])/g, "$1-$2").replace(/\s+/g, '_').toLowerCase().trim();
    }

    public generateRandomAplhaNumericString(length: number = 16): string {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            result += charset.charAt(Math.floor(Math.random() * n));
        }
        return result;
    }

    public reverseWord(value: string): string {
        return value.trim().split('').reverse().join('')
    }

    public getStringLength(value: string): number {
        return value.trim().split('').length;
    }

    public isPalendrome(value: string): boolean {
        return value == this.reverseWord(value);
    }

    public pad(number: string | number, width?: number, pattern?: string) {
        pattern = pattern || '0';
        width = width || 2;
        number = number + '';
        const result = number.length >= width ? number : new Array(width - number.length + 1).join(pattern) + number;
        return result;
    }
    

}