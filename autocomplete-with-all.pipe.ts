import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocompleteWithAll'
})
export class AutocompleteWithAllPipe implements PipeTransform {
  // search anywhere in string
  transform(array: any, inputValue: string) {
    return array.filter((elem: string) => elem?.toString().toLowerCase().includes(inputValue?.toString().toLowerCase()))
  }
}
