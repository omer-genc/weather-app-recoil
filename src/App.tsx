import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import agent from './app/api/agent';
import { cityState, weatherAtom } from './app/store';

import Daily from './components/Daily';
import Current from './components/Curent';
import SelectCity from './components/SelectCity';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const city = useRecoilValue(cityState);
  const [, setWeather] = useRecoilState(weatherAtom);

  useEffect(() => {
    agent.getByCity(city).then((res) => {
      setWeather(res);
    });
  }, [city]);

  return (
    <div className="bg-purple-300 min-h-screen">
      <div className="container mx-auto space-y-10 min-h-screen  flex flex-col justify-center items-center">
        <Header />
        <SelectCity />
        <Current />
        <Daily />
        <Footer />
      </div>
    </div>
  );
}

export default App;
