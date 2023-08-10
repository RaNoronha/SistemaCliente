import { ComponentFixture, TestBed } from '@angular/core/testing';

import { consultaClienteComponent } from './consulta-cliente.component';

describe('consultaClienteComponent', () => {
  let component: consultaClienteComponent;
  let fixture: ComponentFixture<consultaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [consultaClienteComponent]
    });
    fixture = TestBed.createComponent(consultaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
