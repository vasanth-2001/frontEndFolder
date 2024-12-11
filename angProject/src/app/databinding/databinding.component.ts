import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  myName:string = "Vasanth Rajendran";
  imgPath:string="./images/curvv.jfif";
  imgName:string="Tata Curvv";

  inputData :string ="samosa"

    greeting(val:any){
      window.alert(`Hello Everyone${val}`)
    }
}
