import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users=[
    {name: 'umang', status: 'active'},
    {name: 'depak', status: 'inactive'},
    {name: 'sharon', status: 'active'},
  ];
  addNewUser(name:string, status:string)
  {
    this.users.push({name:name, status:status});
  }
}
