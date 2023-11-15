import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit{

  
  constructor(private userService:UserService) {


  }
  selectedUser:User
  ngOnInit(): void {
    this.userService.OnUserDetailsClick.subscribe((data:User)=>{
      this.selectedUser=data
      console.log(this.selectedUser)
    })
  }

}
