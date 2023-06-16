<template>
  <div class="flex items-start flex-1 text-white p-8 flex-wrap justify-start">
    <div class="flex w-full justify-between items-center mb-8">
      <h1 class="text-md font-semibold">DASHBOARD</h1>
      <ul id="breadcrumb" class=" flex items-center flex-wrap flex-row">
        <li><router-link to="/">Dashboards</router-link></li>
        <li><router-link to="/">Default</router-link></li>
      </ul>
    </div>
    <div class="flex items-start">
      <div class="col-xl-4">
        <div id="user-table" class=" bg-gray-700">
          <div class="flex justify-between items-center">
            <div class="p-4">
              <h3>Welcome Back !</h3>
              <p>Sign in to continue to Skote.</p>
            </div>
            <div class="max-w-[176px]">
              <img :src="require('@/assets/img/profile.png')" alt="">
            </div>
          </div>
          <div>
            <div>
              <img :src="require('@/assets/img/avatar.jpg')" alt="" class=" rounded-full max-w-[72px] object-cover border-2 border-gray-900">
              <p>Henry Price</p>
              <p>UI/UX Designer</p>
            </div>
            <div>
              <p>125</p>
              <p>Projects</p>
              <router-link to="/">
                <p>View profile</p>
                <GlobalIcon icon="ic:outline-keyboard-arrow-right"/>
              </router-link>
            </div>
            <div>
              <p>$1245</p>
              <p>Revenue</p>
            </div>
          </div>
        </div>
        <div id="monthly">
          <div>
            <h2>Monthly Earning</h2>
            <p>This month</p>
            <div class="price">$34,252</div>
            <div>
              <p>12% <GlobalIcon icon="material-symbols:fitbit-arrow-upward-sharp"/></p>
            </div>
            <div> From previous period</div>
            <router-link to="/">
              <p>View more</p>
              <GlobalIcon icon="ic:outline-keyboard-arrow-right"/>
            </router-link>
            <p>We craft digital, graphic and dimensional thinking.</p>
          </div>
          <div class="graphic">
            
          </div>
        </div>
      </div>
      <div class="col-xl-8">
  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

#breadcrumb {
  margin: -5px -5px 0 0;

  li {
    padding: 5px 5px 0 0;
    font-size: 14px;
    font-weight: 500;
    opacity: .7;
    &:hover {
      opacity: 1;
    }
    &:not(:last-child) {
      &:after {
        content: ' /';
      }
    }
  }
}

</style>