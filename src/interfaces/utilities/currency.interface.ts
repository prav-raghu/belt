export interface CurrencyInterface {
    centsConverter(amount: number): number;
    getCardType(ccNumber: any): any;
    calculateProRata(pricepermonth: number): number;
    addVatToAmount(amount: number): number;
    removeVatFromAmount(amount: number): number;
    getVatAmount(amount: number): number;
}