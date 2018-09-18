import { Injectable } from '@angular/core';

@Injectable()
export class GymsService {
  gyms = [
    {
      id: 1,
      name: 'Block Out',
      place: 'Paris',
      comment: 'Première'
    },
    {
      id: 2,
      name: 'BlocBuster',
      place: 'Courbevoie',
      comment: 'Deuxième'
    },
    { id: 3,
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
}
