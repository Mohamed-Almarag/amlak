<template>
  <div>
    <SearchContentToolbar
      @row="displayAsRow"
      :count="isProduct"
      :isRow="isRow"
    />

    <v-container v-if="products">
      <v-row no-gutters justify="center" align-content="center" v-if="!isRow">
        <v-col
          cols="6"
          sm="4"
          md="3"
          lg="4"
          v-for="(item, i) in products"
          :key="i"
        >
          <template>
            <ReusableRatedCard :item="item" :show="show" :loading="loading" />
          </template>
        </v-col>
      </v-row>
      <v-row no-gutters justify="center" align-content="center" v-else>
        <v-col cols="6" md="6" v-for="(item, i) in products" :key="i">
          <template>
            <ReusableRowProductCard :item="item" />
          </template>
        </v-col>
      </v-row>
    </v-container>
    <div v-else>
      <ReusableLoading />
    </div>
    <div
      v-if="isProduct == 0"
      class="d-flex justify-center align-center flex-column empty"
    >
      <div>
        <img src="../../assets/images/empty.svg" width="230" alt="" />
      </div>
      <h4 class="grey--text">{{ $t('nothing yet') }}...</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRow: false,
      show: false,
      loading: false,
    }
  },
  created() {
    /* Handling data fetching */
    if (
      this.$route.params.id !== 'deals' &&
      this.$route.params.id !== 'trending' &&
      this.$route.params.id !== 'Weekly-offers' &&
      this.$route.params.id !== 'new-arrivals' &&
      this.$route.params.id !== `sub-${localStorage.getItem('sub_id')}`
    ) {
      this.getSearchPageProduct(+this.$route.params.id)
      console.log('hii')
    } else if (
      this.$route.params.id == `sub-${localStorage.getItem('sub_id')}`
    ) {
      console.log('تمام اوي كده')
      let sub = 'sub'
      this.getSearchPageProduct(sub)
    } else {
      this.getSearchPageProduct(this.$route.params.id)
      // console.log('im here')
    }

    /* end Handling data fetching */
  },
  computed: {
    products() {
      return this.$store.state.products.Products
    },
    isProduct() {
      if (this.products) {
        return this.$store.state.products.Products.length
      }
    },
  },
  methods: {
    displayAsRow() {
      this.isRow = !this.isRow
    },
    getSearchPageProduct(payload) {
      this.$store.dispatch('products/getProducts', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.empty {
  * {
    user-select: none;
    pointer-events: none;
  }
}
</style>
