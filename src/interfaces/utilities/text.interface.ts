export interface TextInterface {
    toTitleCase(value: string): string;
    toCamelCase(value: string): string;
    toPascalCase(value: string): string;
    toKebabCase(value: string): string;
    toSnakeCase(value: string): string;
    generateRandomAplhaNumericString(length?: number): string;
    reverseWord(value: string): string;
    getStringLength(value: string): number;
    isPalendrome(value: string): boolean;
    pad(number: string | number, width?: number, pattern?: string): string;
}