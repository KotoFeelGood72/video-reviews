<template>
  <header class="flex items-center text-white pr-3 justify-between bg-gray-600 h-[70px] w-full">
    <div class="flex items-center h-full justify-center">
        <div class="logo-header px-12 py-5 min-w-[250px] w-full bg-gray-700 h-full flex items-center justify-center">
          <router-link to="/">
            <img :src="require('@/assets/img/logo-header.png')" alt="" class="max-w-[100px] mx-auto">
          </router-link>
        </div>
        <div class="burger mr-4 pl-4">
          <GlobalIcon icon="mdi:menu"/>
        </div>
        <div id="search" class="flex items-center relative">
          <input type="search" class=" appearance-none bg-gray-700 py-2 px-3 pl-11 rounded-full text-sm font-medium outline-none" placeholder="Search website">
          <button type="submit" class="absolute top-[50%] -translate-y-[50%] left-4 hover:opacity-70 duration-300">
            <GlobalIcon icon="mingcute:search-3-line" width="16"/>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="notifications relative mr-8 cursor-pointer">
          <GlobalIcon icon="ic:baseline-notifications" class="flex items-center"/>
          <div id="note-count" class=" absolute -top-[4px] -right-[3px] text-[11px] bg-red-500 flex items-center justify-center rounded-full font-semibold w-[16px]">3</div>
        </div>
        <div id="user" class="flex items-center justify-start cursor-pointer">
          <div class="user-img rounded-full overflow-hidden w-[36px] h-[36px] mr-2 border-2 border-gray-700">
            <img :src="require('@/assets/img/avatar.jpg')" alt="" class=" object-cover w-full h-full">
          </div>
          <div class="flex items-center mr-6 relative pr-5">
            <p>Henry</p>
            <GlobalIcon icon="mdi:chevron-down" width="15" class="absolute top-[55%] -translate-y-[50%] right-0"/>
          </div>
          <div id="user-fly" class="hidden">
            <ul>
              <li v-for="item in userNav" :key="item.name">
                <RouterLink :to="item.link">
                  <GlobalIcon :icon="item.icon"/>
                  <p>{{ item.name }}</p>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div id="settings" class="cursor-pointer">
          <GlobalIcon icon="material-symbols:settings-outline" class="animate-spin-slow opacity-60" color="white" />
        </div>
      </div>
  </header>
</template>

<script>


  export default {

    data() {
      return {
        userNav: [
          {
            link: '/',
            name: 'Profile',
            icon: 'ph:user-light'
          },
          {
            link: '/',
            name: 'My Wallet',
            icon: 'fluent:wallet-credit-card-16-filled'
          },
          {
            link: '/',
            name: 'Settings',
            icon: 'lucide:wrench'
          },
          {
            link: '/',
            name: 'Lock screen',
            icon: 'material-symbols:lock'
          },
          {
            link: '/',
            name: 'Logout',
            icon: 'ic:sharp-power-settings-new'
          },
        ]
      }
    }
  }
</script>

