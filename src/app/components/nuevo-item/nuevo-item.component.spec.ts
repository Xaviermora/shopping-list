import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoItemComponent } from './nuevo-item.component';

describe('NuevoItemComponent', () => {
  let component: NuevoItemComponent;
  let fixture: ComponentFixture<NuevoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoItemComponent]
    });
    fixture = TestBed.createComponent(NuevoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
