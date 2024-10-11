import { Component } from '@angular/core';
import { CarsServer, Root } from '../../modules/cars-server';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss',
})
export class FiatComponent {
  carArr: CarsServer[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((car) => {
        const fiatArr = car.filter((element) => element.brand === 'Fiat');
        for (const fiatCar of fiatArr) {
          this.carArr.push(fiatCar);
        }
      });
  }
}
