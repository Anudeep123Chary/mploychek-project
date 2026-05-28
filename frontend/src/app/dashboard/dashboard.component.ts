import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  userUsername = '';
  userRole = '';
  isLoading = true;   
  records: any[] = []; 

  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    
    const storedUser = localStorage.getItem('currentUser');
    
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.userUsername = user.username;
      this.userRole = user.role;
    } else {
      
      this.router.navigate(['/login']);
      return; 
    }

    const params = new HttpParams()
      .set('role', this.userRole)
      .set('delay', '2000'); 

    
    this.http.get<any[]>('http://localhost:3000/api/records', { params })
      .subscribe({
        next: (data) => {
          this.records = data; 
          this.isLoading = false; 
        },
        error: (err) => {
          console.error('Failed to pull records from operational backend:', err);
          this.isLoading = false; 
        }
      });
  }

  onLogout() {
    
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
