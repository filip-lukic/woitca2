import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Scrollbar, Mousewheel, FreeMode, Lazy } from 'swiper';

SwiperCore.use([Scrollbar, Mousewheel, FreeMode, Lazy]);
@Component({
  selector: 'app-motion',
  templateUrl: './motion.component.html',
  animations: [],
})
export class MotionComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 3,
    edgeSwipeDetection: 'prevent',
    slideVisibleClass: 'project-slide-visible',
    resistanceRatio: 0.5,
  
    preloadImages: false,
    lazy: true,
  
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  
    freeMode: {
      enabled: true,
    },
  
    mousewheel: {
      invert: true,
      forceToAxis: true,
      sensitivity: 0.4,
    },
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  play(event: MouseEvent) {
    const video = event.target as HTMLVideoElement;
    if (video) {
      video.play();
    }
  }

  stop(event: MouseEvent) {
    const video = event.target as HTMLVideoElement;
    if (video) {
      video.load();
    }
  }

}

// on: {
//   init: () => {
//     const slides = document.querySelectorAll('.swiper-slide');
//     slides.forEach((slide) => {
//       slide.addEventListener('mouseenter', () => {
//         const video = slide.querySelector('video');
//         video.play();
//       });
//       slide.addEventListener('mouseleave', () => {
//         const video = slide.querySelector('video');
//         video.load();
//       });
//       slide.addEventListener('click', () => {
//         const videoWrapper = slide.querySelector('.project-video-wrapper');
//         const rectangle = videoWrapper.getBoundingClientRect();

//         const projectDetails = document.querySelector('main .project-details');
//         const projectContent = document.querySelector('main .project-details .project-content');
//         const newVideoWrapper = projectDetails.insertBefore(videoWrapper, projectContent);

//         newVideoWrapper.style.position = 'fixed';
//         newVideoWrapper.style.zIndex = 999;
//         newVideoWrapper.style.top = rectangle.top + 'px';
//         newVideoWrapper.style.left = rectangle.left + 'px';
//         newVideoWrapper.style.width = rectangle.width + 'px';
//         newVideoWrapper.style.height = rectangle.height + 'px';

//         gsap
//           .to(newVideoWrapper, {
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',

//             duration: 0.7,
//             ease: Cubic.easeInOut,
//           })
//           .then(() => {
//             document.querySelector('.project-list').style.display = 'none';
//             projectContent.classList.add('show');
//             newVideoWrapper.style.position = 'relative';
//           });
//       });
//     });
//   },
// },