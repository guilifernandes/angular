import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRODUTOSHtmlComponent } from './produtos.html.component';

describe('PRODUTOSHtmlComponent', () => {
  let component: PRODUTOSHtmlComponent;
  let fixture: ComponentFixture<PRODUTOSHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRODUTOSHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRODUTOSHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
