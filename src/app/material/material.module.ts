import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';



const material = [
  MatButtonModule, 
  MatInputModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatPaginatorModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatIconModule,
  MatTabsModule
]

@NgModule({
    imports: [material],
    exports: [material]
  })
  export class MaterialModule { }
  