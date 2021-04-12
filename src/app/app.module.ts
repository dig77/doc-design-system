import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { IntroComponent } from './intro/intro.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { MaterialModule} from './material/material.module';
import { EmptySearchComponent } from './shared/components/empty-search/empty-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchAreaComponent,
    CompanyInfoComponent,
    IntroComponent,
    SearchBarComponent,
    EmptySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
