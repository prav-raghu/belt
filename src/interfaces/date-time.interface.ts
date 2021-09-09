export interface DateTimeInterface {
    compareDates(startDate: any, endDate: any): boolean;
    formatDate(dateObj: string | Date, formatString?: string): string
}