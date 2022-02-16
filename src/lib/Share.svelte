<script lang="ts">
  import { onMount } from 'svelte';
  import { loadShare } from '/src/lib/utils';

  onMount(() => {
    loadShare();
  });
</script>

<div class="share">
  <div class="tw-like">
    <a
      href="https://twitter.com/share"
      title="Share in twitter"
      class="twitter-share-button"
      data-text="Самые холодные места в России:">Tweet</a
    >
  </div>
  <div
    class="fb-like"
    title="Share in facebook"
    data-href="http://coldrussia.ru/"
    data-width="200"
    data-layout="button_count"
    data-action="like"
    data-show-faces="true"
  />
  <div id="vk_like" title="Share in vk" class="vk-like" />
</div>

<style>
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
    margin-left: 8px;
    margin-right: 8px;
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
