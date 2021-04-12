import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from '../shared/components/header/header.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule { }