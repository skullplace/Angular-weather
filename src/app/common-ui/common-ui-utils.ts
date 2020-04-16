export function getLabelDayByNumber(index: number): string {
  return {
    0: 'ВС',
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ',
  }[index];
}

export const addition = {
  date: 'Дата: ',
  day: 'День недели',
  humidity: 'Влажность ',
  temp: 'Температура ',
  feels_like: 'Ощущается как ',
  celsius: '℃',
  pressure: 'Давление',
  pressureUnit: 'мм. рт. ст.',
  speed: 'Скорость ветра ',
  speedUnit: 'м/с',
  deg: 'Направление ветра',
  degrees: '°',
  percent: '%'
};
