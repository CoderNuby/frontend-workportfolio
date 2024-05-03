import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagepipe'
})
export class ImagepipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if(args[0].length == 0){
      return "assets/images/code.jpg";
    }else{
      return value;
    }
  }

}
