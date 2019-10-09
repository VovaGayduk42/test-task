import {Injectable} from '@angular/core';
import {Subject, timer} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Indicator[] = [
    {
      id: '1',
      title: 'Уровень карналита',
      value: 55,
      minValue: 20,
      maxValue: 80
    },
    {
      id: '2',
      title: 'Уровень карналита',
      value: 68,
      minValue: 30,
      maxValue: 90
    },
    {
      id: '3',
      title: 'Уровень карналита',
      value: 12,
      minValue: 40,
      maxValue: 60
    },
    {
      id: '4',
      title: 'Уровень карналита',
      value: 0,
      minValue: 5,
      maxValue: 60
    },
    {
      id: '5',
      title: 'Уровень карналита',
      value: 42,
      minValue: 40,
      maxValue: 90
    },
    {
      id: '6',
      title: 'Уровень карналита',
      value: 70,
      minValue: 50,
      maxValue: 70
    },
    {
      id: '7',
      title: 'Уровень карналита',
      value: 100,
      minValue: 40,
      maxValue: 60
    },
    {
      id: '8',
      title: 'Уровень карналита',
      value: 100,
      minValue: 9,
      maxValue: 98
    },
  ];

  dataAPI$ = timer(100, 50).pipe(
    map((a) => {

        function getRandomIntInclusive(min: any, max: any) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
        }

        let iterationNum = getRandomIntInclusive(0, 7);
        for (let i = 0; i < iterationNum; i++) {
          let temp = getRandomIntInclusive(0, 7);
          this.data[temp].value += getRandomIntInclusive(-20, 20) / 100;
          this.data[temp].value = this.data[temp].value < 0 ? 0 : this.data[temp].value;
          this.data[temp].value = this.data[temp].value > 100 ? 100 : this.data[temp].value;
        }
        return this.data;
      }
    ))
}
