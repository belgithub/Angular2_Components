import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(aray: Array<object>, column?: string, ascending?: boolean, args?: any): any {
    // (ascending) ? aray.sort(function(a, b) {return parseFloat(a[column]) - parseFloat(b[column])})
    //             : aray.sort(function(a, b) {return parseFloat(b[column]) - parseFloat(a[column])});
    //let _column = column || 'name';
    //let _ascending = ascending || true;
    if(ascending) {
      return aray.sort(function(a, b) {return (a[column]) - (b[column])})
    } else {
      return aray.sort(function(a, b) {return (b[column]) - (a[column])});
    }
  }

}
