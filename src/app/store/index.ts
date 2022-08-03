import { atom, selector } from 'recoil';
import { ICity, ICurrent, IDaily, IWeather } from '../models/models';

const cityAtom = atom<ICity>({
  key: 'city-atom',
  default: {
    name: 'İSTANBUL',
    lat: 41.00527,
    lon: 28.97696,
  },
});

const cityState = selector<ICity>({
  key: 'city-state',
  get: ({ get }) => get(cityAtom),
});

const weatherAtom = atom<IWeather | null>({
  key: 'weather-atom',
  default: null,
});

const dailyState = selector<IDaily[] | null>({
  key: 'daily-state',
  get: ({ get }) => {
    const daily = get(weatherAtom)?.daily;

    return daily ? daily : null;
  },
});

const currentWeatherState = selector<ICurrent | null>({
  key: 'current',
  get: ({ get }) => {
    const current = get(weatherAtom)?.current;

    return current ? current : null;
  },
});

export { cityAtom, weatherAtom, dailyState, currentWeatherState, cityState };
