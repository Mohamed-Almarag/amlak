<template>
  <v-carousel hide-delimiters cycle show-arrows-on-hover class="my-5">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('@/assets/images/slider/1.jpg'),
        },
        {
          src: require('@/assets/images/slider/2.jpg'),
        },
        {
          src: require('@/assets/images/slider/3.jpg'),
        },
        {
          src: require('@/assets/images/slider/4.jpg'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
