<template>
  <div class="adminBar max-w-[250px] bg-gray-700 text-white h-full">
      <nav class="side-nav">
        <ul>
            <li v-for="(item, i) in sidebarNav.nav" :key="i + item">
              <p class="text-[10px] text-white opacity-70 font-semibold mb-4 px-6">{{ item.label }}</p>
              <ul>
                <li v-for="item in item.navList" :key="item.name" class="px-6 py-2">
                  <router-link :to="item.link" class="inline-flex items-center font-semibold relative pr-5">
                    <GlobalIcon :icon="item.icon" class="mr-2" width="20" height="20"/>
                    <p>{{ item.name }}</p>
                    <GlobalIcon v-if="item.list" icon="mdi:chevron-down" width="13" class=" absolute top-[50%] -translate-y-[50%] right-0"/>
                  </router-link>
                  <ul v-if="item.list">
                    <li v-for="item in item.list" :key="item.name">
                      <router-link :to="item.link" class="px-8 text-sm font-regular opacity-70 block py-1">{{ item.name }}</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
        </ul>
      </nav>
  </div>
</template>

<script>
  import sidebarNav from '@/navigation/sidebar-nav';
  export default {
    data() {
      return {
        sidebarNav,
      }
    },
  }
</script>

