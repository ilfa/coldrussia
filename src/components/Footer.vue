<template>
  <div class="footer">
    <p>Coldrussia.ru — это рейтинг самых холодных мест в России сегодня. Мы не знаем, как живут отважные люди в этих городах, но восхищаемся их стойкостью. Следите вместе с нами за прогнозом погоды, учите географию страны и читайте <a href="http://metkere.com" target="_blank">metkere.com</a>.</p>
    <router-view name="coldestLink"/>
    <p>Идея проекта — <a href="http://metkere.com" target="_blank">Илья Кабанов</a>, дизайн — <a href="http://be.net/printgrids" target="_blank">Александр Смирнов</a>, вся важная работа — <a href="http://ilfa.ru/" target="_blank">Илья Таратухин</a>.</p>
    <p>Данные предоставлены <a href="http://openweathermap.org/" target="_blank">Open Weather Map.</a></p>
    <router-view name="counterButton"/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Footer',
  }
</script>

<style scoped>
  .footer {
    text-align: center;
    padding-top: 60px;
    border-top: 4px dashed black;
  }

  .footer p {
    font-size: 18px;
    line-height: 24px;
    padding: 0 16px;
    margin-top: 10px;
  }

  .footer a {
    color: rgb(0, 50, 255);
    text-decoration: none;
  }

  .footer a:hover {
    color: rgb(255, 25, 0);
  }
</style>
