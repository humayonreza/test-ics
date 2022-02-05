import { Component, OnInit } from '@angular/core';
import { SetupService } from './../../services/setup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private setupService: SetupService) {}
  arrNav: any[] = [];
  activate_link(Ser: number) {
    for (let i = 0; i < this.arrNav.length; i++) {
      this.arrNav[i].Ser == Ser
        ? (this.arrNav[i].isActive = 1)
        : (this.arrNav[i].isActive = 0);
    }
  }
  ngOnInit(): void {
    this.arrNav = this.setupService.arrNav;
  }
}
