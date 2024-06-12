import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Credential } from "../interfaces/credential";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor() {}
    httpClient = inject(HttpClient);

    API_URL = 'http://localhost:3000/inicio-sesion';

    login(credential: Credential) {
        return this.httpClient.post(this.API_URL, credential);
      }

      validateToken(token: string) {
        return this.httpClient.get(`${this.API_URL}/${token}`);
    }
}