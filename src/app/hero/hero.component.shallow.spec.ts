import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { HeroComponent } from "./hero.component"

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    // Be careful with no_errors_schema because it can hide errors in your HTML.
    TestBed.configureTestingModule({
      declarations: [ HeroComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = { id: 1, name: 'AmazingMan', strength: 20 };

    expect(fixture.componentInstance.hero.name).toEqual('AmazingMan');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = { id: 1, name: 'AmazingMan', strength: 20 };
    fixture.detectChanges();

    // debug element has a few different properties than the nativeElement that just uses the DOM
    // same exact testing, just arriving by different way
    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('AmazingMan');

    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('AmazingMan');
  });
});
