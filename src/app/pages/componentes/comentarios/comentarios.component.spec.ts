import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosComponent } from './comentarios.component';

describe('ComentariosComponent', () => {
  let component: ComentariosComponent;
  let fixture: ComponentFixture<ComentariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComentariosComponent]
    });
    fixture = TestBed.createComponent(ComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
