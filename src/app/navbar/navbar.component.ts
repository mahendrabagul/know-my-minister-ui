import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { NavBar } from '../nav-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbar: NavBar = new NavBar();
  constructor(private navbarService: NavbarService) {
    this.navbarService.getNavBar().subscribe((result) => {
      this.navbar = result;
    });
  }

  ngOnInit() {
  }

}
