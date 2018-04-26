import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericapiComponent } from './genericapi.component';

describe('GenericapiComponent', () => {
  let component: GenericapiComponent;
  let fixture: ComponentFixture<GenericapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
