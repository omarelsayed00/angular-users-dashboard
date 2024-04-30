import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [
    UsersListComponent,
    // Other components, directives, pipes...
  ],
  exports: [
    UsersListComponent,
    // Other components, directives, pipes...
  ],
  // Other module metadata...
})
export class UsersListModule {}
