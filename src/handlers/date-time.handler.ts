import moment from 'moment';
import { DateTimeInterface } from '../interfaces/date-time.interface';
export class DateTimeHandler implements DateTimeInterface {

    formatDate(dateObj: string | Date, formatString: string = 'DD/MM/YYYY'): string {
        switch (formatString) {
            case 'api':
                formatString = 'YYYY-MM-DD hh:mm:ss';
                break
        }
        return moment(dateObj).format(formatString)
    }

    compareDates(startDate: any, endDate: any): boolean {
        let dateFrom = startDate;
        let dateTo = endDate;
        let dateCheck = this.formatDate(new Date(), "DD/MM/YYYY");
        let d1 = dateFrom.split("/");
        let d2 = dateTo.split("/");
        let c = dateCheck.split("/");
        let from = new Date(
            parseInt(d1[2]),
            parseInt(d1[1]) - 1,
            parseInt(d1[0])
        );
        let to = new Date(parseInt(d2[2]), parseInt(d2[1]) - 1, parseInt(d2[0]));
        let check = new Date(parseInt(c[2]), parseInt(c[1]) - 1, parseInt(c[0]));
        if (check >= from && check <= to) {
            return true;
        } else {
            return false;
        }
    }
}