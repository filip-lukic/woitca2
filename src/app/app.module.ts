import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreativeComponent } from './pages/creative/creative.component';
import { MotionComponent } from './pages/motion/motion.component';
import { CursorComponent } from './components/cursor/cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    CreativeComponent,
    MotionComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
