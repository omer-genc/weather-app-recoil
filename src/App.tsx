import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import agent from './app/api/agent';
import { cityState, weatherAtom } from './app/store';

import Daily from './components/Daily';
import Current from './components/Curent';
import SelectCity from './components/SelectCity';
import Header from './components/Header';

function App() {
  const city = useRecoilValue(cityState);
  const [, setWeather] = useRecoilState(weatherAtom);

  useEffect(() => {
    agent.getByCity(city).then((res) => {
      setWeather(res);
    });
  }, [city]);

  // className="text-7xl text-slate-500 font-mono uppercase bg-rose-300 bg-opacity-50 px-10 py-4 rounded-lg shadow-lg"
  return (
    <div className="bg-purple-300 min-h-screen">
      <div className="container mx-auto space-y-10 min-h-screen  flex flex-col justify-center items-center">
        <Header />
        <SelectCity />
        <Current />
        <Daily />
        <div className="flex flex-col justify-center items-center bg-emerald-300 font-bold px-10 py-5 rounded-lg shadow-lg">
          <span>Created with care by: Ömer Genç</span>
          <a
            href="https://www.linkedin.com/in/omer-genc/"
            className="text-gray-500"
            target="_blank"
          >
            Linkedin: omer-genc
          </a>
          <a
            href="https://www.github.com/omer-genc/"
            className="text-gray-500"
            target="_blank"
          >
            Github: omer-genc
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
