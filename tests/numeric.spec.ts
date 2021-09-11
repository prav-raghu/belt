import { expect } from "chai";
import { NumericHandler } from "../src/handlers/utilities/numeric.handler";
import { NumericInterface } from "../src/interfaces/utilities/numeric.interface";

describe('numeric toFixed', () => {
    const ctx: NumericInterface = new NumericHandler();
    it('return pi to two decimal places', async () => {
        const result = ctx.toFixed(3.141592635, 2);
        expect(result).equal(3.14);
    });
});

