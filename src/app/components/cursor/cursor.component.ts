import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
})
export class CursorComponent implements OnInit {
  @ViewChild('bigBall') bigBall: ElementRef | undefined;
  @ViewChild('smallBall') smallBall: ElementRef | undefined;
  element: HTMLElement | null = null;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: MouseEvent) {
    if (this.bigBall) {
      gsap.to(this.bigBall.nativeElement, {
        duration: 0.5,
        x: e.pageX - 15,
        y: e.pageY - 15,
      });      
    }
    if (this.smallBall) {
      gsap.to(this.smallBall.nativeElement, {
        duration: 0.2,
        x: e.pageX - 5,
        y: e.pageY - 8,
      });      
    }

    // if (e.target.classList)
    if (this.element !== e.target) {
      this.element = e.target as HTMLElement;
      if (this.element.tagName === 'A') {
        this.onMouseHover();
      } else {
        this.onMouseHoverOut();
      }
    }
    

  }

  onMouseHover() {
    if (this.bigBall) {
      gsap.to(this.bigBall.nativeElement, {
        duration: 0.2,
        scale: 3,
      });
    }
    if (this.smallBall) {
      gsap.to(this.smallBall.nativeElement, {
        duration: 0.2,
        scale: 0,
      });
    }
  }

  onMouseHoverOut() {
    if (this.bigBall) {
      gsap.to(this.bigBall.nativeElement, {
        duration: 0.2,
        scale: 1,
      });
    }
    if (this.smallBall) {
      gsap.to(this.smallBall.nativeElement, {
        duration: 0.2,
        scale: 1,
      });
    }
  }

}
