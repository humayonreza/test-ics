import { Component, OnInit } from '@angular/core';
import { SetupService } from './../../services/setup.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private setupService: SetupService) {}
  imgPath: string = '';
  ngOnInit(): void {
    
  }
}
