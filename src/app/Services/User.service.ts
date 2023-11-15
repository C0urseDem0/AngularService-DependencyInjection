import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../header/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
users:User[]=[
  new User('Mona1', 'Female', 'Monthly', 'Active'),
  new User('Mona2', 'Male', 'Yearly', 'InActive'),
  new User('Mona3', 'Female', 'Monthly', 'Active'),
  new User('Mona4', 'Male', 'Monthly', 'InActive'),
]

GetAllUsers(){
  return this.users
}
CreateUser(name:string,gender:string,subType:string,status:string) {
  let user=new User(name,gender,subType,status)
  this.users.push(user)
}

OnUserDetailsClick:EventEmitter<User>=new EventEmitter<User>();
ShowUserDetails(user:User){
this.OnUserDetailsClick.emit(user)

}

}
