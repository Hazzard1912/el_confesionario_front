import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfesionesComponent } from './confesiones.component';

describe('ConfesionesComponent', () => {
  let component: ConfesionesComponent;
  let fixture: ComponentFixture<ConfesionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfesionesComponent]
    });
    fixture = TestBed.createComponent(ConfesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
