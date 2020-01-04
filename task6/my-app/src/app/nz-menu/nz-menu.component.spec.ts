import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzMenuComponent } from './nz-menu.component';

describe('NzMenuComponent', () => {
  let component: NzMenuComponent;
  let fixture: ComponentFixture<NzMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
