import { UserInterface } from "../interfaces/user.interface";

export class UserHandler implements UserInterface {
    constructor() {

    }
    public getUser(): string {
        return "username"
    }
}