import {Component, Input} from '@angular/core';
import { Iproduct } from 'src/app/models/product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent {
    @Input() product: Iproduct

    details: boolean = false
}