import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';
import { Observable } from 'rxjs';
import { Resp } from '../models/resp';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly url: string = "http://localhost:5000/api/project"; 

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAll(): Observable<Resp<Project[]>> {
    return this._httpClient.get<Resp<Project[]>>(`${this.url}/get`);
  }

  get(): Observable<Resp<Project>> {
    return this._httpClient.get<Resp<Project>>(`${this.url}`);
  }

  create(project: Project): Observable<Resp<Project>> {
    return this._httpClient.post<Resp<Project>>(`${this.url}/create`, project);
  }
}
