import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
    // 2. default routing
    // {path:"",component:LoginComponent},

    // 3. redirect routing
    { path: "", redirectTo: "login", pathMatch: "full" },
    // 1. namming routing
    { path: "login", component: LoginComponent },
    {
        path: "maindashboard", component: MaindashboardComponent, children: [
            {path:"parent",component:ParentComponent},
            { path: "databinding", component: DatabindingComponent },

            // 4. parameterize routing
            { path: "mypipe/:id", component: MypipesComponent },

            // 5.child routing
            {
                path: "angform", component: AngformComponent, children: [
                    { path: "utdf", component: UtdfComponent },
                    { path: "rtf", component: RtfComponent },
                ]
            },
        ]
    },

    //6. wild card routing
    { path: "**", component: PagenotfoundComponent }
];
