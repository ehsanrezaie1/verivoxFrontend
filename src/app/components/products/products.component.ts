import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

  constructor(private dataService: DataService) { }

  public ngAfterViewInit() {

  }
  
  public productList:any;
  stars: number[] = [1, 2, 3, 4, 5];

  visibleRowIndex: any = 1;

  @Input() priceFilterForm = '';


  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.dataService.getData().subscribe(data=>{
      this.productList = data;
      })
  }

  sortByPrice(formValue:any) {
    this.productList = this.productList.filter((item: any) => item.price >= formValue.min && item.price <= formValue.max );
  }

  showHide(i:any){
    const el = document.getElementById('details'+i);
    const btn = document.getElementById('btn'+i);
    if (el != null && btn != null) {
      if (el.style.display === 'none') {
        el.style.display = 'block';
        btn.textContent = 'Hide div';
      }else{
        el.style.display = 'none';
        btn.textContent = 'Show div';
      }
    }
  }
  

}
