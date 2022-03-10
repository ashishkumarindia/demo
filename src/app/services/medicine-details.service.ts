import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MedicineDetailsModel } from '../models/medicinedetails-model';

@Injectable({
  providedIn: 'root'
})
export class MedicineDetailsService {


  constructor(private http: HttpClient) { }
  
  get(id: number): Observable<MedicineDetailsModel> {
    return this.http.get<MedicineDetailsModel>(`${environment.apiUrl}/get/${id}`);
  }

  getAll(): Observable<MedicineDetailsModel[]> {
    return this.http.get<MedicineDetailsModel[]>(`${environment.apiUrl}/getall`);
  }
  
  create(data: MedicineDetailsModel): Observable<any> {
    return this.http.post(`${environment.apiUrl}/create`, data);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/${id}`, data);
  }

}
