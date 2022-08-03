import { WeatherEntity } from '../../models/entites';
import { IWeather, TDay } from '../../models/models';
import { DAYS } from '../constants/days';
import { WI_ICONS } from '../constants/icon-codes';

export const mapWeatherFromEntity = (entity: WeatherEntity): IWeather => {
  return {
    current: {
      tempurature: entity.current.temp,
      feelsLike: Math.round(entity.current.feels_like - 273),
      iconCode: WI_ICONS[entity.current.weather[0].icon],
      humidity: entity.current.humidity,
      description: entity.current.weather[0].description,
      clouds: entity.current.clouds,
    },
    daily: entity.daily.map((day) => ({
      tempurature: Math.round(day.temp.day - 273),
      iconCode: WI_ICONS[day.weather[0].icon],
      day: DAYS[new Date(day.dt * 1000).getDay()] as TDay,
      description: day.weather[0].description,
    })),
  };
};
