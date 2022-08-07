import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreativeComponent } from './pages/creative/creative.component';
import { MotionComponent } from './pages/motion/motion.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'creative' 
  },
  {
    path: 'creative',
    component: CreativeComponent,
    data: { animation: 'creative' },
  },
  {
    path: 'creative/:project',
    component: CreativeComponent,
    data: { animation: 'creative' },
  },
  {
    path: 'motion',
    component: MotionComponent,
    data: { animation: 'motion' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
