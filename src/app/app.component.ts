import { Component } from '@angular/core';
import { Config, Menu } from './menu/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  openMenu: boolean;
  title = 'doc-design-system';

  // single open mode
  options: Config = { multi: false };

  menus: Menu[] = [
    {
      mainLink: false,
      url: '',
      name: 'Branding',
      active: false,
      submenu: [
        { name: 'Visual Language', url: '#' },
        { name: 'Pallete', url: '#' },
        { name: 'Typography', url: '#' },
      ],
    },
    {
      mainLink: false,
      url: '',
      name: 'Components',
      active: false,
      submenu: [
        { name: 'Buttons', url: '#' },
        { name: 'Tables', url: '#' }
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
      name: 'Company Info',
      active: false,
      submenu: [],
    }
  ];
}
