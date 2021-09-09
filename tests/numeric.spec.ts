import { expect } from "chai";
import { NumericHandler } from "../src/handlers/numeric.handler";
import { NumericInterface } from "../src/interfaces/numeric.interface";

describe('numeric formatNumber', () => {
    const ctx: NumericInterface = new NumericHandler();
    it('return defaulted formatted number', async () => {
        const result = ctx.formatNumber(1);
        expect(result).equal(1);
    });

    it('return customized formatted number', async () => {
        const result = ctx.formatNumber(100000, 2, ".", ",");
        expect(result).equal(100000);
    });
});

describe('numeric toFixed', () => {
    const ctx: NumericInterface = new NumericHandler();
    it('return pi to two decimal places', async () => {
        const result = ctx.toFixed(3.141592635, 2);
        expect(result).equal(3.14);
    });
});

describe('numeric isNumber', () => {
    const ctx: NumericInterface = new NumericHandler();
    it('return true for valid numbers', async () => {
        const result = ctx.isNumber(2);
        expect(result).equal(true);
    });

    it('return false for invalid numbers', async () => {
        const result = ctx.isNumber("test");
        expect(result).equal(false);
    });
});