import { Component } from '@angular/core';
import { CarsServer, Root } from '../../modules/cars-server';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss',
})
export class FordComponent {
  carArr: CarsServer[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((car) => {
        const fordArr = car.filter((element) => element.brand === 'Ford');
        for (const fordCar of fordArr) {
          this.carArr.push(fordCar);
        }
      });
  }
}
