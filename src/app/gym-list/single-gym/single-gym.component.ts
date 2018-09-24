import {Component, Input, OnInit} from '@angular/core';
import {GymsService} from '../../services/gyms.service';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private gymsService: GymsService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = + this.route.snapshot.params['id'];
    this.modifyId = '/modify/' + (this.id);
    this.name = this.gymsService.getGymById(this.id).name;
    this.place = this.gymsService.getGymById(this.id).place;
    this.comment = this.gymsService.getGymById(this.id).comment;
  }

  deleteGym() {
      this.gymsService.deleteGym(this.id).subscribe(
        () => {
          console.log('Supression terminé !');
          this.router.navigate(['/gyms']);
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        },
      );
  }
}


