import { expect } from "chai";
import { CurrencyInterface } from "../src/interfaces/utilities/currency.interface";
import { CurrencyHandler } from "../src/handlers/utilities/currency.handler";

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

describe('currency calculateProRata', () => {
    const ctx: CurrencyInterface = new CurrencyHandler();
    it('return prorata value', async () => {
        const result = ctx.calculateProRata(99.99);
        expect(result).equal(21.43);
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