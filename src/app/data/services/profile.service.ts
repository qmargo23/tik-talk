import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  http = inject(HttpClient);
  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  // constructor(public http: HttpClient) {}

  getTestAccounts(): Observable<Profile[]> {
    return this.http.get<Profile[]>(
      `${this.baseApiUrl}account/test_accounts`
    );
  }
}