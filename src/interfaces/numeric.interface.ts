export interface NumericInterface {
    formatNumber(amount: number | string, decimalPlaces?: number, decimalFormatter?: string, thousandsFormatter?: string, symbol?: string | boolean): number;
    toFixed(num: number, precision: number): number;
    isNumber(value: any): boolean;
}