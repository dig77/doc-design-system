import { Component, Input, OnInit } from '@angular/core';
import { classStagger } from '../animations/animate';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
  animations: [classStagger]
})
export class SearchAreaComponent implements OnInit {
  hideEmpty: boolean;
  isView: boolean;


  constructor() { }

  ngOnInit(): void {
    this.hideEmpty = true;
    this.isView = true;
  }

  showResults() {
    this.hideEmpty = false;
    console.log('executei um metodo')
  }

  changeView() {
    this.isView = !this.isView;
  }

}
