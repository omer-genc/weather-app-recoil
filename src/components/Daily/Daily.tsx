import { useRecoilValue } from 'recoil';

import { dailyState } from '../../app/store';

function Daily() {
  const daily = useRecoilValue(dailyState);

  const colurs = [
    'bg-red-300',
    'bg-orange-300',
    'bg-yellow-300',
    'bg-green-300',
    "bg-teal-300",
    'bg-blue-300',
    'bg-indigo-300',
    "bg-violet-300",
  ];

  return (
    <div className="container grid grid-cols-8 gap-4">
      {daily?.map((item, index) => (
        <div
          className={`col-span-4 md:col-span-2 lg:col-span-1 flex flex-col gap-4  justify-center items-center py-3 rounded-lg shadow-lg ${colurs[index]}`}
          key={index}
        >
          <p className="small">
            <strong>{item.tempurature}°C</strong>
          </p>
          <i className={`text-2xl wi ${item.iconCode}`} />
          <strong>{item.day}</strong>
        </div>
      ))}
    </div>
  );
}

export default Daily;
