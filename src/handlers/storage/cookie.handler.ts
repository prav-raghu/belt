import { CookieInterface } from "../../interfaces/cookie.interface";

export class CookieHandler implements CookieInterface {

    public read(token: string): string | null {
        let base64Url = token.split('.')[1];
        if (base64Url) {
            let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
            return JSON.parse(jsonPayload);
        }
        return null;
    }

    public set(key: string, value: string, expiration: any): void {
        if (expiration != 'max') {
            let d = new Date();
            d.setTime(d.getTime() + (expiration * 24 * 60 * 60 * 1000));
            expiration = "expires=" + d.toUTCString();
            document.cookie = key + "=" + value + ";" + expiration + ";path=/";
        }
        else {
            document.cookie = key + "=" + value + ";" + 'expires=Fri, 31 Dec 9999 23:59:59 GMT"' + ";path=/";
        }
    }

    public get(key: string): string {
        let name = key + "=";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    public remove(name: string): void {
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;"
    }

    public removeAll(): void {
        document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT" + new Date().toUTCString() + ";path=/"); })
    }
}