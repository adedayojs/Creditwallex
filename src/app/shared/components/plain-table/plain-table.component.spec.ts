import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainTableComponent } from './plain-table.component';

describe('PlainTableComponent', () => {
  let component: PlainTableComponent;
  let fixture: ComponentFixture<PlainTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
