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
  pressure: number,
  humidity: number
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
  By = 'BY',
  Ru = 'RU'
}

export type IpWhoIsDto = {
  ip: string,
  success: boolean,
  type: string,
  continent: string,
  continent_code: string,
  country: string,
  country_code: string,
  country_flag: string,
  country_capital: string,
  country_phone: string,
  country_neighbours: string,
  region: string,
  city: string,
  latitude: string,
  longitude: string,
  asn: string,
  org: string,
  isp: string,
  timezone: string,
  timezone_name: string,
  timezone_dstOffset: string,
  timezone_gmtOffset: string,
  timezone_gmt: string,
  currency: string,
  currency_code: string,
  currency_symbol: string,
  currency_rates: string,
  currency_plural: string,
  completed_requests: number
}
