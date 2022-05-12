import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorPaisComponent } from './actor-pais.component';

describe('ActorPaisComponent', () => {
  let component: ActorPaisComponent;
  let fixture: ComponentFixture<ActorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
