import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { About } from '../models/about.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAboutData(): Observable<{about: About}> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        const user = users[0];
        return {
          about: {
            id: user.id,
            fullName: user.name,
            title: user.title,
            location: 'France',
            profilePicture: environment.assets.profilePicture,
            introduction: user.bio,
            email: user.email,
            resume: user.cvUrl,
            socialLinks: {
              linkedin: environment.socialLinks.linkedin,
              github: environment.socialLinks.github
            }
          }
        };
      }),
      catchError(error => {
        console.error('Error fetching about data:', error);
        throw error;
      })
    );
  }
} 