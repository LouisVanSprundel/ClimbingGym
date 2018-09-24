import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Gym} from '../models/gym.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class GymsService {
  gymSubject = new Subject<any[]>();
  private gyms: Gym[];
  url: 'https://gyms-be1bf.firebaseio.com/gyms.json';
  constructor(private httpClient: HttpClient, private router: Router) { }

  saveGymsToServer() {
    return this.httpClient
      .put('https://gyms-be1bf.firebaseio.com/gyms.json', this.gyms);
  }

  getGymsFromServer() {
    this.gyms = [];
    this.httpClient
      .get<Gym[]>('https://gyms-be1bf.firebaseio.com/gyms.json')
      .subscribe(
        (response) => {
          let i = 0;
          for (const gym of response) {
            if (gym != null) {
              gym.id = i;
              this.gyms.push(gym);
            }
            i++;
          }
          this.emitGymsSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  deleteGymToServer(id: number) {
   return this.httpClient
      .delete('https://gyms-be1bf.firebaseio.com/gyms/' + id + '.json');
  }

  emitGymsSubject() {
    this.gymSubject.next(this.gyms.slice());
  }


  getGymById(id: number) {
    const gym = this.gyms.find(
      (s) => {
        return s.id === id;
      }
    );
    return gym;
  }

  addGyms(gym: Gym) {
    this.gyms.push(gym);
    this.emitGymsSubject();
  }

  modifyGyms(gym: Gym) {
    this.gyms.splice(gym.id, 1, gym);
    this.emitGymsSubject();
  }

  deleteGym(id: number) {
    this.gyms.splice(id, 1);
    this.emitGymsSubject();
    return this.deleteGymToServer(id);
  }
}
