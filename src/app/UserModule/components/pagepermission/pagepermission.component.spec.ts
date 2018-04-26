import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepermissionComponent } from './pagepermission.component';

describe('PagepermissionComponent', () => {
  let component: PagepermissionComponent;
  let fixture: ComponentFixture<PagepermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagepermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagepermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
