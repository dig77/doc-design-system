import { Component, OnInit } from '@angular/core';
import { classStagger, showExpandableTrigger } from '../animations/animate';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  animations: [showExpandableTrigger, classStagger]
})
export class CompanyInfoComponent implements OnInit {

   isShown = {
    'partners': false,
    'type': false
  };

  actions = [
    {title: 'Users', description: 'Company Users'},
    {title: 'Reports', description: 'Company Reports'},
    {title: 'Reports Configuration', description: 'Configuration of company reports'},
    {title: 'Translation Tables', description: 'Translation Tables'},
    {title: 'Documents Converters', description: 'Configuration of company document converters'}
  ]

  showActions: boolean = false;

  constructor(
    private appComponent: AppComponent
  ) { }

  ngOnInit(): void {
  }

  toggle(string:any): void {
    this.isShown[string] = !this.isShown[string];
  }

  toggleActions() {
    this.showActions = !this.showActions;
  }

}
