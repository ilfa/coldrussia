<template>
  <div class="share">
    <div class="tw-like">
      <a href="https://twitter.com/share" class="twitter-share-button" data-text="Самые холодные места в России:">Tweet</a>
    </div>
    <div id="vk_like" class="vk-like"></div>
    <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="200" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
  </div>
</template>

<script>
  import { loadShare } from '../utils';

  export default {
    name: 'Share',
    mounted() {
      loadShare();
    }
  }
</script>

<style scoped>
  .share {
    text-align: center;
    line-height: 20px;
    margin-bottom: 40px;
  }

  .tw-like {
    display: inline-block;
  }
  .fb-like {
    display: inline-block;
    bottom: -4px;
  }
  .vk-like {
    display: inline-block;
  }
  @media screen and (max-width: 768px) {
    .tw-like {
      display: block;
    }
    .fb-like {
      display: block;
      bottom: auto;
    }
    .vk-like {
      display: block;
      padding: 20px 0;
      width: auto !important;
    }
  }
</style>