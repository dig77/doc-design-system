import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { classStagger, fadingTrigger, showExpandableTrigger } from '../animations/animate';
import { AppComponent } from '../app.component';
import { routeMainAnimationTrigger } from '../animations/route-animate';
import { Observable } from 'rxjs';
import { AreaService } from '../shared/services/area.service'
import { Area } from '../shared/interfaces/area'
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  animations: [showExpandableTrigger, classStagger, fadingTrigger, routeMainAnimationTrigger]
})
export class CompanyInfoComponent implements OnInit {
  @HostBinding('@routeMainAnimation') routeAnimation = true;

  areas: Observable<Area[]>

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

  areasSize:number;

  constructor(
    private appComponent: AppComponent,
    private areaService: AreaService
  ) { }

  ngOnInit(): void {
    this.areas = this.areaService.getAreas();
    this.areaService.getAreas().subscribe(areas => {this.areasSize = areas.length})
  }

  toggle(string:any): void {
    this.isShown[string] = !this.isShown[string];
  }

  toggleActions() {
    this.showActions = !this.showActions;
  }

  onMoreAreas() {
    this.show = this.areasSize;
    this.expanded = true;
  }

  onLessAreas() {
    this.show = 5;
    this.expanded = false;
  }

}
