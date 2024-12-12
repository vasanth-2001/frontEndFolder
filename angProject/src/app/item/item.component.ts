import { Component } from '@angular/core';
import { commanImgPath } from '../shared/constant/constantData';
import { CommonModule } from '@angular/common';
import { ItemsserviceService } from '../shared/services/itemsservice.service';
@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj =new ItemsserviceService()
   myitems:any[]=[
    {name:"Altroz",price:1200000,description:"Turbo engine car with Afortable price",imgPath:commanImgPath.altroz},
    {name:"Curvv",price:1900000,description:"Tata First Sccop car",imgPath:commanImgPath.curvv},
    {name:"Nexan",price:1700000,description:"Most selled Car in TaTa",imgPath:commanImgPath.nexan},
    {name:"Harrier",price:2500000,description:"Best Suv Car in tata",imgPath:commanImgPath.harrier},
  ]
}
