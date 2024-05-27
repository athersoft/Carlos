import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertPagePage } from './alert-page.page';

describe('AlertPagePage', () => {
  let component: AlertPagePage;
  let fixture: ComponentFixture<AlertPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
