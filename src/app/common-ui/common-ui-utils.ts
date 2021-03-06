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
  pressureUnit: 'гПа',
  speed: 'Скорость ветра ',
  speedUnit: 'м/с',
  deg: 'Направление ветра',
  degrees: '°',
  percent: '%'
};

export const icons = {
  clouds: 'https://img.icons8.com/color/96/000000/cloud.png',
  sunny: 'https://img.icons8.com/color/96/000000/summer.png',
  rainy: 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  rain: 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  snow: 'https://img.icons8.com/color/96/000000/snow.png',
  clear: 'https://img.icons8.com/color/96/000000/summer.png',
  thunderstorm: 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  overcast: 'https://img.icons8.com/color/96/000000/cloud.png',
  'light snow': 'https://img.icons8.com/color/96/000000/snow.png',
  'light rain': 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  'moderate rain': 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  'light intensity shower rain': 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  'light rain shower, rain shower': 'https://img.icons8.com/color/96/000000/heavy-rain.png',
  'scattered clouds': 'https://img.icons8.com/color/96/000000/partly-cloudy-day.png',
  'broken clouds': 'https://img.icons8.com/color/96/000000/partly-cloudy-day.png',
  'overcast clouds': 'https://img.icons8.com/color/96/000000/partly-cloudy-day.png',
  'few clouds': 'https://img.icons8.com/color/96/000000/partly-cloudy-day.png',
  'partly cloudy': 'https://img.icons8.com/color/96/000000/partly-cloudy-day.png'
};

export enum services {
  openWeather = 'openweather.com',
  weatherStack = 'weatherstack.com',
}
