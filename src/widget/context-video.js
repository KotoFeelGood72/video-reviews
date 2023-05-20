import Vue from 'vue'
import ReviewsModule from '@/components/VideoReviewWidget.vue'

Vue.component('ReviewsModule', ReviewsModule)

new Vue({
  el: '#video',
  template: '<reviews-module />'
})