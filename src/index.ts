import { TextHandler } from "./handlers/text.handler";
import { TextInterface } from "./interfaces/text.interface";
class Main {
    text: TextInterface;
    constructor() {
        this.text = new TextHandler();
    }
}
export const Text = new Main().text;