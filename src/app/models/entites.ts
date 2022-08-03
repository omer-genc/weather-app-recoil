import { WI_ICONS } from "../shared/constants/icon-codes";

export interface WeatherEntity {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: 10800;
  current: CurrentEntity;
  minutely: MinutelyEntity[];
  daily: DailyEntity[];
}

export interface MinutelyEntity {
  dt: number;
  precipitation: number;
}

export interface DailyEntity {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: keyof typeof WI_ICONS;
  }[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface CurrentEntity {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: 310.39;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: keyof typeof WI_ICONS;
  }[];
}
