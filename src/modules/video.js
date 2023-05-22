import Vue from 'vue'
import VideoReviewWidget from '@/components/VideoReviewWidget.vue'

export default function initWidget(elementId) {
  Vue.component('VideoReviewWidget', VideoReviewWidget)

  new Vue({
    render: h => h(VideoReviewWidget),
  }).$mount(elementId)
}