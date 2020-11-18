import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(Name: string): any {
    return Name
      .split(" ")
      .map(n => n[0])
      .join("");
  }

}
