import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductReactiveFormComponent } from './new-product-reactive-form.component';

describe('NewProductReactiveFormComponent', () => {
  let component: NewProductReactiveFormComponent;
  let fixture: ComponentFixture<NewProductReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
