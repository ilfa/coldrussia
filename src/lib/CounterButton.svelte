<script lang="ts">
  import { onMount } from 'svelte';
  import { getCounterUrl } from '$lib/utils';

  let isMounted = false;
  let counterUrl = '';

  onMount(() => {
    isMounted = true;
    counterUrl = getCounterUrl();
  });
</script>

<a href="//www.liveinternet.ru/click" target="_blank">
  {#if isMounted}
    <img
      src={counterUrl}
      alt=""
      title="LiveInternet: показано число посетителей за сегодня"
      border="0"
      width="88"
      height="15"
      class="footerCounter"
    />
  {/if}
</a>
