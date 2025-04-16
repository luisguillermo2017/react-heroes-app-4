import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {
  const validPubliushers = ['Marvel Comics', 'DC Comics'];

  if (!validPubliushers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
