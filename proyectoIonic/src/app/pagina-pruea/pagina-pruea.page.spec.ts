import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaPrueaPage } from './pagina-pruea.page';

describe('PaginaPrueaPage', () => {
  let component: PaginaPrueaPage;
  let fixture: ComponentFixture<PaginaPrueaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrueaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
