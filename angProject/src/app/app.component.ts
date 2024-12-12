import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ParentComponent,MypipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angProject';
}
