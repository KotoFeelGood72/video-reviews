<template>
    <div class="layout-default">
        <HeaderDefault/>
        <slot></slot>
    </div>
</template>

<script>
    import HeaderDefault from '@/components/shared/Header/HeaderDefault'
    export default {
        components: {
            HeaderDefault,
        }    
    }
</script>

<style lang="scss" scoped>

</style>