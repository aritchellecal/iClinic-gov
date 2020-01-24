import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import * as ModelInterface from '../models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EnqueueService {

  constructor(private http: HttpClient) { }

  getTodaysQue(): Observable<ModelInterface.Enqueue[]> {
    return this.http.get<ModelInterface.Enqueue[]>('api/queue');
  }

  addToQue(data) {
    return this.http.post<ModelInterface.Enqueue[]>('api/queue', data);
  }
}
