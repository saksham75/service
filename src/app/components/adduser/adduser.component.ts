import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-adduser',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  username:string='';
  status:string='';

  constructor(private _serv : UserService)
  {

  }
  addUser(){
    this._serv.addNewUser(this.username, this.status)
  }

}
