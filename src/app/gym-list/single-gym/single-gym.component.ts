import {Component, Input, OnInit} from '@angular/core';
import {GymsService} from '../../services/gyms.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-gym',
  templateUrl: './single-gym.component.html',
  styleUrls: ['./single-gym.component.css']
})
export class SingleGymComponent implements OnInit {
  @Input() gymName: string;
  @Input() gymPlace: string;
  @Input() gymComment: string;
  @Input() index: number;
  @Input() id: number;
  @Input() name: string;
  @Input() place: string;
  @Input() comment: string;

  constructor(private gymsSevice: GymsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.name = this.gymsSevice.getGymById(+id).name;
    this.place = this.gymsSevice.getGymById(+id).place;
    this.comment = this.gymsSevice.getGymById(+id).comment;
  }

}
