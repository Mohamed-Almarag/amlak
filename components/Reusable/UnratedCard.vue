<template>
  <v-card
    flat
    :loading="loading"
    elevation="3"
    class="ma-4 py-2 px-1"
    :to="`/${
      this.$route.params.id == item.id
        ? `product/${item.id}`
        : (this.$route.params.path = `product/${item.id}`)
    }`"
  >
    <div>
      <div class="image rounded">
        <img src="../../assets/images/products/laptop.svg" :alt="item.name" />
      </div>
      <div class="context text-center">
        <ReusableCardTitle :title="item.name" txtStyle="text-capitalize" />
        <v-btn class="subtitle-1 font-weight-bold" color="error" text rounded>
          19$
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default { props: ['item', 'loading'] }
</script>

<style lang="scss" scoped></style>
