export type RequestParams = {
  location: string,
  key: string
};

export type OpenWeatherDto = {
  coord: OpenWeatherCoordsDto,
  weather: OpenWeatherDescriptionDto,
  base: string,
  main: OpenWeatherMainDto,
  visibility: number,
  wind: OpenWeatherWindDto,
  clouds: OpenWeatherCloudsDto,
  dt: number,
  sys: OpenWeatherSysDto,
  timezone: number,
  id: number,
  name: string,
  cod: number,
};

export type OpenWeatherCoordsDto = {
  lon: number,
  lat: number
};

export type OpenWeatherDescriptionDto = [
  {
    id: number,
    main: string,
    description: string,
    icon: string
  }
];

export type OpenWeatherMainDto = {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number
};

export type OpenWeatherWindDto = {
  speed: number,
  deg: number
};

export type OpenWeatherSysDto = {
  type: number,
  id: number,
  country: OpenWeatherSysCountryDto,
  sunrise: number,
  sunset: number
};

export type OpenWeatherCloudsDto = {
  all: number
};

export enum OpenWeatherSysCountryDto {
  By = 'BY'
}
