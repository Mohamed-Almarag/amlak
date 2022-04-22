<template>
  <v-row no-gutters justify="center" align-content="center" class="px-4">
    <SearchAsideList :items="items" title="Accesories" />
    <SearchAsideRange />
    <SearchAsideColors />
    <SearchAsideList :items="brands" title="Brands" />
    <v-btn
      class="grey lighten-4 mt-5 font-weight-bold"
      x-large
      block
      elevation="0"
      >More</v-btn
    >
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Real-Time' },
        { text: 'Audience' },
        { text: 'Conversions' },
      ],
      brands: [
        { text: 'Apple' },
        { text: 'Samsung' },
        { text: 'Dell' },
        { text: 'Xaomi' },
        { text: 'Sony' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
