<template>
  <v-container>
    <CartTable />
    <div class="mt-5">
      <CartAction btn="continue" :input="true" :price="true" to="adresses" />
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
