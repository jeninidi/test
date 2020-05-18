import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
import { OfficialTaskComponent } from './components/official-task/official-task/official-task.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'test',
    component: OfficialTaskComponent
  },
  { path: '',   
    redirectTo: '/test',
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
