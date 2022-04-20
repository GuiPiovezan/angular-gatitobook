import { Observable, switchMap } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    // this.usuarioService.retornarUsuario().subscribe((usuario) => {
    //   const userName = usuario.name ?? '';
    //   this.animaisService.listaDoUsuario(userName).subscribe((animais) => {
    //     this.animais = animais;
    //   });
    // });  // subscribe hell (não é muito utilizado uma cadeia de subscribes)

    this.animais$ = this.usuarioService.retornarUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );
  }
}
