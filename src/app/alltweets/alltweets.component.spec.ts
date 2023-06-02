import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltweetsComponent } from './alltweets.component';

describe('AlltweetsComponent', () => {
  let component: AlltweetsComponent;
  let fixture: ComponentFixture<AlltweetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AlltweetsComponent]
    });
    fixture = TestBed.createComponent(AlltweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
