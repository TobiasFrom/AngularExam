import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import  'rxjs/add/operator/take'
import { TargetLocator } from 'selenium-webdriver';

import { IAppState } from 'src/app/redux/store';
import { ProductFormActions } from './product-form-actions';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  categories$;  
  id;

  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private categoryService: CategoryService, 
    private productService: ProductService,
    private productActions: ProductFormActions,
    private ngRedux: NgRedux<IAppState>) 
  { 
    this.categories$ = categoryService.getAll();

    this.ngRedux.select(x => x.products).subscribe((state) => {
      if(state.product && this.id){
        this.productForm.patchValue({
          title: state.product.title,
          price: state.product.price,
          category: state.product.category,
          imageUrl: state.product.imageUrl        
        });
      }
    });
  }

  ngOnInit() {
    //Hent specifikt produkt på Id.
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.getOnId(this.id);
    }
    console.log(this.id);
  }

  
  productForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    price: new FormControl('', Validators.required),
    category: new FormControl(),
    imageUrl: new FormControl('', Validators.required)
  });

  get title() {return this.productForm.get('title');}

  get price() {return this.productForm.get('price');}

  get imageUrl(){return this.productForm.get('imageUrl')}

  onSave(): void{
    if(this.id) this.productActions.edit_product_post(this.id, this.productForm.value);
    
    else this.productActions.create_product(this.productForm.value);

    this.router.navigate(['/admin/products']);
  }

  getOnId(id: string){
    this.productActions.edit_product(id);
  }

  onDeleteClick(){
    if(!confirm('Are you sure you want to delete this product?')) return;
    
    this.productActions.delete_product(this.id);

    //this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }
}
