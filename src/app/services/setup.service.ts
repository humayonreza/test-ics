import { Injectable } from '@angular/core';
export interface arrSlider {
  Ser: number;
  Txt: string;
  ImgUrl: string;
  ComponentId: number;
}
export interface arrNav {
  Ser: number;
  routerLink: string;
  routerName: string;
  isActive: number;
}
export interface arrImg {
  Ser: number;
  Txt: string;
  Url: string;
  ComponentId: number;
}
@Injectable({
  providedIn: 'root',
})
export class SetupService {
  private imgPath = 'http://localhost:8080/backendRESTAURANT/images/';
  constructor() {}

  arrImg: arrImg[] = [
    {
      Ser: 1,
      Txt: 'Austria, officially the Republic of Austria, is a landlocked country in the southern part of Central Europe, located on the Eastern Alps',
      Url: this.imgPath + 'banner/1.png',
      ComponentId: 2,
    },
    {
      Ser: 2,
      Txt: 'Austria, officially the Republic of Austria, is a landlocked country in the southern part of Central Europe, located on the Eastern Alps',
      Url: this.imgPath + 'banner/3.png',
      ComponentId: 2,
    },
    {
      Ser: 3,
      Txt: 'Austria, officially the Republic of Austria, is a landlocked country in the southern part of Central Europe, located on the Eastern Alps',
      Url: this.imgPath + 'banner/2.png',
      ComponentId: 2,
    },
    {
      Ser: 4,
      Txt: 'Select Type4',
      Url: this.imgPath + 'banner/4.png',
      ComponentId: 1,
    },
  ];

  arrSlider: arrSlider[] = [
    {
      Ser: 1,
      Txt: 'Austria, officially the Republic of Austria',
      ImgUrl: this.imgPath + 'banner/1.png',
      ComponentId: 1,
    },
    {
      Ser: 2,
      Txt: 'Select Type3',
      ImgUrl: this.imgPath + 'banner/3.png',
      ComponentId: 1,
    },
    {
      Ser: 3,
      Txt: 'Select Type2',
      ImgUrl: this.imgPath + 'banner/2.png',
      ComponentId: 1,
    },
    {
      Ser: 4,
      Txt: 'Select Type4',
      ImgUrl: this.imgPath + 'banner/4.png',
      ComponentId: 1,
    },
  ];

  arrNav: arrNav[] = [
    {
      Ser: 1,
      routerLink: '/about',
      routerName: 'About us',
      isActive: 0,
    },
    {
      Ser: 2,
      routerLink: '/services',
      routerName: 'Our Services',
      isActive: 0,
    },
    {
      Ser: 3,
      routerLink: '/contact',
      routerName: 'Contact us',
      isActive: 0,
    },
  ];
}
