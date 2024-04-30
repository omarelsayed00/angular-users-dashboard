import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component'; // Import the UserDetailsComponent
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  // Other routes...
  { path: '', component: UsersListComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
