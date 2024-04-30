import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  users: User[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  filteredUsers: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers(this.currentPage);
  }

  getUsers(page: number): void {
    this.userService.getUsers(page).subscribe(
      (response: any) => {
        this.users = response.data;
        this.totalPages = response.total_pages;
        this.filteredUsers = this.users; // Initialize filteredUsers with all users initially
      },
      (error: any) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  navigateToUserDetails(userId: number): void {
    console.log(userId);
    this.router.navigate(['/user', userId]);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.getUsers(page);
    }
  }

  getPages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  searchById(id: string): void {
    console.log('Search ID:', id);
    if (!id) {
      this.filteredUsers = this.users; // If search input is empty, reset filteredUsers to all users
      return;
    }
    const userId = parseInt(id, 10);
    this.filteredUsers = this.users.filter((user) => user.id === userId);
  }
}
