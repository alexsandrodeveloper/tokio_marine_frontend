import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTransferenciasComponent } from './listar-transferencias.component';

describe('ListarTransferenciasComponent', () => {
  let component: ListarTransferenciasComponent;
  let fixture: ComponentFixture<ListarTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTransferenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
