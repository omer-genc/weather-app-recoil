export interface ICity {
  name: string;
  lat: number;
  lon: number;
}

export interface IDaily {
  tempurature: number;
  iconCode: string;
  day: TDay;
  description: string;
}

export type TDay = 'Sun' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat';

export interface ICurrent {
  tempurature: number;
  feelsLike: number;
  iconCode: string;
  humidity: number;
  description: string;
  clouds: number;
}

export interface IWeather {
  current: ICurrent;
  daily: IDaily[];
}
