import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GymsService} from '../../services/gyms.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Gym} from '../../models/gym.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-gym-form',
  templateUrl: './gym-form.component.html',
  styleUrls: ['./gym-form.component.css']
})
export class GymFormComponent implements OnInit, OnDestroy {
  id: number;
  gyms: any[];
  gymsSubscription: Subscription;
  gymForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private gymsService: GymsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.gymsSubscription = this.gymsService.gymSubject.subscribe(
      (gyms: any[]) => {
        this.gyms = gyms;
      }
    );
    this.gymsService.emitGymsSubject();
    this.initForm();
  }

  initForm() {
    if ( this.id == null) {
      this.gymForm = this.formBuilder.group({
        name: ['', Validators.required],
        place: ['', Validators.required],
        comment: ''
      });
    } else {
        this.gymForm = this.formBuilder.group({
          name: [this.gyms[this.id].name, Validators.required],
          place: [this.gyms[this.id].place, Validators.required],
          comment: this.gyms[this.id].comment
      });
    }
  }

  onSubmitForm() {
    const formValue = this.gymForm.value;
    const gym = new Gym(
      this.id != null ? + this.id : + this.gyms[this.gyms.length - 1].id + 1,
      formValue['name'],
      formValue['place'],
      formValue['comment']
    );
    if ( this.id == null) {
      this.gymsService.addGyms(gym);
    } else {
      this.gymsService.modifyGyms(gym);
    }
    this.router.navigate(['/gyms']);
  }

  ngOnDestroy() {
    this.gymsSubscription.unsubscribe();
  }

}
