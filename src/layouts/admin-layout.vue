<template>
  <div class="admin-layout container-fluid">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .admin-layout {
    background-color: #0F0F23;
    height: 100vh;
    padding: 20px 40px;
    :deep(.header) {
      border-radius: 5px;
    }
  }
</style>