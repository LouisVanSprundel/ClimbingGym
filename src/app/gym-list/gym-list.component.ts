import {Component, Input, OnInit} from '@angular/core';
import {GymsService} from '../services/gyms.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit {
  @Input() name: string;
  @Input() place: string;
  @Input() comment: string;
  @Input() index: number;
  @Input() id: number;
  isAuth: boolean;
  gyms: any[];
  constructor(private gymsService: GymsService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  ngOnInit() {
    this.gyms = this.gymsService.gyms;
    console.log(this.gyms);
  }

}
