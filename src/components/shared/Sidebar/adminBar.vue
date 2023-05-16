<template>
  <div class="adminBar">
      <nav class="side-nav">
        <ul>
            <li v-for="item in SidebarNav.nav" :key="item.name">
              <router-link :to="item.link">
                <b-icon :icon="item.icon"/>
                <p>{{ item.name }}</p>
              </router-link>
            </li>
        </ul>
      </nav>
      <b-button @click="handleUserExit">Выйти</b-button>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'
  import SidebarNav from './SidebarNav';
  export default {
    data() {
      return {
        SidebarNav,
        ex: {},
      }
    },
    methods: {
      // ...mapActions(['userExit']),
      async handleUserExit() {
        // this.userExit(this.ex);
        this.$store.dispatch('userExit', {})
      }
    }
  }
</script>

<style lang="scss" scoped>

.adminBar {
  // width: 19%;
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 5px;
  padding: 20px;
}

.side-nav {
  ul {
    padding-left: 0;
  }
  li {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
      font-size: 16px;
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.185);
      padding: 13px 20px;
      position: relative;
      border-radius: 4px;
      &.router-link-exact-active {
        &:before {
          height: 100%;
        }
      }
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 5px;
        height: 0%;
        background-color: #6834F4;
        content: '';
        transition: all .3s ease;
      }
      p {
        margin-bottom: 0;
        padding-left: 20px;
      }
    }
  }
}
</style>