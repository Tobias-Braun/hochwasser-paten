import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateGroupPageComponent } from './pate-group-page.component';

describe('PateGroupPageComponent', () => {
  let component: PateGroupPageComponent;
  let fixture: ComponentFixture<PateGroupPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PateGroupPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PateGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
