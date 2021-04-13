import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-actions',
  templateUrl: './company-actions.component.html',
  styleUrls: ['./company-actions.component.css']
})
export class CompanyActionsComponent implements OnInit {
  @Input() action: any

  constructor() { }

  ngOnInit(): void {
  }

}
