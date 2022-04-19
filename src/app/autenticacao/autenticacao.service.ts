import { environment } from './../../environments/environment.prod';
import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(usuario: String, senha: String): Observable<HttpResponse<any>> {
    return this.httClient
      .post(
        `${API}/user/login`,
        {
          userName: usuario,
          password: senha,
        },
        {
          observe: 'response',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.usuarioService.salvarToken(authToken);
        })
      );
  }
}
