import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { classStagger, simpleFade, fadingTrigger } from '../animations/animate';
import { routeMainAnimationTrigger } from '../animations/route-animate';
import { ResultService } from '../shared/services/result.service';
import { Result } from '../shared/interfaces/result';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
  animations: [classStagger, simpleFade, fadingTrigger, routeMainAnimationTrigger],
})
export class SearchAreaComponent implements OnInit {
  @HostBinding('@routeMainAnimation') routeAnimation = true;

  results : Observable<Result[]>;
  hideEmpty: boolean;
  isView: boolean;
  hasResults: boolean = false;
  isSticky: boolean = false;

  constructor( private resultService: ResultService) {}

  ngOnInit(): void {
    this.hideEmpty = true;
    this.isView = true;
    this.results = this.resultService.getResults();
  }

  showResults() {
    this.hideEmpty = false;
    setTimeout(() => {
      this.hasResults = true;
    }, 3000);
  }

  changeCardView() {
    this.isView = true;
  }

  changeListView() {
    this.isView = false;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }
}
