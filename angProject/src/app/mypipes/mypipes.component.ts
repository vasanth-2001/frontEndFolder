import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../shared/customPipe/cube.pipe';
import { SquarePipe } from '../shared/customPipe/square.pipe';

@Component({
  selector: 'app-mypipes',
  imports: [CommonModule,CubePipe,SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {
  msg:string="Hello Everyone this is vasanth";
  emp={id:11,name:"Vasanth",salary:52000,address:"chennai"};
  dateObj=new Date();
}
