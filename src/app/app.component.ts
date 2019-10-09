import {ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {DataService} from "./api/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: Indicator[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.dataAPI$.subscribe(
      (a) => {
        this.data = a;
      }
    )
  }

}
