import { LivroService } from './../../service/livro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  campoBusca: string = '';

  constructor(
    private livroService: LivroService,
  ) { }

  buscarLivros() {
    this.livroService.bucar(this.campoBusca)
    .subscribe((retornoApi) => console.log('lalalal', retornoApi))
  }
}



