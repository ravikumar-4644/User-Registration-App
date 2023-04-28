import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://68.178.166.216/api/API/BillToPartyMaster/';

  constructor(private http: HttpClient) { }
  public getData(rowId: number): Observable<any> {
    const url = `${this.apiUrl}GetData`;
    const body = { RowId: rowId };
    return this.http.post(url, body);
  }

  public saveData(data: any): Observable<any> {
    const url = `${this.apiUrl}SaveData`;
    const body = { ...data };
    return this.http.post(url, body);
  }
}
