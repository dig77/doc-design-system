import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Result } from '../interfaces/result';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  results: Result[] = [
    {
      accType: 'Restricted',
      network: 'test',
      companyImage:
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'CNT Coimbrashopping',
      companyCode: '5600000000205',
      labelStatus: 'Company',
      status: 'Active',
      companyNick: 'MCH, SA - Coimbra',
      companyCountryVAT: 'PT502011666',
      companyGLN: '5600000000403',
      companyAddress: 'Qta. do Ameal Meadela',
      companyCity: 'Viana do Castelo',
      companyZIPCode: '4900-204',
      companyUrl: 'www.coimbraccs.pt',
      companyEmail: 'coimbraccs@geral.pt',
      companyPhone: '212324344',
    },
    {
      accType: 'Restricted',
      network: '',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/7/74/Countable_Logo_.png',
      companyName: 'CNT Covilha',
      companyCode: '5600000000472',
      labelStatus: 'NonBillable',
      status: 'Active',
      companyNick: 'MCH, SA - Covilhã',
      companyCountryVAT: '-',
      companyGLN: '5600000000472',
      companyAddress: 'Eixo TCT (Junto à Escola C+S)',
      companyCity: 'Covilhã',
      companyZIPCode: '6200',
      companyUrl: '-',
      companyEmail: '-',
      companyPhone: '-',
    },
    {
      accType: 'Restricted',
      network: '',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/4/47/PricewaterhouseCoopers_Logo.png',
      companyName: 'MDL Felgueiras',
      companyCode: '5600000000465',
      labelStatus: 'NonBillable',
      status: 'Active',
      companyNick: 'MCH, SA - Felgueiras',
      companyCountryVAT: '-',
      companyGLN: '5600000000465',
      companyAddress: 'R. Prof. Joaquim Barros Leite',
      companyCity: 'Felgueiras',
      companyZIPCode: '4610-000',
      companyUrl: '-',
      companyEmail: 'teste@email.com',
      companyPhone: '-',
    },
    {
      accType: 'Restricted',
      network: 'test',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/f/f5/Adler_Group_Logo_Petrol_%C2%A9.png',
      companyName: 'CNT S.J. Madeira',
      companyCode: '5600000000441',
      labelStatus: 'NonBillable',
      status: 'Active',
      companyNick: 'MCH, SA - S. João da Madeira',
      companyCountryVAT: '-',
      companyGLN: '5600000000441',
      companyAddress: 'Av. Dr. Renato Araújo',
      companyCity: 'S. João da Madeira',
      companyZIPCode: '3700-240',
      companyUrl: '-',
      companyEmail: '-',
      companyPhone: '22222222',
    },
    {
      accType: 'Restricted',
      network: 'test',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/8/86/Lundin_Energy_Logo_RGB-high-%281236x522%29.png',
      companyName: 'MDL Loule',
      companyCode: '5600000000298',
      labelStatus: 'NonBillable',
      status: 'Active',
      companyNick: 'MCH, SA - Loulé',
      companyCountryVAT: 'PT545434323',
      companyGLN: '5600000000298',
      companyAddress: 'AOlivais de Santo António',
      companyCity: 'Loulé',
      companyZIPCode: '3700-240',
      companyUrl: '-',
      companyEmail: 'geral@mcch.pt',
      companyPhone: '242323426',
    },
    {
      accType: 'Restricted',
      network: 'test',
      companyImage:
        'https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_color_eps-%28Converted%29.png',
      companyName: 'CNT Portimao',
      companyCode: '5600000000267',
      labelStatus: 'NonBillable',
      status: 'Active',
      companyNick: 'MCH, SA - Portimão',
      companyCountryVAT: '-',
      companyGLN: '5600000000267',
      companyAddress: 'E.N. 124 Quinta da Malata',
      companyCity: 'Vila Real',
      companyZIPCode: '8500-524',
      companyUrl: '-',
      companyEmail: 'geral@mcch.pt',
      companyPhone: '-',
    },
  ];

  getResults(): Observable<Result[]> {
    return of(this.results);
  }

  constructor() {}
}
