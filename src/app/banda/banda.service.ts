import { Injectable } from '@angular/core';
import { Banda } from './banda';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BandaService {

private apiUrl = environment.baseUrl + 'rockbands.json';

constructor(private http: HttpClient) { }
getBandas():Observable<Banda[]>{

  return this.http.get<Banda[]>(this.apiUrl);
}
}





