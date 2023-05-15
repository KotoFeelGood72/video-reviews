<template>
    <div class="admin">
        <admin-bar></admin-bar>
        <div class="admin-main">
            <admin-header/>
            <admin-content></admin-content>
        </div>
    </div>
</template>

<script>
import adminBar from '@/components/shared/Sidebar/adminBar.vue'
import AdminHeader from '@/components/shared/Header/AdminHeader.vue';
import AdminContent from '@/components/shared/content/adminContent.vue'
export default {
    components: {
        adminBar,
        AdminHeader,
        AdminContent
    }
}
</script>

<style lang="scss" scoped>

</style>