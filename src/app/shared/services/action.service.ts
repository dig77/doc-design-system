import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '../interfaces/action';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  actions : Action[] = [
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

  getActions(): Observable<Action[]> {
    return of(this.actions);
  }

  constructor() { }
}
