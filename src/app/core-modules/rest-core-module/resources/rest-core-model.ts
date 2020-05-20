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
  sunset: number,
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
};

export type IpIfyDto = {
  ip: string;
};

export type IpApiDto = {
  ip: string,
  type: string,
  continent_code: string,
  continent_name: string,
  country_code: string,
  country_name: string,
  region_code: string,
  region_name: string,
  city: string,
  zip: string,
  latitude: number,
  longitude: number,
  location: IpApiLocationDto
};

export type IpApiLocationDto = {
  geoname_id: number,
  capital: string,
  languages: [],
  country_flag: string,
  country_flag_emoji: string,
  country_flag_emoji_unicode: string,
  calling_code: string,
  is_eu: boolean,
};



export type WeatherStackDto = {
  request: WeatherStackRequestDto,
  location: WeatherStackLocationDto,
  current: WeatherStackCurrentDto,

};

export type WeatherStackLocationDto = {
  name: string,
  country: string,
  region: string,
  lat: string,
  lon: string,
  timezone_id: string,
  localtime: string,
  localtime_epoch: number,
  utc_offset: string
};

export type WeatherStackCurrentDto = {
  observation_time: string,
  temperature: number,
  weather_code: number,
  weather_icons: string[],
  weather_descriptions: string[],
  wind_speed: number,
  wind_degree: number,
  wind_dir: string,
  pressure: number,
  precip: number,
  humidity: number,
  cloudcover: number,
  feelslike: number,
  uv_index: number,
  visibility: number,
  is_day: string,
};

export type WeatherStackRequestDto = {
  type: string,
  query: string,
  language: string,
  unit: string,
};

export type VkApiDto = {
  response: VkApiResponseDto
};

export type VkApiResponseDto = {
  count: number,
  items: VkApiResponseItem[]
};

export type VkApiResponseItem = {
  album_id: number,
  date: number,
  height: number,
  id: number,
  owner_id: number,
  photo_75: string,
  photo_130: string,
  photo_604: string,
  photo_807: string,
  photo_1280: string,
  post_id: number,
  text: string,
  width: number,
};

export type VkInfo = {
  photo: string,
  owner_id: string,
  name: string
};

