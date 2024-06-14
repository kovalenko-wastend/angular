import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Iproduct[], search: string): Iproduct[] {
    return products.filter(p=> p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
