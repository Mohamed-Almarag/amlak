<template>
  <div>
    <div v-if="title">
      <h4 :class="txtStyle" v-if="title.length < 13">{{ title }}</h4>
      <h4 :class="txtStyle" v-else>{{ title.substring(0, 13) }}...</h4>
    </div>
    <h4 :class="txtStyle" v-else>alternative title</h4>
  </div>
</template>

<script>
export default {
  props: ['title', 'txtStyle'],
}
</script>

<style lang="scss" scoped>
@media (max-width: 280px) {
  h4 {
    font-size: 0.7rem;
    text-align: center;
  }
}
</style>
