import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  faHouse,
  faChevronRight,
  faChevronLeft,
  faDashboard,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  faHouse = faHouse;
  faDashboard = faDashboard;
  faUser = faUser;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  isOpen = true;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.sidenav.toggle();
    this.isOpen = !this.isOpen;
  }
}
