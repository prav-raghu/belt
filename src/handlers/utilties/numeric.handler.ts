import { NumericInterface } from "../interfaces/numeric.interface";

export class NumericHandler implements NumericInterface {

    toFixed(num: number, precision: number): number {
        const firstFix = Math.round(+(num + 'e' + precision));
        const secondFix = (+(firstFix + 'e' + -precision));
        return Number.parseFloat(secondFix.toFixed(precision));
    }

}