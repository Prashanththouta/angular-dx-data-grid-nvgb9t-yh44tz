import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import ODataStore from 'devextreme/data/odata/store';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

dataSourse: DataSource;
gridFilter: Array<any> = null;

savedFilters = [];

  ngOnInit() {
    this.dataSourse = new DataSource({
      store: new ODataStore({
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products'
      }),
      select: [
        "Product_ID",
        "Product_Name",
        "Product_Cost",
        "Product_Sale_Price",
        "Product_Retail_Price",
        "Product_Current_Inventory",
        "Product_Available"
      ]
    });
  }

  saveFilterValue() {
    var name = prompt("Enter filter name:");

    this.savedFilters.push({
      "name": name,
      "value": this.gridFilter
    });
  }

  restoreFilterValue(filterName: string) {
    if(filterName === undefined) {
      filterName = prompt("Enter filter name:");
    }
    
    let filter = this.savedFilters.find(x => x.name.toLowerCase() == filterName.toLowerCase());
    this.gridFilter = filter.value;
  }

  print() {
    window.print();
  }

}