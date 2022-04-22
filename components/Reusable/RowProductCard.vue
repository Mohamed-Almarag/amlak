<template>
  <v-card
    class="ma-2 py-3"
    elevation="3"
    flat
    :to="`${
      this.$route.params.id == item.id
        ? `/product/${item.id}`
        : (this.$route.params.path = `/product/${item.id}`)
    }`"
  >
    <v-row no-gutters>
      <v-col cols="12" sm="6" order-sm="last">
        <div class="image">
          <img
            src="https://www.apple.com/v/macos/monterey/d/images/overview/hero/hero_fallback__bz4vu75puzma_large.png"
            alt=""
          />
        </div>
      </v-col>
      <v-col cols="12" sm="6" order-sm="first">
        <div class="context px-1">
          <v-card-text class="">
            <ReusableCardTitle :title="item.name" txtStyle="" />
            <v-rating
              :value="3.6"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
            <div class="d-flex justify-space-between align-center prices">
              <h4 class="error--text text-decoration-line-through">2999$</h4>
              <!-- <v-spacer></v-spacer> -->
              <h4 class="font-weight-bold">1099$</h4>
            </div>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss" scoped>
.prices {
  gap: 5px;
}

/* Media queries */
@media (max-width: 280px) {
  .v-card {
    .v-card__subtitle,
    .v-card__text,
    .v-card__title {
      padding: 5px !important;
    }

    .v-rating {
      transform: scale(0.8);
    }

    .prices {
      justify-content: flex-start;

      h4 {
        font-size: 00.65rem;
      }
    }
  }
}
</style>
