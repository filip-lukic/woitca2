import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
})
export class CursorComponent implements OnInit {
  @ViewChild('bigBall') bigBall: ElementRef | undefined;
  @ViewChild('smallBall') smallBall: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void { }

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e: MouseEvent) {
    if (this.bigBall) {
      gsap.to(this.bigBall.nativeElement, {
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15,
      });      
    }
    if (this.smallBall) {
      gsap.to(this.smallBall.nativeElement, {
        duration: 0.1,
        x: e.pageX - 5,
        y: e.pageY - 8,
      });      
    }
  }

}
