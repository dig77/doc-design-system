import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { IntroComponent} from './intro/intro.component';


const routes: Routes = [
  { path: '', redirectTo: 'intro',pathMatch:'full'},
  { path: 'intro', component: IntroComponent},
  { path: 'search-area', component:SearchAreaComponent},
  { path: 'company-info', component:CompanyInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
