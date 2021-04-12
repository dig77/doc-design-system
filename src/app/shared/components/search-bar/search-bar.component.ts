
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { showExpandableTrigger } from 'src/app/animations/animate';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  animations: [showExpandableTrigger]
})
export class SearchBarComponent implements OnInit {
  expandable: boolean = false;
  expandableExtra: boolean = false;
  @Output() hideClick = new EventEmitter();



  constructor() {}

  ngOnInit(): void {}

  showExpandable() {
    this.expandable = !this.expandable;
  }

  showExpandableExtra() {
    this.expandableExtra = !this.expandableExtra;
  }

  onClick() {
    this.hideClick.emit();
  }
}
