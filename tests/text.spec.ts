import { expect } from "chai";
import { TextHandler } from "../src/handlers/text.handler";
import { TextInterface } from "../src/interfaces/text.interface";

describe('text', () => {
    const ctx: TextInterface = new TextHandler();
    it('return title case string from standard value', async () => {
        const result = ctx.toTitleCase("hello world, how are you?");
        expect(result).equal("Hello World, How Are You?");
    });

    it('return camel case string from standard value', async () => {
        const result = ctx.toCamelCase("hello world");
        expect(result).equal("helloWorld");
    });

    it('return pascal case string from standard value', async () => {
        const result = ctx.toPascalCase("hello world");
        expect(result).equal("HelloWorld");
    });

    it('return kebab case string from standard value', async () => {
        const result = ctx.toKebabCase("hello world");
        expect(result).equal("hello-world");
    });

    it('return kebab case string from non-standard value', async () => {
        const result = ctx.toKebabCase("hello world 00 RaNdOm");
        expect(result).equal("hello-world-00-random");
    });

    it('return snake case string from standard value', async () => {
        const result = ctx.toSnakeCase("hello world");
        expect(result).equal("hello_world");
    });

    it('return snake case string from non-standard value', async () => {
        const result = ctx.toSnakeCase("hello world 00 RaNdOm");
        expect(result).equal("hello_world_00_random");
    });

    it('return a random 16 character string', async () => {
        const result = ctx.generateRandomAplhaNumericString();
        expect(result.length).equal(16);
    });

    it('return a random 8 character string', async () => {
        const result = ctx.generateRandomAplhaNumericString(8);
        expect(result.length).equal(8);
    });

    it('reverse a string', async () => {
        const result = ctx.reverseWord("pravir");
        expect(result).equal("rivarp");
    });

    it('get numeric count of string length', async () => {
        const result = ctx.getStringLength("pravir");
        expect(result).equal(6)
    });

    it('get a palendrom for string', async () => {
        const result = ctx.isPalendrome("racecar");
        expect(result).equal(true)
    });

    it('get a non palendrom for string', async () => {
        const result = ctx.isPalendrome("pravir");
        expect(result).equal(false)
    });
    
});
