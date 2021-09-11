import { CookieHandler } from "./handlers/storage/cookie.handler";
import { LocalStorageHandler } from "./handlers/storage/local-storage.handler";
import { CurrencyHandler } from "./handlers/utilties/currency.handler";
import { DateTimeHandler } from "./handlers/utilties/date-time.handler";
import { NumericHandler } from "./handlers/utilties/numeric.handler";
import { TextHandler } from "./handlers/utilties/text.handler";
import { CookieInterface } from "./interfaces/cookie.interface";
import { CurrencyInterface } from "./interfaces/currency.interface";
import { DateTimeInterface } from "./interfaces/date-time.interface";
import { LocalStorageInterface } from "./interfaces/local-storage.interface";
import { NumericInterface } from "./interfaces/numeric.interface";
import { TextInterface } from "./interfaces/text.interface";
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