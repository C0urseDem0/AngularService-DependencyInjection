import { Component } from '@angular/core';
import { SubscribeService } from '../Services/Subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  constructor(private subservice:SubscribeService){

  }
  OnSubscribe(){
    //let subscribe=new SubscribeService();
    this.subservice.OnSubscribe("Main")
  }
}
