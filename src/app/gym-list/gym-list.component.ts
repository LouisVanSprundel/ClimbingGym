import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GymsService} from '../services/gyms.service';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit, OnDestroy {
  isAuth: boolean;
  gyms: any[];
  gymsSubscription: Subscription;

  constructor(private gymsService: GymsService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  ngOnInit() {
    this.gymsSubscription = this.gymsService.gymSubject.subscribe(
      (gyms: any[]) => {
        this.gyms = gyms;
      }
    );
    this.gymsService.emitGymsSubject();
  }


  ngOnDestroy() {
    this.gymsSubscription.unsubscribe();
  }

}
