<template>
  <div id="app"  class="wrapper">
    <div class="content">
      <div class="header">
        <h1><router-link to="/"><span class="blue">Холодная</span> <span class="red">Россия</span></router-link></h1>
        <div class="subheading">Сегодня в России чертовски холодно</div>
      </div>
      <router-view />
      <Share />
      <router-view name="footer"/>
    </div>
  </div>
</template>

<script>
import Share from './components/Share.vue'

export default {
  name: 'app',
  components: {
    Share
  }
}
</script>

<style>
  @font-face {
    font-family: 'LineaturaRegular';
    src: url('assets/LineaturaRegular.otf')  format('opentype'), url('assets/LineaturaRegular.woff') format('woff'),
    url('assets/LineaturaRegular.ttf')  format('truetype'), url('assets/LineaturaRegular.svg#LineaturaRegular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    line-height: 0;
    border: 0;
  }

  body, html {
    font-family: 'LineaturaRegular' !important;
  }

  .wrapper {
    max-width: 1600px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }

  .content {
    padding: 64px 0 32px 0;
  }

  .header {
    text-align: center;
    padding-bottom: 60px;
    border-bottom: 4px dashed black;
    margin-bottom: 64px;
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 60px;
    line-height: 56px;
    font-weight: normal;
    margin-bottom: 8px;
    padding: 0 16px;
  }

  h1 a {
    font-size: 60px;
    line-height: 56px;
    text-decoration: none;
  }

  h1 a:hover .blue {
    color: rgb(255, 25, 0);
  }

  h1 a:hover .red {
    color: rgb(0, 50, 255);
  }

  .blue {
    color: rgb(0, 50, 255);
  }

  .red {
    color: rgb(255, 25, 0);
  }

  .subheading {
    font-size: 24px;
    line-height: 27px;
    padding: 0 16px;
    display: inline-block;
    position: relative;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 40px;
      line-height: 45px;
      font-weight: normal;
      margin-bottom: 8px;
      padding: 0 16px;
    }

    h1 a {
      font-size: 40px;
      line-height: 45px;
      text-decoration: none;
    }
  }
</style>
