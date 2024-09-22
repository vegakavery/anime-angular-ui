import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorthener'
})
export class ShortenStringPipe implements PipeTransform {

  transform(value: string, length: number) {
    return value.slice(0, length);
}

}