import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgUrl',
  standalone: true,
})
export class ImgUrlPipe implements PipeTransform {
  transform(value: string | null): string | null {
    console.log(value);
    if (!value) {
      console.log(value);
      return null;
    }
    console.log('${value}');
    return 'https://icherniakov.ru/yt-course/${value}';
  }
}
