import {Component, Input, OnInit} from '@angular/core';
import {GymsService} from '../../services/gyms.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-gym',
  templateUrl: './single-gym.component.html',
  styleUrls: ['./single-gym.component.css']
})
export class SingleGymComponent implements OnInit {
  @Input() name: string;
  @Input() place: string;
  @Input() comment: string;
  @Input() modifyId: string;
  id: number;
  constructor(private gymsSevice: GymsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = + this.route.snapshot.params['id'];
    this.modifyId = '/modify/' + (this.id);
    this.name = this.gymsSevice.getGymById(this.id).name;
    this.place = this.gymsSevice.getGymById(this.id).place;
    this.comment = this.gymsSevice.getGymById(this.id).comment;
  }

  deleteGym() {
      this.gymsSevice.deleteGym(this.id);
  }
}


