import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['id']; // Get user ID from route parameters
      if (userId) {
        this.getUserDetails(userId);
      }
    });
  }

  getUserDetails(userId: number): void {
    this.userService.getUserDetails(userId).subscribe(
      (response: any) => {
        this.user = response.data;
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  navigateBack(): void {
    this.router.navigate(['/']); // Navigate back to the main user list
  }
}
