import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMoodPage } from './add-mood.page';

describe('AddMoodPage', () => {
  let component: AddMoodPage;
  let fixture: ComponentFixture<AddMoodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
