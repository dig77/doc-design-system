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
import { ResultCardComponent } from './search-area/result-card/result-card.component';
import { CompanyActionsComponent } from './company-info/company-actions/company-actions.component';
import { CommonModule } from '@angular/common';
import { ThemeToggler } from './shared/services/theme-toggle.service';
import { TablesComponent } from './tables/tables.component';
import { CompanyAreaComponent } from './company-info/company-area/company-area.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchAreaComponent,
    CompanyInfoComponent,
    IntroComponent,
    SearchBarComponent,
    EmptySearchComponent,
    ResultCardComponent,
    CompanyActionsComponent,
    TablesComponent,
    CompanyAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule
  ],
  providers: [ThemeToggler],
  bootstrap: [AppComponent]
})
export class AppModule { }
