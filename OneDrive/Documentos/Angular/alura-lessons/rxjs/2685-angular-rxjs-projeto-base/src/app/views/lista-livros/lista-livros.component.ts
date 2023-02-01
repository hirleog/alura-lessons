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

  // modo antigo do subscribe (RXJS V7)
  // buscarLivros() {
  //   this.livroService.bucar(this.campoBusca)
  //   .subscribe((retornoApi) => console.log('lalalal', retornoApi))
  // }

  // Novo metodo (RXJS V8)
  buscarLivros() {
    this.livroService.bucar(this.campoBusca)
    .subscribe({
      next: retornoApi => {
        console.log('lalalal', retornoApi)
      },
      error: erro => {
        // console.log('bebebe', erro)
        alert('Ocorreu um erro, Tente novamente')
    },

    })
  }
}



