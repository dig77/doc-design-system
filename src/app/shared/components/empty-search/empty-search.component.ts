import { Component, OnInit } from '@angular/core';
import { emptyElementTrigger } from 'src/app/animations/animate';

@Component({
  selector: 'app-empty-search',
  templateUrl: './empty-search.component.html',
  styleUrls: ['./empty-search.component.css'],
  animations: [emptyElementTrigger]
})
export class EmptySearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
