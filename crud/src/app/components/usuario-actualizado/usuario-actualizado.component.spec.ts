import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioActualizadoComponent } from './usuario-actualizado.component';

describe('UsuarioActualizadoComponent', () => {
  let component: UsuarioActualizadoComponent;
  let fixture: ComponentFixture<UsuarioActualizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioActualizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioActualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
