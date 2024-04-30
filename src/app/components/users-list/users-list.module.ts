import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list.component';
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  declarations: [
    UsersListComponent,
    LoadingComponent,
    // Other components, directives, pipes...
  ],
  exports: [
    UsersListComponent,
    // Other components, directives, pipes...
  ],
  // Other module metadata...
})
export class UsersListModule {}
