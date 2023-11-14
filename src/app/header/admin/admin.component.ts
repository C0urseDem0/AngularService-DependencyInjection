import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {

  name: string = '';
  gender: string = 'Male';
  subType: string = 'Yearly';
  status: string = 'Active';

  constructor(private userService:UserService) {
  }
  CreateUser(){
    this.userService.CreateUser(this.name,this.gender,this.subType,this.status)
    console.log(this.userService.users)
  }
}
