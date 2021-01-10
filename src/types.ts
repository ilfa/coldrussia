export interface CityInfo {
  id: number;
  name: String;
  temp: string;
}

export interface ColdestCityInfo extends CityInfo {
  index: number;
}

export type CityInfoList = CityInfo[];
export type ColdestCityInfoList = ColdestCityInfo[];
