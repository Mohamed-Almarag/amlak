<template>
  <v-card
    v-if="item"
    :loading="loading"
    class="ma-2 py-2"
    elevation="3"
    flat
    :to="`${
      this.$route.params.id == item.id
        ? `/product/${item.id}`
        : (this.$route.params.path = `/product/${item.id}`)
    }`"
  >
    <span class="error span text--white shades" v-if="show">HOT</span>
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <div class="image d-flex justify-center align-center">
      <v-img
        src="https://www.apple.com/v/macos/monterey/d/images/overview/hero/hero_fallback__bz4vu75puzma_large.png"
      ></v-img>
    </div>

    <ReusableCardTitle :title="item.name" txtStyle="text-center" />

    <v-card-text>
      <v-row align="center" justify="center" class="mx-0">
        <v-rating
          :value="+item.rate"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>
      </v-row>
    </v-card-text>
    <v-card-actions class="d-flex justify-center align-center prices">
      <h5 class="error--text text-decoration-line-through">
        {{ item.price }}$
      </h5>
      <h5 class="font-weight-bold">{{ item.offer_price }}$</h5>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['item', 'show', 'loading'],
  // created() {
  //   console.log(this.item)
  // },
}
</script>

<style lang="scss" scoped>
.v-card {
  position: relative;

  .span {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    padding: 1px 10px;
    border-radius: 3px;
    color: #fff;
    font-size: 0.9rem;
  }

  .prices {
    gap: 5px;
  }

  @media (max-width: 280px) {
    .span {
      padding: 1px 6px;
      font-size: 0.65rem;
    }

    .v-rating {
      transform: scale(0.8);
    }

    .prices {
      font-size: 00.75rem;
    }
  }
}
</style>
