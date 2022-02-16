<script lang="ts">
  import CounterButton from '$lib/CounterButton.svelte';
  import { page } from '$app/stores';

  $: showColdestLink = $page.url.pathname !== '/coldest';
</script>

<div class="footer">
  <p>
    Coldrussia.ru — это рейтинг самых холодных мест в России сегодня. Мы не знаем, как живут
    отважные люди в этих городах, но восхищаемся их стойкостью. Следите вместе с нами за прогнозом
    погоды, учите географию страны и читайте <a href="http://metkere.com" target="_blank"
      >metkere.com</a
    >.
  </p>
  {#if showColdestLink}
    <p>Рекомендуем изучить <a href="/coldest">список</a> самых холодных городов.</p>
  {/if}
  <p>
    Идея проекта — <a href="https://metkere.com" target="_blank">Илья Кабанов</a>, дизайн —
    <a href="https://be.net/printgrids" target="_blank">Александр Смирнов</a>, вся важная работа —
    <a href="https://twitter.com/darkilfa" target="_blank">Илья Таратухин</a>.
  </p>
  <p>
    Данные предоставлены <a href="https://openweathermap.org/" target="_blank">Open Weather Map.</a>
  </p>
  <CounterButton />
</div>

<style>
  .footer {
    text-align: center;
    padding-top: 60px;
    border-top: 4px dashed black;
  }

  .footer :global(p) {
    font-size: 18px;
    line-height: 24px;
    padding: 0 16px;
    margin-top: 10px;
  }

  .footer :global(a) {
    color: rgb(0, 50, 255);
    text-decoration: none;
  }

  .footer :global(a):hover {
    color: rgb(255, 25, 0);
  }
</style>
