<template>
  <div class="adminBar">
      <nav class="side-nav">
        <ul>
            <li v-for="item in SidebarNav.nav" :key="item.name">
              <router-link :to="item.link">
                <p>{{ item.name }}</p>
                <b-icon :icon="item.icon"/>
              </router-link>
            </li>
        </ul>
      </nav>
      <b-button @click="handleUserExit">Выйти</b-button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import SidebarNav from './SidebarNav';
  export default {
    data() {
      return {
        SidebarNav,
        ex: {
          el: 'Hui'
        }
      }
    },
    methods: {
      ...mapActions(['userExit']),
      async handleUserExit() {
        this.userExit(this.ex);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>