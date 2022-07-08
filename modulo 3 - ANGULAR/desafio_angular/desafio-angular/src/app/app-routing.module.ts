import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleFormComponent } from './pages/people-form/people-form.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'form', component: PeopleFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
