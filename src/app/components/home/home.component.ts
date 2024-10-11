import { CarsServer, Root } from './../../modules/cars-server';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carArr: CarsServer[] = [];

  // ho visto su google come fare lo shuffle ma non ho compreso bene come funziona e non lo inserito
  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((car) => {
        const numberCard: number = 2;
        for (let i = 0; i < numberCard; i++) {
          let random: number = Math.floor(Math.random() * car.length);
          this.carArr.push(car[random]);
        }
      });
  }
}
