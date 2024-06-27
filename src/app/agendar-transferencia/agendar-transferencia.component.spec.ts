import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarTransferenciaComponent } from './agendar-transferencia.component';

describe('AgendarTransferenciaComponent', () => {
  let component: AgendarTransferenciaComponent;
  let fixture: ComponentFixture<AgendarTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendarTransferenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
