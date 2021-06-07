import { Component, OnInit } from '@angular/core';
import {nav} from './utils/navigation'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigations:any = []

  constructor() { }

  ngOnInit(): void {
    this.navigations = nav;
  }

}
