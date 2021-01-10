import coldest from './../weather_data/coldestCities.json';
import { ColdestCityInfoList, ColdestCityInfo } from '@/types';

export const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");

export function getCounterUrl(): string {
  if (!isBrowser()) {
    return '';
  }
  return "//counter.yadro.ru/hit?t26.1;r" + escape(document.referrer)+((typeof(screen)==="undefined")?"":
    ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
    screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
    ";"+Math.random();
}

export function getColdest(needColdest: boolean): ColdestCityInfoList {
  if (needColdest) {
    const result: ColdestCityInfoList = [];
    for (let i = 0; i < 10; i++) {
      const city: ColdestCityInfo = {
        ...coldest[i],
        index: i + 1,
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
  const max = coldest.length;

  for (let i = 0; i < 10; i++) {
    const id = getRandId(max, ids);
    ids.push(Number(id));
  }

  ids = ids.sort(function(a1, a2) {
    return a1 - a2;
  });

  const cityList: ColdestCityInfoList = [];

  for (let i = 0; i < 10; i++) {
    const city: ColdestCityInfo = {
      ...coldest[ids[i]],
      index: i + 1,
    };
    cityList.push(city);
  }

  return cityList;

}

function initVkWidget() {
  //vk
  // @ts-ignore
  VK.Widgets.Like('vk_like', {
    type: 'button',
    pageImage: 'http://coldrussia.ru/img/cold.jpg',
    pageDescription: 'coldrussia.ru — это рейтинг самых холодных мест в России сегодня. Мы не знаем, как живут отважные люди в этих городах, но восхищаемся их стойкостью.',
    text: 'Рейтинг самых холодных мест в России сегодня. Мы не знаем, как живут отважные люди в этих городах, но восхищаемся их стойкостью.',
    pageTitle: 'Холодная Россия',
    height: 20,
    width: 200
  }, 11);
}

function waitAndInitVkWidget() {
  // @ts-ignore
  if (window.VK) {
    initVkWidget();
  } else {
    setTimeout(waitAndInitVkWidget, 500);
  }
}

let loaded = false;
export function loadShare() {
  if (!loaded) {
    //twitter
    // @ts-ignore
    !function(d,s,id){
      // @ts-ignore
      var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        // @ts-ignore
        js.src=p+'://platform.twitter.com/widgets.js';
        // @ts-ignore
        fjs.parentNode.insertBefore(js,fjs);
      }}(document, 'script', 'twitter-wjs');

  }

  waitAndInitVkWidget();

  if (loaded) {
    // @ts-ignore
    twttr.widgets.load();
    // @ts-ignore
    FB.XFBML.parse();
  }

  loaded = true;
}
