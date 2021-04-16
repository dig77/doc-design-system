import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  selectedIndex = 2;

  constructor() { }

  ngOnInit(): void {
  }

  snippet1 = 
  `<table class="app-table">
  <tr class="is-header">
    <th>Document Number</th>
    <th>Document Type</th>
    <th>Creation Date</th>
    <th>Receptor Code</th>
    <th>Receptor Name</th>
    <th>Status</th>
    <th></th>
  </tr>
  <tr>
    <td data-th="Document Number">
      <a class="is-link" href="#">123456789009</a>
    </td>
    <td data-th="Document Type">DESPATCH_ADVICE</td>
    <td data-th="Creation Date">04/03/2021 00:03:00</td>
    <td data-th="Receptor Code">5600000675366</td>
    <td data-th="Receptor Name">ENT. AGUA PENA FRES.</td>
    <td data-th="Status">
      <span class="tag is-warning">DOCSTS_DRAFT</span>
    </td>
    <td data-th="Action">
      <button
        mat-icon-button
        color="primary"
        aria-label="Example icon button with a home icon"
      >
        <mat-icon>cancel</mat-icon>
      </button>
    </td>
  </tr>
  <tr>
    <td data-th="Document Number">
      <a class="is-link" href="#">123456789009</a>
    </td>
    <td data-th="Document Type">DESPATCH_ADVICE</td>
    <td data-th="Creation Date">04/03/2021 00:03:00</td>
    <td data-th="Receptor Code">5600000675366</td>
    <td data-th="Receptor Name">ENT. AGUA PENA FRES.</td>
    <td data-th="Status">
      <span class="tag is-warning">DOCSTS_DRAFT</span>
    </td>
    <td data-th="Action">
      <button
        mat-icon-button
        color="primary"
        aria-label="Example icon button with a home icon"
      >
        <mat-icon>cancel</mat-icon>
      </button>
    </td>
  </tr>
  <tr>
    <td data-th="Document Number">
      <a class="is-link" href="#">123456789009</a>
    </td>
    <td data-th="Document Type">DESPATCH_ADVICE</td>
    <td data-th="Creation Date">04/03/2021 00:03:00</td>
    <td data-th="Receptor Code">5600000675366</td>
    <td data-th="Receptor Name">ENT. AGUA PENA FRES.</td>
    <td data-th="Status">
      <span class="tag is-warning">DOCSTS_DRAFT</span>
    </td>
    <td data-th="Action">
      <button
        mat-icon-button
        color="primary"
        aria-label="Example icon button with a home icon"
      >
        <mat-icon>cancel</mat-icon>
      </button>
    </td>
  </tr>
  <tr>
    <td data-th="Document Number">
      <a class="is-link" href="#">123456789009</a>
    </td>
    <td data-th="Document Type">DESPATCH_ADVICE</td>
    <td data-th="Creation Date">04/03/2021 00:03:00</td>
    <td data-th="Receptor Code">5600000675366</td>
    <td data-th="Receptor Name">ENT. AGUA PENA FRES.</td>
    <td data-th="Status">
      <span class="tag is-warning">DOCSTS_DRAFT</span>
    </td>
    <td data-th="Action">
      <button
        mat-icon-button
        color="primary"
        aria-label="Example icon button with a home icon"
      >
        <mat-icon>cancel</mat-icon>
      </button>
    </td>
  </tr>
</table>`

snippet2 = 
  `
  .app-table {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-gap: 2rem;
    background: transparent;
    overflow: hidden;
    margin: 1em 0;
    border-spacing: 0;
  }
  
  .app-table .is-header {
    display: none;
  }
  
  .app-table th,
  .app-table td {
    margin: 0.5em 1em;
    text-align: left;
  }
  
  .app-table th {
    display: none;
  }
  
  .app-table td {
    display: block;
    font-weight: 500;
    font-size: .9rem;
  }
  
  .app-table td:first-child {
    padding-top: 0.5em;
  }
  
  .app-table td:last-child {
    padding-bottom: 0.5em;
  }
  
  .app-table td:before {
    content: attr(data-th) ": ";
    font-weight: bold;
    width: 5.5em;
    display: inline-block;
    line-height: 1.5;
  }
  
  .app-table th,
  .app-table td:before {
    color: rgba(var(--rgb-primary), 0.5);
  }
  
  .app-table tr {
      border: 1px solid rgba(var(--rgb-primary), 0.08);
      border-radius: var(--br-md);
  }
  
  @media (min-width: 100em) {
    .app-table {
      display: table;
    }
  
    .app-table .is-header {
      display: table-row;
    }
    .app-table th {
      padding-bottom: 2em;
      border-bottom: 1px solid rgba(var(--rgb-primary), 0.1);
      line-height: 1.5;
    }
  
    .app-table th,
    .app-table td {
      padding: 1em 2em;
    }
  
    .app-table th,
    .app-table td {
      display: table-cell;
    }
  
    .app-table td {
      position: relative;
      padding: 1.5em 2em;
      vertical-align: middle;
      line-height: 1.5;
    }
    .app-table th:first-child,
    .app-table td:first-child {
      padding-left: 1em;
    }
  
    .app-table td:first-child {
      padding-top: 1.5em;
    }
    .app-table th:last-child,
    .app-table td:last-child {
      padding-right: 1em;
    }
  
    .app-table td:last-child {
      padding-bottom: 1.5em;
    }
  
    .app-table td:before {
      display: none;
    }
  
    .app-table tr:hover {
      background-color: rgba(var(--rgb-primary), 0.03);
    }
  
    .app-table td:hover:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: -9999px;
      bottom: -9999px;
      background-color: rgba(var(--rgb-primary), 0.03);
      z-index: -1;
    }
  }
  
  `

}
