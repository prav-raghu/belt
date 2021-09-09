import { UserInterface } from "./interfaces/user.interface";
import { UserHandler } from "./handlers/user.handler";
export default class Library {
    public user: UserInterface;
    constructor() {
        this.user = new UserHandler();
    }
}