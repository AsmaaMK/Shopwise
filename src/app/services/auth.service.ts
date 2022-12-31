import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

const API_URL = environment.apiURL;
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn!: BehaviorSubject<boolean>;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {
    this.isLoggedIn = new BehaviorSubject(this.storageService.getStorageValue(USER_KEY));
  }

  login(username: string, password: string) {
    this.http
      .post(`${API_URL}/auth/login`, {
        username,
        password,
      })
      .subscribe((res) => {
        this.storageService.setStorageValue(USER_KEY, res);
        this.isLoggedIn.next(true);
      });
  }

  logout() {
    this.storageService.removeFromStorage(USER_KEY);
    this.isLoggedIn.next(false);
  }
}
