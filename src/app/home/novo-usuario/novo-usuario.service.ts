import { environment } from './../../../environments/environment.prod';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){
    return this.httpClient.post(`${API}/user/signup`, novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string){
    return this.httpClient.get(`${API}/user/exists/${nomeUsuario}`);
  }
}
