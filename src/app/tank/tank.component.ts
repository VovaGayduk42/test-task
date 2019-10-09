import {Component, DoCheck, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {evaluateTsHelperInline} from "@angular/compiler-cli/src/ngtsc/partial_evaluator/src/ts_helpers";

@Component({
  selector: 'app-tank',
  templateUrl: './Silo towers.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit, DoCheck {
  @Input() data: Indicator;


  @ViewChild("1188", {static: true})
  rect: ElementRef;

  @ViewChild("828", {static: true})
  line: ElementRef;

  setpoint = {
    height: 350,
    y: 250,
    color: '#21B249'
  };
  value;

  constructor() {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.rect) {
      this.value = Math.floor(this.data.value);
      this.setpoint.height = 350 * this.data.value / 100;
      this.setpoint.y = 250 + this.setpoint.height;
      this.setpoint.color = this.data.value > this.data.minValue && this.data.value < this.data.maxValue ? "#21B249" : "#b22220";

      this.line.nativeElement.style = `stroke: ${this.setpoint.color}`;
      this.rect.nativeElement.style = `fill: ${this.setpoint.color}`;
      this.rect.nativeElement.setAttribute('height', `${this.setpoint.height}`);
      this.rect.nativeElement.setAttribute('y', `${350 - this.setpoint.height + 250}`);
      this.rect.nativeElement.setAttribute('height', `${this.setpoint.height}`);
    }
  }
}
