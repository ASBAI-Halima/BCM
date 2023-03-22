import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Custmer } from '../models/custmer.model';
import { map, Observable } from 'rxjs';
import { CustmerForm } from '../models/custmer-form.model';

const API_URL = 'http://localhost:3000/customers';

@Injectable({
  providedIn: 'root'
})
export class CustmerService {

  constructor(private http: HttpClient) { }
  getCustmers(): Observable<Custmer[]>{
    console.log('get custmers');
    return this.http.get<Custmer[]>(API_URL);
  }
  getAmounts(){
    console.log('get amount');
    const params= { fields : 'amount'}
    return this.http.get<any[]>(API_URL,{params});
  }
  deleteCustmer(custmer:Custmer): Observable<Custmer> {
  return this.http.delete<Custmer>(`${API_URL}/${custmer.id}`)
  }
  addCustmer(custmerForm:CustmerForm): Observable<Custmer> {
      return this.http.post<Custmer>(`${API_URL}`,custmerForm)
  }
  updateCustmer(custmer: Custmer): Observable<any> {
    const url = `${API_URL}/${custmer.id}`;
    return this.http.put(url,custmer);
  }
  getCustmerById(id: any): Observable<Custmer>{
    return this.http.get<Custmer>(`${API_URL}/${id}`);
  }
  search(name: string): Observable<Custmer[]>{
    return this.http.get<Custmer[]>(`${API_URL}?q=${name}`);
  }
  
}
