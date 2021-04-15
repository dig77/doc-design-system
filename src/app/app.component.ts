import { Component, OnInit } from '@angular/core';
import { closeMenuTrigger } from './animations/animate';
import { Config, Menu } from './menu/types';
import { ThemeToggler, Theme} from './shared/services/theme-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [closeMenuTrigger]
})
export class AppComponent implements OnInit{
  openMenu: boolean;
  isCloseMenu = "default";
  title = 'doc-design-system';

  constructor(private tt: ThemeToggler) {}

  ngOnInit() {
  }

  // single open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      mainLink: true,
      url: '/intro',
      name: 'Home',
      active: true,
      submenu: [
      ],
    },
    {
      mainLink: false,
      url: '',
      name: 'Components',
      active: false,
      submenu: [
        { name: 'Buttons', url: '#' },
        { name: 'Table', url: '#' },
        { name: 'Empty Elements', url: '#' }
      ],
    },
    {
      mainLink: true,
      url: '/search-area',
      name: 'Search Area',
      active: false,
      submenu: [],
    },
    { 
      mainLink: true,
      url: '/company-info',
      name: 'Company Details',
      active: false,
      submenu: [],
    }
  ];

  changeOpenMenu() {
    this.openMenu = !this.openMenu;
    this.isCloseMenu = "clicked";
  }

  switchTheme(newTheme: Theme): void {
    this.tt.switchTheme(newTheme);
  }
}
