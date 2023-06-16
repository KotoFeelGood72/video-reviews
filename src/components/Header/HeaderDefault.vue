<template>
	<header class="header">
		<div class="container mx-auto">
				<div class="header_main">
					<div class="header_col--left">
						<div class="header_logo">
							<router-link to="/">
								<img :src="require('@/assets/img/logo.svg')" width="60" alt="">
							</router-link>
						</div>
						<nav class="header_nav">	
							<ul>
								<li v-for="(item, i ) in HeaderNav.nav" :key="i + 'nav'">
									<router-link :to="`/${item.link}`">{{item.name}}</router-link>
								</li>
							</ul>
						</nav>
					</div>
					<nav class="user-nav">
						<ul>
							<li v-for="(item, i ) in User.nav" :key="i + 'nav'">
								<router-link :to="`/${item.link}`" v-if="item.link === 'admin/dashboard'"><b-icon :icon="item.name"/></router-link>
								<router-link :to="`/${item.link}`" v-else>{{ item.name }}</router-link>
							</li>
						</ul>
					</nav>
				</div>
		</div>
	</header>
</template>

<script>
	import HeaderNav from '@/components/Header/HeaderNav'
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
