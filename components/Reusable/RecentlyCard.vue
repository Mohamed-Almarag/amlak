<template>
  <v-card flat class="ma-3" rounded>
    <div class="image pa-5">
      <v-img :src="item.image"></v-img>
    </div>
    <v-card-text class="d-flex justify-space-between align-center">
      <h4>{{ item.title }}</h4>

      <h4 dark class="white error--text px-4 rounded rounded-pill">
        {{ item.price }}$
      </h4>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss" scoped></style>
