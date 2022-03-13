import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneBook'
})
export class PhoneBookPipe implements PipeTransform {

  transform(number:number , code: any[]): any {
    console.log(number,code)
    return code;
  }

}
