import { Component, OnInit } from '@angular/core';
import SwiperCore, { Parallax, SwiperOptions } from 'swiper';

SwiperCore.use([Parallax]);
@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  animations: [],
})
export class MotionComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    scrollbar: { draggable: true },
    parallax: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
