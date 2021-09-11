import { CookieHandler } from "./handlers/storage/cookie.handler";
import { LocalStorageHandler } from "./handlers/storage/local-storage.handler";
import { CurrencyHandler } from "./handlers/utilities/currency.handler";
import { DateTimeHandler } from "./handlers/utilities/date-time.handler";
import { NumericHandler } from "./handlers/utilities/numeric.handler";
import { TextHandler } from "./handlers/utilities/text.handler";
import { CookieInterface } from "./interfaces/storage/cookie.interface";
import { LocalStorageInterface } from "./interfaces/storage/local-storage.interface";
import { CurrencyInterface } from "./interfaces/utilities/currency.interface";
import { DateTimeInterface } from "./interfaces/utilities/date-time.interface";
import { NumericInterface } from "./interfaces/utilities/numeric.interface";
import { TextInterface } from "./interfaces/utilities/text.interface";

class Main {
    text: TextInterface;
    numeric: NumericInterface;
    dateTime: DateTimeInterface;
    currency: CurrencyInterface;
    cookie: CookieInterface;
    localStorage: LocalStorageInterface;
    constructor() {
        this.text = new TextHandler();
        this.numeric = new NumericHandler();
        this.dateTime = new DateTimeHandler();
        this.currency = new CurrencyHandler();
        this.cookie = new CookieHandler();
        this.localStorage = new LocalStorageHandler();
    }
}
export const Text = new Main().text;
export const Numeric = new Main().numeric;
export const DateTime = new Main().dateTime;
export const Currency = new Main().currency;
export const Cookie = new Main().cookie;
export const LocalStorage = new Main().localStorage;

