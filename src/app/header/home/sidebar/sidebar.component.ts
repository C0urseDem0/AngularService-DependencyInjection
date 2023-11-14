import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  constructor(private subscribe:SubscribeService ){

  }
  OnSubscribe(){
  //let subscribe=new SubscribeService();
 this.subscribe.OnSubscribe("Monthly")
  }
}
