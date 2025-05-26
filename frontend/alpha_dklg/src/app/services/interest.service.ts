import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interest } from '../models/interest.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  private apiUrl = `${environment.apiUrl}/interests`;

  constructor(private http: HttpClient) { }

  getAllInterests(): Observable<Interest[]> {
    return this.http.get<Interest[]>(this.apiUrl);
  }

  getInterestById(id: number): Observable<Interest> {
    return this.http.get<Interest>(`${this.apiUrl}/${id}`);
  }

  createInterest(interest: Omit<Interest, 'id'>): Observable<Interest> {
    return this.http.post<Interest>(this.apiUrl, interest);
  }

  updateInterest(id: number, interest: Omit<Interest, 'id'>): Observable<Interest> {
    return this.http.put<Interest>(`${this.apiUrl}/${id}`, interest);
  }

  deleteInterest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 