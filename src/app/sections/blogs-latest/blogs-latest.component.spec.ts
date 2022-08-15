import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsLatestComponent } from './blogs-latest.component';

describe('BlogsLatestComponent', () => {
  let component: BlogsLatestComponent;
  let fixture: ComponentFixture<BlogsLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
