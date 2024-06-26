import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountPagePage } from './account-page.page';

describe('AccountPagePage', () => {
  let component: AccountPagePage;
  let fixture: ComponentFixture<AccountPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
