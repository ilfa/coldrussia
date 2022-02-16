export const isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

export function getCounterUrl(): string {
  if (!isBrowser()) {
    return '';
  }
  return (
    '//counter.yadro.ru/hit?t26.1;r' +
    escape(document.referrer) +
    (typeof screen === 'undefined'
      ? ''
      : ';s' +
        screen.width +
        '*' +
        screen.height +
        '*' +
        (screen.colorDepth ? screen.colorDepth : screen.pixelDepth)) +
    ';u' +
    escape(document.URL) +
    ';' +
    Math.random()
  );
}

function initVkWidget() {
  //vk
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  VK.Widgets.Like(
    'vk_like',
    {
      type: 'button',
      pageImage: 'http://coldrussia.ru/img/cold.jpg',
      pageDescription:
        'coldrussia.ru — это рейтинг самых холодных мест в России сегодня. Мы не знаем, как живут отважные люди в этих городах, но восхищаемся их стойкостью.',
      text: 'Рейтинг самых холодных мест в России сегодня. Мы не знаем, как живут отважные люди в этих городах, но восхищаемся их стойкостью.',
      pageTitle: 'Холодная Россия',
      height: 20,
      width: 200
    },
    11
  );
}

function waitAndInitVkWidget() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (window.VK) {
    initVkWidget();
  } else {
    setTimeout(waitAndInitVkWidget, 500);
  }
}

function initTwitterWidget() {
  const id = 'twitter-wjs';
  const fjs = document.getElementById('app');
  const p = /^http:/.test(document.location.toString()) ? 'http' : 'https';
  if (!document.getElementById(id)) {
    const js = document.createElement('script');
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs?.parentNode?.insertBefore(js, fjs);
  }
}

let loaded = false;
export function loadShare() {
  if (!loaded) {
    initTwitterWidget();
  }

  waitAndInitVkWidget();

  if (loaded) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    twttr.widgets.load();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    FB.XFBML.parse();
  }

  loaded = true;
}
