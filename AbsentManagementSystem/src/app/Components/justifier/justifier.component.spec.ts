import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifierComponent } from './justifier.component';

describe('JustifierComponent', () => {
  let component: JustifierComponent;
  let fixture: ComponentFixture<JustifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustifierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
