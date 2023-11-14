import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

constructor() { }
OnSubscribe(type:any){
  //add user to data base
  //Send mail with subscribtion details
  //allow user to access resourses
  alert("you are subscribe "+type+" subscribtion")
}
}
