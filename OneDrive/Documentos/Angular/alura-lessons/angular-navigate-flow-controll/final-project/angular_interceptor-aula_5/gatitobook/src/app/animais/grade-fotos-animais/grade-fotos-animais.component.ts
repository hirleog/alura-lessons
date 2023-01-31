import { style } from '@angular/animations';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimaisService } from './../animais.service';
import { Component, Input, OnInit } from '@angular/core';
import { Animais, Animal } from '../animais';

@Component({
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: ['./grade-fotos-animais.component.css'],
})
export class GradeFotosAnimaisComponent implements OnInit {
  @Input() animais!: Animais;
  animalId!: number;
  animal$!: Observable<Animal>;
  colorBtn: boolean = false;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router


  ) { }

  ngOnInit(): void { }

  // curtir() {
  //   this.animaisService.curtir(this.animalId).subscribe((curtida) => {
  //     if (curtida) {
  //       this.animal$ = this.animaisService.buscaPorID(this.animalId);
  //     }
  //   });
  //   this.colorBtn = !this.colorBtn
  // }

  // excluir() {
  //   this.animaisService.excluiAnimal(this.animalId).subscribe(
  //     () => {
  //       this.router.navigate(['/animais/']);
  //     },
  //     (error) => console.log(error)
  //   );
  // }
}
