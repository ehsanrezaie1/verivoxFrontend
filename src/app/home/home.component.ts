import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsComponent } from '../components/products/products.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private fbgroup: FormBuilder) { }

  @ViewChild(ProductsComponent, { static: false })
  public prodChild!: ProductsComponent;

  priceFilterForm = this.fbgroup.group(
    {
      min:[''],
      max:[]
    }
  )
  ngOnInit(): void {
    
  }

  filterByPrice(){
    this.prodChild.sortByPrice(this.priceFilterForm.value);
    console.log(this.priceFilterForm.value);
    // return this.projects.filter(proj => proj.name === name);

  }

}
