<template>
  <div id="app">
		<default-layout v-if="$route.fullPath !== '/reviews'">
				<router-view></router-view>
		</default-layout>
		<empty-layout v-else>
			<router-view></router-view>
		</empty-layout>
  </div>
</template>

<script>

import defaultLayout from '@/layouts/default-layout.vue';
import EmptyLayout from './layouts/empty-layout.vue';
export default {
  name: 'App',
  components: {
		defaultLayout,
    EmptyLayout,
  },

}
</script>

<style lang="scss">



</style>
