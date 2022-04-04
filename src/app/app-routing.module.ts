import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EditComponent } from './components/edit/edit.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';

const routes: Routes = [
  {path:'',component: ToDosComponent},
  {path:'about',component: AboutComponent},
  {path:'edit',component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
