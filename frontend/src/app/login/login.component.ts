import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  
  username = '';
  password = '';
  selectedRole = 'General User'; 
  
  errorMessage = '';
  isLoading = false;

  
  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.isLoading = true;
    this.errorMessage = '';

    const loginData = {
      username: this.username,
      password: this.password,
      role: this.selectedRole
    };

    
    this.http.post<any>('http://localhost:3000/api/login', loginData)
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            
            localStorage.setItem('currentUser', JSON.stringify(response.user));
            
            this.router.navigate(['/dashboard']);
          }
        },
        error: (err) => {
          this.isLoading = false;
         
          this.errorMessage = err.error?.message || 'Something went wrong. Please try again.';
        }
      });
  }
}
