<template>
	<header>
		<div class="container">
				<div class="header_main">
					<div class="header_logo">
						<router-link to="/">
							<img :src="require('@/assets/img/logo.svg')" alt="">
						</router-link>
					</div>
					<nav class="header_nav">	
						<ul>
							<li v-for="(item, i ) in HeaderNav.nav" :key="i + 'nav'">
								<router-link :to="`/${item.link}`">{{item.name}}</router-link>
							</li>
						</ul>
					</nav>
					<nav class="float-navigation">
						<ul>
							<li v-for="(item, i ) in User.nav" :key="i + 'nav'">
								<router-link :to="`/${item.link}`">{{item.name}}</router-link>
							</li>
						</ul>
					</nav>
				</div>
		</div>
	</header>
</template>

<script>
	import HeaderNav from '@/components/shared/Header/HeaderNav'
	import User from './User';
    export default {
        data() {
			return {
				HeaderNav,
				User,
			}
		},
    }
</script>

<style lang="scss" scoped>
	.header_main {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>