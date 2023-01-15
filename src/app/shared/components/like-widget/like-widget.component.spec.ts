import { LikeWidgetModule } from './like-widget.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from './../../services/unique-id/unique-id.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {

    // fixture é a instancia do meu component. Atraves dele podemos acessar 
    // atributos do components e metodos
    let fixture: ComponentFixture<LikeWidgetComponent> = null;
    let component: LikeWidgetComponent = null;
    beforeEach(async () => {

        // responsavel por criar um modulo que vc quer testar
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
            // exports:

            // ele aguardaa a compilação do TS e do HTML.
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);

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

})

