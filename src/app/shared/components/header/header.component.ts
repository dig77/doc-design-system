import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  openMenu: boolean = false;

  constructor(
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
  }

  changeOpenMenu() {
    this.appComponent.changeOpenMenu();
    this.openMenu = this.appComponent.openMenu;
  }

}
