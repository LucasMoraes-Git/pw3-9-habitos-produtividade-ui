import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHabitos } from './lista-habitos';

describe('ListaHabitos', () => {
  let component: ListaHabitos;
  let fixture: ComponentFixture<ListaHabitos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHabitos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHabitos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
