import { Injectable } from '@angular/core';
import axios from 'axios';

const API_URL = 'https://chamber.dcas.lk/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  tokenKey = 'authToken';

  async login(data: any) {
    const response = await axios.post(API_URL + '/auth/login', data);
    if (response.data) {
      localStorage.setItem(this.tokenKey, response.data.token);
      return response.data;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
