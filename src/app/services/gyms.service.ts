import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Gym} from '../models/gym.model';

@Injectable()
export class GymsService {
  gymSubject = new Subject<any[]>();
  private gyms: Gym[] = [
    {
      id: 0,
      name: 'Block Out',
      place: 'Paris',
      comment: 'Première'
    },
    {
      id: 1,
      name: 'BlocBuster',
      place: 'Courbevoie',
      comment: 'Deuxième'
    },
    { id: 2,
      name: 'AntreBloc',
      place: 'Ville-Juif',
      comment: 'Troisième'
    },
  ];
  constructor() { }

  getGymById(id: number) {
    const gyms = this.gyms.find(
      (s) => {
        return s.id === id;
      }
    );
    return gyms;
  }

  emitGymsSubject() {
    this.gymSubject.next(this.gyms.slice());
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
  }
}
