import { expect } from "chai";
import { CurrencyInterface } from "../src/interfaces/currency.interface";
import { CurrencyHandler } from "../src/handlers/currency.handler";

describe('currency pad', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return a trailing padded zero on single digit number', async () => {
        const result = ctx.pad(1);
        expect(result).equal("01");
    });

    it('return a standard format number on double digits', async () => {
        const result = ctx.pad(10);
        expect(result).equal("10");
    });

    it('return a double padded format number on single digits', async () => {
        const result = ctx.pad(1, 3);
        expect(result).equal("001");
    });

    it('return a double padded format number on double digits', async () => {
        const result = ctx.pad(10, 3);
        expect(result).equal("010");
    });

    it('return a single padded format number on single digits with custom pattern', async () => {
        const result = ctx.pad(1, 2, "1");
        expect(result).equal("11");
    });

    it('return a single padded format number on double digits with custom pattern', async () => {
        const result = ctx.pad(10, 2, "1");
        expect(result).equal("10");
    });

    it('return a double padded format number on single digits with custom pattern', async () => {
        const result = ctx.pad(1, 3, "*");
        expect(result).equal("**1");
    });

    it('return a double padded format number on double digits with custom pattern', async () => {
        const result = ctx.pad(10, 3, "*");
        expect(result).equal("*10");
    });
});

describe('currency centsConverter', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return cents value from rand', async () => {
        const result = ctx.centsConverter(1);
        expect(result).equal(100);
    });
});

describe('currency getCardType', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return Visa credit card', async () => {
        const result = ctx.getCardType("4000000000000002");
        expect(result).equal("Visa");
    });

    it('return master credit card', async () => {
        const result = ctx.getCardType("5200000000000015");
        expect(result).equal("Mastercard");
    });

    it('return american express credit card', async () => {
        const result = ctx.getCardType("378282246310005");
        expect(result).equal("AMEX");
    });

    it('return null on invalid credit card', async () => {
        const result = ctx.getCardType("0000000000000000");
        expect(result).equal(null);
    });
});

describe('currency generateInvoiceNumber', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return generated invoice number', async () => {
        const result = ctx.generateInvoiceNumber(2468, "AIR-TIME");
        expect(result).not.equal(null);
    });
});

describe('currency calculateProRata', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return prorata value', async () => {
        const result = ctx.calculateProRata(99.99);
        expect(result).equal(21.43);
    });
});

describe('currency calculateEndOfTrialProRata', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return prorata value at end of date', async () => {
        const result = ctx.calculateEndOfTrialProRata(99.99, new Date("12-12-2021"));
        expect(result).equal(64.51);
    });
});


describe('currency formatCurrency', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return default rand value from string', async () => {
        const result = ctx.formatCurrency("5");
        expect(result).equal("R5.00");
    });

    it('return default rand value from number', async () => {
        const result = ctx.formatCurrency(5);
        expect(result).equal("R5.00");
    });

    it('return additional formatting dollar value from number', async () => {
        const result = ctx.formatCurrency(5, 2, ",", ",", "$");
        expect(result).equal("$5,00");
    });
});

describe('currency addVatToAmount', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return amount with VAT included', async () => {
        const result = ctx.addVatToAmount(86.9565);
        expect(result).equal(100);
    });
});

describe('currency removeVatFromAmount', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return amount with VAT excluded', async () => {
        const result = ctx.removeVatFromAmount(100);
        expect(result).equal(86.9565);
    });
});

describe('currency getVatAmount', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return value of vat from amount', async () => {
        const result = ctx.getVatAmount(100);
        expect(result).equal(13.0435);
    });
});