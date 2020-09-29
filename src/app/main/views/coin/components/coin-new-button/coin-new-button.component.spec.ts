import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinNewButtonComponent } from './coin-new-button.component';

describe('CoinNewButtonComponent', () => {
  let component: CoinNewButtonComponent;
  let fixture: ComponentFixture<CoinNewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinNewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinNewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
