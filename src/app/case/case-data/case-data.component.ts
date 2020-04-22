import { Component, OnInit } from '@angular/core';
import { Case } from './case';

@Component({
  selector: 'app-case-data',
  templateUrl: './case-data.component.html',
  styleUrls: ['./case-data.component.css']
})
export class CaseDataComponent implements OnInit {

  case: Case = {
    id: 1,
    number: '123',
    balance: 100000
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}

