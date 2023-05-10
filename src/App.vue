<template>
  <div id="app">
	<default-layout>
       <router-view></router-view>
	</default-layout>
  </div>
</template>

<script>

import defaultLayout from '@/layouts/default-layout.vue';
export default {
  name: 'App',
  components: {
		defaultLayout,
  },

}
</script>

<style lang="scss">



</style>
