import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



const material = [
  MatButtonModule, 
  MatInputModule,
  MatButtonToggleModule
]

@NgModule({
    imports: [material],
    exports: [material]
  })
  export class MaterialModule { }
  