import { of } from "rxjs";
import { HeroSearchComponent } from "../hero-search/hero-search.component"
import { HeroesComponent } from "./heroes.component"

describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id:1, name: 'SpiderMan', strength: 8 },
      { id:2, name: 'Batman', strength: 5 },
      { id:3, name: 'Wolverine', strength: 12 }
    ];

    mockHeroService = jasmine.createSpyObj(['getHeros', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  })

  describe('add', () => {
    it('should add a hero to the heroes list', () => {
      mockHeroService.addHero.and.returnValue(of(true));

      component.heroes = HEROES;

      component.add('Hulk');

      expect(component.heroes.length).toBe(4);
    });

    it(`should call addHero with { name: 'Hulk', strength: 11 }`, () => {
      mockHeroService.addHero.and.returnValue(of(true));

      component.heroes = HEROES;

      component.add('Hulk');

      expect(mockHeroService.addHero).toHaveBeenCalledWith({ name: 'Hulk', strength: 11 });
    })
  })

  describe('delete', () => {
    it('should remove the indicated hero form the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero with HEROES[2]', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    })
  });
});
