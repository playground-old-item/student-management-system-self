import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindallStudentComponent } from './findall-student.component';

describe('FindallStudentComponent', () => {
  let component: FindallStudentComponent;
  let fixture: ComponentFixture<FindallStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindallStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindallStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
