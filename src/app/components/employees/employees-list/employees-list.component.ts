import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.mode';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit{

  employees:Employee[] = [
    {
      id: '5b4ed4cc-fc31b-444b-a06e-05ce7b322892',
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: 1111111111,
      salary: 60000,
      department: 'Human Resource'
    },
    {
      id: '5b4ed4cc-fc31b-444b-a06e-05ce7b322893',
      name: 'John Doi',
      email: 'john.doi@email.com',
      phone: 2222222222,
      salary: 70000,
      department: 'DB Admin'
    },
    {
      id: '5b4ed4cc-fc31b-444b-a06e-05ce7b322894',
      name: 'John Doo',
      email: 'john.doo@email.com',
      phone: 3333333333,
      salary: 80000,
      department: 'IT'
    }
    
  ];
  constructor() {}

  ngOnInit() : void {

  }

}
