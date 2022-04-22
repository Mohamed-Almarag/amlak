<template>
  <v-card flat rounded class="grey lighten-4 mt-5 pa-3">
    <v-subheader class="font-weight-bold">Price</v-subheader>
    <v-range-slider
      color="green"
      hint="Im a hint"
      inverse-label
      max="50"
      min="-50"
    ></v-range-slider>
  </v-card>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
</style>
