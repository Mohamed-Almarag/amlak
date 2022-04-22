import Vue from 'vue'

Vue.filter('shorten', function (text, length, suffix) {
  return text.substring(0, length) + suffix
})

Vue.filter('fixed', function (value , length) {
  return value.parseFloat(length).toFixed(length)
})
