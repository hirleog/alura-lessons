import { LikeWidgetModule } from './like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

    // fixture cria meu component e importa o modulo dele.. Atraves dele podemos acessar 
    // atributos do components e metodos
    let fixture: ComponentFixture<LikeWidgetComponent> = null;

    // variavel que vai usar o 'fixture' para criar uma instancia do component.
    // Atraves dele podemos acessar atributos do components e metodos
    let component: LikeWidgetComponent = null;

    // responsavel por criar um modulo que vc quer testar
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        // criando component e com seu modulo ja importado
        fixture = TestBed.createComponent(LikeWidgetComponent);

        // instanciando todas funções do meu component atraves do fixture
        component = fixture.componentInstance;
    });


    it(`Should create component`, () => {
        expect(component).toBeTruthy()
    })

    it('should auto generate ID when doesnt have property', () => {
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    });

    it('should auto generate ID input is present', () => {
        const someId = 'someId';
        component.id = someId
        fixture.detectChanges();
        expect(component.id).toBe(someId);
    })
    // it(`#${LikeWidgetComponent.prototype.like.name}
    //     should trigger emission when called`, done => {

    //     fixture.detectChanges();
    //     component.liked.subscribe(() => {
    //         expect(true).toBeTrue();
    //         done();
    //     })
    //     component.like();
    // })
    it(`#${LikeWidgetComponent.prototype.like.name}
        should trigger emission when called`, () => {

        // é necessario passar um objeto para o 'SpyOn'
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    })
})

