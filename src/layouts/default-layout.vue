<template>
    <div class="layout-default">
        <HeaderDefault/>
        <slot></slot>
    </div>
</template>

<script>
    import HeaderDefault from '@/components/Header/HeaderDefault'
    export default {
        components: {
            HeaderDefault,
        }    
    }
</script>