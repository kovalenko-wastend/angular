import { Component, OnInit } from '@angular/core';
import { Iproduct } from './models/product';
// import { products as data} from './data/products';
import { ProductService } from './services/products.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test'
  // products: Iproduct[] = data;
  // products: Iproduct[] = []
  loading: boolean = false
  products$: Observable<Iproduct[]>
  term: string = ''

  constructor(private productService: ProductService){
    
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productService.getAll().pipe(
      tap(()=> this.loading = false)
    )
    // this.productService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }
  
}
