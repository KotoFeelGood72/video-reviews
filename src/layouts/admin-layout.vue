<template>
  <div class="admin-layout container-fluid flex items-start flex-wrap w-full h-[100vh] overflow-y-auto">
      <admin-header/>
      <admin-bar class="w-full"></admin-bar>
      <slot></slot>
  </div>
</template>

<script>
  import adminBar from '@/components/Sidebar/adminBar.vue'
  import AdminHeader from '@/components/Header/AdminHeader.vue';

  export default {
    components: {adminBar, AdminHeader}
  }
</script>




