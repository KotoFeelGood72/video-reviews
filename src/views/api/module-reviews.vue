<template>
    <video-review-widget :src="src"/>
</template>

<script>
    import VideoReviewWidget from '@/components/VideoReviewWidget.vue'
    export default {
        components: {
            VideoReviewWidget,
        },
        data() {
            return {
                src: 'island.mp4',
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>