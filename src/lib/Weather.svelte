<script lang="ts">
  import type { ColdestCityInfoList } from '/src/lib/types';

  export let cities: ColdestCityInfoList;
</script>

<div class="weather">
  {#each cities as city, index}
    <div class="size_{index + 1}">
      <p class="degree">{city.temp}</p>
      <p class="city">
        <a href="http://openweathermap.org/city/{city.id}" target="_blank">{city.name}</a>
      </p>
    </div>
  {/each}
</div>

<style>
  .weather {
    padding: 16px 0 32px 0;
  }

  .weather div {
    margin-bottom: 32px;
    width: 33%;
    min-width: 320px;
    text-align: center;
  }

  .degree {
    color: rgb(0, 50, 255);
  }

  .city {
    font-size: 18px;
    line-height: 14px;
  }

  .city a {
    font-size: 18px;
    line-height: 14px;
    text-decoration: none;
    color: black;
  }

  .city a:hover {
    color: rgb(255, 25, 0);
  }

  .size_1 .degree {
    font-size: 144px;
    line-height: 112px;
  }

  .size_2 .degree {
    font-size: 112px;
    line-height: 96px;
  }

  .weather div.size_2 {
    margin-left: 33%;
    opacity: 0.9;
  }

  .size_3 .degree {
    font-size: 96px;
    line-height: 80px;
    margin-bottom: 3px;
  }

  .weather div.size_3 {
    margin-left: 66%;
    opacity: 0.8;
  }

  .size_4 .degree {
    font-size: 80px;
    line-height: 72px;
    margin-bottom: 3px;
  }

  .weather div.size_4 {
    margin-left: 33%;
    opacity: 0.7;
  }

  .size_5 .degree {
    font-size: 72px;
    line-height: 60px;
    margin-bottom: 7px;
  }

  .weather div.size_5 {
    margin-left: 66%;
    opacity: 0.6;
  }

  .size_6 .degree {
    font-size: 60px;
    line-height: 48px;
    margin-bottom: 10px;
  }

  .weather div.size_6 {
    opacity: 0.5;
  }

  .size_7 .degree {
    font-size: 48px;
    line-height: 36px;
    margin-bottom: 13px;
  }

  .weather div.size_7 {
    margin-left: 66%;
    opacity: 0.4;
  }

  .size_8 .degree {
    font-size: 36px;
    line-height: 30px;
    margin-bottom: 13px;
  }

  .weather div.size_8 {
    margin-left: 33%;
    opacity: 0.3;
  }

  .size_9 .degree {
    font-size: 30px;
    line-height: 24px;
    margin-bottom: 14px;
  }

  .weather div.size_9 {
    opacity: 0.2;
  }

  .size_10 .degree {
    font-size: 24px;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .weather div.size_10 {
    margin-left: 66%;
    opacity: 0.1;
  }

  @media screen and (max-width: 768px) {
    .weather div.size_1,
    .weather div.size_2,
    .weather div.size_3,
    .weather div.size_4,
    .weather div.size_5,
    .weather div.size_6,
    .weather div.size_7,
    .weather div.size_8,
    .weather div.size_9,
    .weather div.size_10 {
      margin-left: 0;
      width: 100%;
    }
  }
</style>
