import { expect } from "chai";
import { DateTimeInterface } from "../src/interfaces/utilities/date-time.interface";
import { DateTimeHandler } from "../src/handlers/utilities/date-time.handler";

describe('dateTime compareDates', () => {
    const ctx: DateTimeInterface = new DateTimeHandler();
    it('return that todays date is between two particular dates', async () => {
        const result = ctx.compareDates(ctx.formatDate(new Date("09-11-2021")), ctx.formatDate(new Date("19-11-2021")));
        expect(result).equal(true);
    });
});

describe('dateTime formatDate', () => {
    const ctx: DateTimeInterface = new DateTimeHandler();
    it('return formated date in the default structure of DD/MM/YYYY', async () => {
        const result = ctx.formatDate(new Date("12-12-2021"));
        expect(result).equal("12/12/2021");
    });
});