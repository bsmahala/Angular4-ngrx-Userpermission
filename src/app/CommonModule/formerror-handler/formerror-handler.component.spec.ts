import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormerrorHandlerComponent } from './formerror-handler.component';

describe('FormerrorHandlerComponent', () => {
  let component: FormerrorHandlerComponent;
  let fixture: ComponentFixture<FormerrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormerrorHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormerrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
