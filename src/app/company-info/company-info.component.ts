import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { classStagger, fadingTrigger, showExpandableTrigger } from '../animations/animate';
import { AppComponent } from '../app.component';
import { routeMainAnimationTrigger } from '../animations/route-animate';
import { Observable } from 'rxjs';
import { AreaService } from '../shared/services/area.service';
import { Area } from '../shared/interfaces/area';
import { ActionService } from '../shared/services/action.service';
import { Action } from '../shared/interfaces/action';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css'],
  animations: [showExpandableTrigger, classStagger, fadingTrigger, routeMainAnimationTrigger]
})
export class CompanyInfoComponent implements OnInit {
  @HostBinding('@routeMainAnimation') routeAnimation = true;

  areas: Observable<Area[]>;
  actions: Observable<Action[]>;

  show: number = 5;
  expanded:boolean = false;
   isShown = {
    'partners': false,
    'type': false
  };
  showActions: boolean = false;
  areasSize:number;

  constructor(
    private appComponent: AppComponent,
    private areaService: AreaService,
    private actionService: ActionService,
  ) { }

  ngOnInit(): void {
    this.areas = this.areaService.getAreas();
    this.areaService.getAreas().subscribe(areas => {this.areasSize = areas.length});
    this.actions = this.actionService.getActions();
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
