import coldest from './../weather_data/coldestCities.json';

export const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");

export function getCounterUrl() {
  if (!isBrowser()) {
    return '';
  }
  return "//counter.yadro.ru/hit?t26.1;r" + escape(document.referrer)+((typeof(screen)==="undefined")?"":
    ";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
    screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
    ";"+Math.random();
}

export function getColdest(needColdest) {
  if (needColdest) {
    const result = [];
    for (let i = 0; i < 10; i++) {
      const city = coldest[i];
      city.index = i + 1;
      result.push(city);
    }
    return result;
  }

  function getRandId(max, blackList) {
    const rnd = Math.floor(Math.random() * max);
    if (inArray(blackList, rnd)) {
      return getRandId(max, blackList);
    } else {
      return rnd;
    }
  }

  function inArray(list, val) {
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

  const cityList = [];

  for (let i = 0; i < 10; i++) {
    const city = coldest[ids[i]];
    city.index = i + 1;
    cityList.push(city);
  }

  return cityList;

}

function initVkWidget() {
  //vk
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
    !function(d,s,id){
      var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
      if(!d.getElementById(id)){
        js=d.createElement(s);
        js.id=id;
        js.src=p+'://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js,fjs);
      }}(document, 'script', 'twitter-wjs');

  }

  waitAndInitVkWidget();

  if (loaded) {
    twttr.widgets.load();
    FB.XFBML.parse();
  }

  loaded = true;
}
