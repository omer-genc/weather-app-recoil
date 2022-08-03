import { useRecoilState } from 'recoil';

import { cityAtom } from '../../app/store';

import DropDown from '../../lib/DropDown';

import CITIES from '../../app/shared/constants/cities';

function SelectCity() {
  const [city, setCity] = useRecoilState(cityAtom);

  return (
    <DropDown
      data={CITIES.map((item) => ({
        key: item.name,
        value: item.name,
        mainData: item,
      }))}
      onSelect={(data) => setCity(data)}
      defaultValue={{
        key: city.name,
        value: city.name,
        mainData: city,
      }}
    />
  );
}

export default SelectCity;
