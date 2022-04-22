<template>
  <div class="my-11">
    <v-container>
      <h2>
        {{ $t('Who Are We') }}
      </h2>
      <div class="my-5">
        <p v-html="about"></p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  head: {
    title: 'About',
  },
  computed:{
    about(){
      return this.$store.state.SiteInfo.about_us
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  width: 90% !important;
  line-height: 1.8;
  padding: 0 20px;
}
</style>