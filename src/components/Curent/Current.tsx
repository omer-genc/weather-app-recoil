import { useRecoilValue } from 'recoil';
import { cityState, currentWeatherState } from '../../app/store';

function Current() {
  const current = useRecoilValue(currentWeatherState);
  const city = useRecoilValue(cityState);

  if (!current) return null;

  return (
    <div className="flex gap-14 md:gap-20 flex-col-reverse md:flex-row md:justify-center md:items-center bg-pink-300 p-10 rounded-lg shadow-lg">
      <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
        <h2 className="text-4xl font-bold">
          {Math.round(current.tempurature - 273)} °C
        </h2>
        <h2 className="text-gray-500">{city.name}</h2>
        <div className="text-center md:text-left">
          <p className="text-gray-500">
            Clouds: <strong className="text-black">{current?.clouds}</strong>
          </p>
          <p className="text-gray-500">
            Feels Like:{' '}
            <strong className="text-black">{current.feelsLike}</strong>
          </p>
          <p className="text-gray-500">
            Humidity:{' '}
            <strong className="text-black">{current.humidity} </strong>
          </p>
        </div>
      </div>
      <div className=''>
        <i className={`text-9xl ${current.iconCode}`} />
      </div>
    </div>
  );
}

export default Current;
