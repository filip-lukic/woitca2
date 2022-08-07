import { Component, Renderer2 } from '@angular/core';
import { ChildrenOutletContexts, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations/slide-in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'Woitca';
  previousUrl: string = '';

  constructor(
    private router: Router,
    private renderer: Renderer2, 
    private contexts: ChildrenOutletContexts
  ) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });

    setTimeout(() => {
      this.renderer.addClass(document.querySelector('.loading'), 'loaded');
    }, 800);
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
