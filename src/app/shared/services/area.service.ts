import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Area } from '../interfaces/area';


@Injectable({
  providedIn: 'root',
})
export class AreaService {
  areas: Area[] = [
    { icon: 'people_alt', title: 'Users' },
    { icon: 'summarize', title: 'Reports' },
    { icon: 'tune', title: 'Reports Configuration' },
    { icon: 'translate', title: 'Translation Tables' },
    { icon: 'trending_flat', title: 'Documents Converters' },
    { icon: 'settings', title: 'Software Configurations' },
    { icon: 'email', title: 'Email Templates' },
    { icon: 'picture_as_pdf', title: 'PDF Templates' },
    { icon: 'notifications', title: 'Notifications' },
    { icon: 'integration_instructions', title: 'Documents to Integrate' },
    { icon: 'share', title: 'Entity Connections' },
    { icon: 'business', title: 'Company configurations' },
    { icon: 'receipt', title: 'Invoice PDF Layouts' },
  ];

  getAreas() : Observable<Area[]> {
    return of(this.areas)
  }

  constructor() {}
}
