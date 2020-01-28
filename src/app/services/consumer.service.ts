import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  constructor(private http: HttpClient) {}

  public getNames(): Observable<string[]> {
    const url = `http://localhost:3003/url`;
    return this.http.get<string[]>(url);
  }
}
