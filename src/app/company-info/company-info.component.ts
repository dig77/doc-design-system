import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { classStagger, fadingTrigger, showExpandableTrigger } from '../animations/animate';
import { AppComponent } from '../app.component';
import { AreaLink } from '../shared/models/area-link.model';
import { AREA_LINK } from '../shared/models/area-link';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  animations: [showExpandableTrigger, classStagger, fadingTrigger]
})
export class CompanyInfoComponent implements OnInit {

  arealinks: AreaLink[] = AREA_LINK;

  show: number = 5;

  expanded:boolean = false;

   isShown = {
    'partners': false,
    'type': false
  };

  actions = [
    {title: 'Users', description: 'Company Users'},
    {title: 'Reports', description: 'Company Reports'},
    {title: 'Reports Configuration', description: 'Configuration of company reports'},
    {title: 'Translation Tables', description: 'Translation Tables'},
    {title: 'Documents Converters', description: 'Configuration of company document converters'},
    {title: 'Software Configurations', description: 'Software Settings'},
    {title: 'Email Templates', description: 'Company email Templatess'},
    {title: 'PDF Templates', description: 'PDF Document Layouts (razor views)'},
    {title: 'Notifications', description: 'Company Notifications'},
    {title: 'Documents to Integrate', description: 'Integration mappers and validators'},
    {title: 'Entity Connections', description: 'Integration connections network'},
    {title: 'Company configurations', description: 'Special configurations(tolerance)'},
    {title: 'Invoice PDF Layouts', description: 'Invoices that share the same pdf structure'},
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
