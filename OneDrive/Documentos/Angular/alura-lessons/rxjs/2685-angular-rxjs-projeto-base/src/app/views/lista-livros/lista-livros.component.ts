import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca: string = '';
  subscription: Subscription;

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
    this.subscription = this.livroService.bucar(this.campoBusca)
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}



