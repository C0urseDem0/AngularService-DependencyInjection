import { Injectable } from '@angular/core';
import { User } from '../header/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }
users:User[]=[
  new User('Mona1', 'Femal', 'Monthly', 'Active'),
  new User('Mona2', 'Femal', 'Yearly', 'InActive'),
  new User('Mona3', 'Femal', 'Monthly', 'Active'),
  new User('Mona4', 'Femal', 'Monthly', 'InActive'),
]

GetAllUsers(){
  return this.users
}
CreateUser(name:string,gender:string,subType:string,status:string) {
  let user=new User(name,gender,subType,status)
  this.users.push(user)
}
}
