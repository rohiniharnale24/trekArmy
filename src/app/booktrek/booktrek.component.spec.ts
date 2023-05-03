import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktrekComponent } from './booktrek.component';

describe('BooktrekComponent', () => {
  let component: BooktrekComponent;
  let fixture: ComponentFixture<BooktrekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooktrekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktrekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
