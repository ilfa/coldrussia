<script lang="ts">
  import Weather from '$lib/Weather.svelte';

  export let weatherData;
</script>

<Weather cities={weatherData} />
