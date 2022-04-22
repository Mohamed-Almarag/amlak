<template>
  <v-card flat class="ma-2" rounded>
    <v-card-text class="d-flex justify-space-between align-center">
      <h4 class="black white--text px-4 py-1 rounded-pill">{{ item.offer }}</h4>

      <h4 dark class="white error--text px-4 py-1 rounded rounded-pill">
        {{ item.price }}$
      </h4>
    </v-card-text>
    <div class="image pa-5">
      <v-img :src="item.image"></v-img>
    </div>
    <v-card-text>
      <h4 class="display-1 font-weight-light text--black">{{ item.title }}</h4>

      <h4 dark class="subtitle-1 font-weight-bold">{{ item.subtitle }}</h4>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss" scoped></style>
