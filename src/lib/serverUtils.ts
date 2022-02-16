import { promises as fs } from 'fs';
import { ColdestCityInfo, ColdestCityInfoList } from '$lib/types';

async function getFullCitiesList() {
  const rawdata = await fs.readFile('./weather_data/coldestCities.json');
  return JSON.parse(rawdata.toString()) as ColdestCityInfoList;
}

export async function getColdest(needColdest: boolean) {
  const fullCitiesList = await getFullCitiesList();
  if (needColdest) {
    const result: ColdestCityInfoList = [];
    for (let i = 0; i < 10; i++) {
      const city: ColdestCityInfo = {
        ...fullCitiesList[i],
        index: i + 1
      };
      result.push(city);
    }
    return result;
  }

  function getRandId(max: number, blackList: number[]): number {
    const rnd = Math.floor(Math.random() * max);
    if (inArray(blackList, rnd)) {
      return getRandId(max, blackList);
    } else {
      return rnd;
    }
  }

  function inArray<T>(list: T[], val: T): boolean {
    for (const key in list) {
      if (val === list[key]) {
        return true;
      }
    }
    return false;
  }

  let ids = [];
  const max = fullCitiesList.length;

  for (let i = 0; i < 10; i++) {
    const id = getRandId(max, ids);
    ids.push(Number(id));
  }

  ids = ids.sort(function (a1, a2) {
    return a1 - a2;
  });

  const cityList: ColdestCityInfoList = [];

  for (let i = 0; i < 10; i++) {
    const city: ColdestCityInfo = {
      ...fullCitiesList[ids[i]],
      index: i + 1
    };
    cityList.push(city);
  }

  return cityList;
}
