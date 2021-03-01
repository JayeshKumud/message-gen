import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPortfolioComponent } from './get-portfolio.component';

describe('GetPortfolioComponent', () => {
  let component: GetPortfolioComponent;
  let fixture: ComponentFixture<GetPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
