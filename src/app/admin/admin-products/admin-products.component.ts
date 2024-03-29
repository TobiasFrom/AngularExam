import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product [];
  filteredProducts: any[];
  subsciption: Subscription;

  constructor(private productService: ProductService, private router: Router) {
    //Subscriber fordi jeg ønsker at holde forbindelsen - Client flere vinduer... vil sørge for at vi subscriber så vi hele tiden har den korrekte opdaterede produktportefølje.
    this.subsciption = this.productService.getAll()
      .subscribe(products => this.filteredProducts = this.products = products);
   }

  onEditClick(id: string){
  this.router.navigate(['/admin/products/', id]);
  console.log(id);
  }
  
  //sørger for at unsubscribe, når denne component livscyklus er udført.
  ngOnDestroy(){
    this.subsciption.unsubscribe();
  }


  ngOnInit() {
  }

}
