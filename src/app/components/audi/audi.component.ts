import { Component } from '@angular/core';
import { CarsServer, Root } from '../../modules/cars-server';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  carArr: CarsServer[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => <Promise<Root>>response.json())
      .then((car) => {
        const audiArr = car.filter((element) => element.brand === 'Audi');
        for (const audiCar of audiArr) {
          this.carArr.push(audiCar);
        }
      });
  }
}
