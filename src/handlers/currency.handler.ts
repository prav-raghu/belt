import { CurrencyInterface } from "../interfaces/currency.interface";
import { NumericHandler } from "./numeric.handler";

export class CurrencyHandler implements CurrencyInterface {

    centsConverter(amount: number): number {
        return Math.round(100 * amount);
    }

    getCardType(creditCardNumber: string): any {
        // [Visa]
        let re = new RegExp("^4");
        if (creditCardNumber.match(re) != null) {
            return "Visa";
        }
        // Mastercard]
        if (/^5[1-5]/.test(creditCardNumber)) {
            return "Mastercard";
        }
        // [AMEX]
        re = new RegExp("^3[47]");
        if (creditCardNumber.match(re) != null) {
            return "AMEX";
        }
        // [Discover]
        re = new RegExp(
            "^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)"
        );
        if (creditCardNumber.match(re) != null) {
            return "Discover";
        }
        // [Diners]
        re = new RegExp("^36");
        if (creditCardNumber.match(re) != null) {
            return "Diners";
        }
        // [Diners - Carte Blanche]
        re = new RegExp("^30[0-5]");
        if (creditCardNumber.match(re) != null) {
            return "Diners";
        }
        // [JCB]
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (creditCardNumber.match(re) != null) {
            return "JCB";
        }
        // [Visa Electron]
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (creditCardNumber.match(re) != null) {
            return "Visa";
        }
        return null;
    }

    calculateProRata(pricepermonth: number): number {
        let dt = new Date();
        let month = dt.getMonth();
        let day = dt.getDate();
        let year = dt.getFullYear();
        let nextMonth = null;
        if (month === 11) {
            nextMonth = new Date(year + 1, 0, 1);
        } else {
            nextMonth = new Date(year, month + 1, 1);
        }
        let today = new Date(year, month, day);
        let remaining = (nextMonth.getTime() - today.getTime()) / 1000;
        remaining = remaining / (60 * 60 * 24);
        let subRemainingDays = remaining;
        if (subRemainingDays > 1) {
            subRemainingDays = subRemainingDays - 1;
        }
        let totaldays = day + subRemainingDays;
        let priceperday = pricepermonth / totaldays;
        let remainingprice = priceperday * remaining;
        return parseFloat((remainingprice).toFixed(2));
    }

    addVatToAmount(amount: number): number {
        return new NumericHandler().toFixed((amount * 1.15), 4);
    }

    removeVatFromAmount(amount: number): number {
        return new NumericHandler().toFixed((amount / 115) * 100, 4);
    }

    getVatAmount(amount: number): number {
        return new NumericHandler().toFixed(amount - this.removeVatFromAmount(amount), 4);
    }

}