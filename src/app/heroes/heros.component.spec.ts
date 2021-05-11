import { HeroSearchComponent } from "../hero-search/hero-search.component"
import { HeroesComponent } from "./heroes.component"

describe('HerosComponent', () => {
  let component: HeroesComponent;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      {id:1, name: 'SpiderMan', strength: 8},
      {id:2, name: 'Batman', strength: 5},
      {id:3, name: 'Wolverine', strength: 12}
    ];

    component = new HeroesComponent();
  })
})
