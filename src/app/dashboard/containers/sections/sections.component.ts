import {Component, HostListener, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
    animations: [slideInOutAnimation],
    host: { '[@slideInOutAnimation]': '' }
})
export class SectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
