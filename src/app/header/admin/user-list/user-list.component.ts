import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
/**
 *
 */
constructor(private userService:UserService) {
}

ListUser=this.userService.GetAllUsers()
ShowUserDetails(item){
  this.userService.ShowUserDetails(item)
}
}
