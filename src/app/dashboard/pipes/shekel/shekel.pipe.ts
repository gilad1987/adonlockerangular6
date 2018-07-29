import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'shekel'
})
export class ShekelPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return '₪' + value.toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

}
