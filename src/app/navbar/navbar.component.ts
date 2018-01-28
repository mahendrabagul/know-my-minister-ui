import { Component, OnInit } from '@angular/core';
import { NavBar } from './nav-bar';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: NavBar = new NavBar();
  title: string = "KnowMyMinister"
  constructor(private navbarService: NavbarService) {
    this.navbarService.getNavBar().subscribe((result) => {
      this.navbar = result;
    });
  }
  ngOnInit() {
  }
}
