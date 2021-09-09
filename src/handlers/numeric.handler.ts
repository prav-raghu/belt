import { NumericInterface } from "../interfaces/numeric.interface";
import { CommonHandler } from "./common.handler";

export class NumericHandler implements NumericInterface {

    formatNumber(amount: number | string, decimalPlaces?: number, decimalFormatter?: string, thousandsFormatter?: string, symbol?: string | boolean): number {
        let common = new CommonHandler();
        decimalPlaces = common.isNullOrUndefined(decimalPlaces) ? 2 : Math.abs(decimalPlaces as number);
        decimalFormatter = common.isNullOrUndefined(decimalFormatter) ? '.' : decimalFormatter;
        thousandsFormatter = common.isNullOrUndefined(thousandsFormatter) ? ' ' : thousandsFormatter;
        if (!this.isNumber(amount)) {
            amount = Number.parseFloat(amount as string);
        }
        amount = Math.abs(amount as number || 0);
        amount = this.toFixed(amount, decimalPlaces);
        return amount;
    }

    toFixed(num: number, precision: number): number {
        const firstFix = Math.round(+(num + 'e' + precision));
        const secondFix = (+(firstFix + 'e' + -precision));
        return Number.parseFloat(secondFix.toFixed(precision));
    }

    isNumber(value: any): boolean {
        let common = new CommonHandler();
        if (common.isNullOrUndefined(value)) return false;
        return typeof value === 'number' || !isNaN(value)
    }

}