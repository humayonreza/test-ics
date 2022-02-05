import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private setupService: SetupService) {}
  arrImg: any[] = [];
  initSetup(): void {
    this.arrImg = this.setupService.arrImg.filter((m) => m.ComponentId == 2);
    console.log(this.arrImg);
  }
  ngOnInit(): void {
    this.initSetup();
  }
}
