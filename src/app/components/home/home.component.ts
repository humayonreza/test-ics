import { Component, OnInit } from '@angular/core';
import { SetupService } from './../../services/setup.service';
import { HelperService } from './../../services/helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  arrSlider: any[] = [];
  constructor(
    public helperService: HelperService,
    private setupService: SetupService
  ) {}
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // arrImg: any[] = [];
  initSetup(): void {
    this.arrSlider = this.setupService.arrSlider.filter(
      (m) => m.ComponentId == 1
    );
  }

  ngOnInit(): void {
    // console.log(this.images);
    this.initSetup();
  }
}
