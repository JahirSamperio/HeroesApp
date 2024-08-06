import {heroes} from '../data/heores'

export const getHeroesByPublisher = (publisher) => {
    const valirPublishers = ['DC Comics', 'Marvel Comics'];
    if(!valirPublishers.includes(publisher)) {
        throw new Error (`${publisher} is not a valid publisher`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
}