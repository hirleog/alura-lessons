import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

    // fixture é a instancia do meu component. Atraves dele podemos acessar 
    // atributos do components e metodos
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    beforeEach(async () => {

        // responsavel por criar um modulo que vc quer testar
        await TestBed.configureTestingModule({
            declarations: [LikeWidgetComponent],
            providers: [UniqueIdService],
            imports: [FontAwesomeModule]
            // exports:

            // ele aguardaa a compilação do TS e do HTML.
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);

    });

    it(`Should create component`, () => {
        const instance = fixture.componentInstance;

        expect(instance).toBeTruthy()
    })

})

