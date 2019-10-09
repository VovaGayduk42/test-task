import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
  ];

  title = 'test-task';
}
