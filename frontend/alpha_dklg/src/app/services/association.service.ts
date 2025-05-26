import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Association } from '../models/association.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private apiUrl = `${environment.apiUrl}/associations`;

  constructor(private http: HttpClient) { }

  getAllAssociations(): Observable<Association[]> {
    return this.http.get<Association[]>(this.apiUrl);
  }

  getAssociationById(id: number): Observable<Association> {
    return this.http.get<Association>(`${this.apiUrl}/${id}`);
  }

  createAssociation(association: Omit<Association, 'id'>): Observable<Association> {
    return this.http.post<Association>(this.apiUrl, association);
  }

  updateAssociation(id: number, association: Omit<Association, 'id'>): Observable<Association> {
    return this.http.put<Association>(`${this.apiUrl}/${id}`, association);
  }

  deleteAssociation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
} 