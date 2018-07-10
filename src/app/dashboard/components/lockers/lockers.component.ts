import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lockers',
  templateUrl: './lockers.component.html',
  styleUrls: ['./lockers.component.scss']
})
export class LockersComponent implements OnInit {

  @Input('lockers') lockers;

  constructor() { }

  ngOnInit() {
  }

}
