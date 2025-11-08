import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tostring',
    standalone: true
})
export class ToStringPipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Yes' : 'No';
    }
}