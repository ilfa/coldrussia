<template>
  <a href='//www.liveinternet.ru/click' target=_blank>
    <img v-if="mounted" :src='counterUrl' alt='' title='LiveInternet: показано число посетителей за сегодня' border='0' width='88' height='15' class="footerCounter">
  </a>
</template>

<script>
  import { getCounterUrl } from '../utils';

  export default {
    name: 'CounterButton',
    data() {
      return {
        mounted: false
      }
    },
    mounted() {
      this.mounted = true;
      this.counterUrl = getCounterUrl();
    },
    computed: {
      counterUrl: function() {
        if (!this.mounted) return '';
        return getCounterUrl(this.$route.meta.coldest);
      }
    },

  }
</script>

<style scoped>

</style>