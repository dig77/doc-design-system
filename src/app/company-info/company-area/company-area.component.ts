import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Area } from 'src/app/shared/interfaces/area';

@Component({
  selector: 'app-company-area',
  templateUrl: './company-area.component.html',
  styleUrls: ['./company-area.component.css']
})
export class CompanyAreaComponent implements OnInit {
  @Input() area: Area;
  @Input() show: any;
  @Input() i: any;
  @Input() areas: any;
  @Output() moreAreas = new EventEmitter<any>();
  @Output() lessAreas = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  showMoreAreas(event) {
    this.moreAreas.emit(event); 
  }

  showLessAreas(event) {
    this.lessAreas.emit(event); 
  }

}
