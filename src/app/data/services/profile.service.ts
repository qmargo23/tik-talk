import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
// baseApiUrl='https://icherniakov.ru/yt-course/'

  getTestAccounts():Observable<Object>{
    return this.http.get('https://icherniakov.ru/yt-course/account/test_accounts');
  }
}
