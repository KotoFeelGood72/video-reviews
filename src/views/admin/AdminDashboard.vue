<template>
    <div class="row">
        <admin-bar class="col-2"></admin-bar>
        <div class="admin-main col-10">
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


.admin {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    .admin-main {
        width: 100%;
        // max-width: 80%;
        // margin-right: 0;
        // margin-left: auto;
    }
}
</style>