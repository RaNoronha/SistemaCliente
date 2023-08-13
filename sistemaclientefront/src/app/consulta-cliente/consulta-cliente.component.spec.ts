import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaClienteComponent } from './consulta-cliente.component';

describe('ConsultaClienteComponent', () => {
  let component: ConsultaClienteComponent;
  let fixture: ComponentFixture<ConsultaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaClienteComponent]
    });
    fixture = TestBed.createComponent(ConsultaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
