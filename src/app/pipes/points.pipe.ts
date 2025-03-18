import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points'
})
export class PointsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 1 || value === 0) {
      return `${value} pt`;
    }
    return `${value} pts`;
  }
}
