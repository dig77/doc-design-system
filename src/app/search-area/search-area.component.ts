import { Component, HostListener, Input, OnInit } from '@angular/core';
import { classStagger, simpleFade } from '../animations/animate';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css'],
  animations: [classStagger, simpleFade],
})
export class SearchAreaComponent implements OnInit {
  hideEmpty: boolean;
  isView: boolean;
  results = [
    {
      accType: 'Restricted',
      network: 'test',
      companyImage:
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'CNT Coimbrashopping',
      companyCode: '5600000000205',
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
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'CNT Covilha',
      companyCode: '5600000000472',
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
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'MDL Felgueiras',
      companyCode: '5600000000465',
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
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'CNT S.J. Madeira',
      companyCode: '5600000000441',
      status: 'Active',
      companyNick: 'MCH, SA - S. João da Madeira',
      companyCountryVAT: '-',
      companyGLN: '5600000000441',
      companyAddress: 'Av. Dr. Renato Araújo',
      companyCity: 'S. João da Madeira',
      companyZIPCode: '3700-240',
      companyUrl: '-',
      companyEmail: '',
      companyPhone: '22222222',
    },
    {
      accType: 'Restricted',
      network: 'test',
      companyImage:
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'MDL Loule',
      companyCode: '5600000000298',
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
        'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png',
      companyName: 'CNT Portimao',
      companyCode: '5600000000267',
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
    }
    
  ];
  hasResults: boolean = false;

  isSticky: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.hideEmpty = true;
    this.isView = true;
  }

  showResults() {
    this.hideEmpty = false;
    setTimeout(() => {
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
