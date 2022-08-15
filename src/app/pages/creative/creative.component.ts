import { Component, OnInit } from '@angular/core';
import SwiperCore, { Parallax, SwiperOptions } from 'swiper';

SwiperCore.use([Parallax]);
@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  animations: [],
})
export class CreativeComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    scrollbar: { draggable: true },
    parallax: true,
  };

  constructor() { }

  ngOnInit(): void {
    
  }

}
