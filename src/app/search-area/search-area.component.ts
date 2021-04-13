import { Component, HostListener, Input, OnInit } from '@angular/core';
import { classStagger, simpleFade } from '../animations/animate';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
  animations: [classStagger, simpleFade]
})
export class SearchAreaComponent implements OnInit {
  hideEmpty: boolean;
  isView: boolean;
  results = [
    {name: 'Company A', vat: '12345676'},
    {name: 'Company B', vat: '21324356'},
    {name: 'Company C', vat: '7654321'},
    {name: 'Company A', vat: '12345676'},
    {name: 'Company B', vat: '21324356'},
    {name: 'Company C', vat: '7654321'},
    {name: 'Company A', vat: '12345676'},
    {name: 'Company B', vat: '21324356'},
    {name: 'Company C', vat: '7654321'}
  ];
  hasResults: boolean = false;

  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.hideEmpty = true;
    this.isView = true;
  }

  showResults() {
    this.hideEmpty = false;
    setTimeout(()=>{                           
      this.hasResults = true;
    }, 3000);
  }

  changeView() {
    this.isView = !this.isView;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 50;
  }

}
