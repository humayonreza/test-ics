import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor() {}

  slideConfigBanner = {
    slidesToShow: screen.width < 500 ? 1 : 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
  };
}
