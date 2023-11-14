import { Component, inject } from '@angular/core';
import { SubscribeService } from 'src/app/Services/Subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  constructor(private subservice:SubscribeService){

  }
  OnSubscribe(){
   //let subservice=new SubscribeService();
   this.subservice.OnSubscribe('Yearly')
  }
}
