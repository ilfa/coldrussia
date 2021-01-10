<template>
  <a href='//www.liveinternet.ru/click' target=_blank>
    <img v-if="isMounted" :src='counterUrl' alt='' title='LiveInternet: показано число посетителей за сегодня' border='0' width='88' height='15' class="footerCounter">
  </a>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { getCounterUrl } from '../utils';

  @Component
  export default class CounterButton extends Vue {
    private isMounted: boolean = false;
    private counterUrl: string = '';

    mounted() {
      this.isMounted = true;
      this.counterUrl = getCounterUrl();
    }
  }
</script>

<style scoped>

</style>
