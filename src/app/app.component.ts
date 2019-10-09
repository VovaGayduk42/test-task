import { Component } from '@angular/core';

interface Indicator {
   id: string;
   title: string;
   value: number;
   minValue: number;
   maxValue: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './Silo towers.svg',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-task';
}
