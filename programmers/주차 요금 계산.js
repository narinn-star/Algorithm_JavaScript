/**
 * Topic: 2022 KAKAO BLIND RECRUITMENT
 */
/**
 *
 * @param {number[]} fees
 * @param {string[]} records
 * @returns {string[]}
 */

function solution(fees, records) {
  const [basicTime, basicFee, unitTime, unitFee] = fees;

  const result = records.map((entry) => {
    const [time, carNum, contents] = entry.split(' ');
    return { time, carNum, contents };
  });
  const cars = new Map();

  const resTime = new Map();

  const calc = (a, b, n) => {
    const [entranceH, entranceM] = a.split(':');
    const [departureH, departureM] = b.split(':');

    const time = (departureH - entranceH) * 60 + (departureM - entranceM);

    if (!resTime.has(n)) resTime.set(n, time);
    else {
      resTime.set(n, resTime.get(n) + time);
    }
  };

  result.forEach((item) => {
    const { time, carNum, contents } = item;

    if (contents === 'OUT') {
      calc(cars.get(carNum), time, carNum);
      cars.delete(carNum);
    } else {
      if (cars.has(carNum)) {
        cars.set(cars.get(carNum), time);
      } else {
        cars.set(carNum, time);
      }
    }
  });

  if (cars.length !== 0) {
    cars.forEach((value, key) => {
      calc(value, '23:59', key);
    });
  }

  const res = new Map();

  resTime.forEach((value, key) => {
    if (value <= basicTime) {
      res.set(key, basicFee);
    } else {
      res.set(
        key,
        basicFee + Math.ceil((value - basicTime) / unitTime) * unitFee
      );
    }
  });

  const sortedValues = Array.from(res)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([, value]) => value);

  return sortedValues;
}
