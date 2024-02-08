import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTesttwoComponent } from './my-testtwo.component';

describe('MyTesttwoComponent', () => {
  let component: MyTesttwoComponent;
  let fixture: ComponentFixture<MyTesttwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTesttwoComponent]
    });
    fixture = TestBed.createComponent(MyTesttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
