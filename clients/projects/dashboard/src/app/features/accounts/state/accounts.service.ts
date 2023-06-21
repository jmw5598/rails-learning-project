import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from './accounts.models';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private readonly _baseUrl: string = 'http://localhost:3000/accounts'
  constructor(
    private _http: HttpClient,
  ) { }

  public find(): Observable<Account[]> {
    return this._http.get<Account[]>(`${this._baseUrl}`);
  }

  public findOne(id: number): Observable<Account> {
    return this._http.get<Account>(`${this._baseUrl}/${id}`);
  }

  public create(account: Account): Observable<Account> {
    return this._http.post<Account>(`${this._baseUrl}`, account);
  }

  public update(id: number, account: Account): Observable<Account> {
    return this._http.put<Account>(`${this._baseUrl}/${id}`, account);
  }

  public delete(id: number): Observable<Account> {
    return this._http.delete<Account>(`${this._baseUrl}/${id}`);
  }
}
