<template>
  <div class="product-page my-5">
    <ReusableBreadCrump />

    <v-container>
      <header>
        <v-row no-gutters>
          <!-- Product images viewer component -->
          <v-col cols="12" lg="4" md="5">
            <ProductPageHeaderImagesViewer />
          </v-col>
          <!-- Product Details Component -->
          <v-col cols="12" lg="5" md="7">
            <ProductPageHeaderDetails :item="product" />
          </v-col>
          <!-- Best seller Component -->
          <v-col cols="12" lg="3">
            <div class="title">
              <h6 class="grey--text text-uppercase">best selling</h6>
            </div>
            <ProductPageHeaderBestSellerSlider :items="BestSeller" />
          </v-col>
        </v-row>
      </header>
      <div class="more-details">
        <v-row no-gutters>
          <v-col cols="12" lg="9">
            <ProductPageMoreDetails />
          </v-col>
        </v-row>
      </div>
    </v-container>
    <ReusableHeadTitle msg="Related products" />
    <ProductPageProductsSlider :items="RelatedProducts" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.page_title,
    }
  },
  data() {
    return {}
  },
  created() {
    this.getIndividualProduct(this.$route.params.id)
  },
  computed: {
    product() {
      return this.$store.state.products.IndividualProduct
    },
    BestSeller() {
      return this.$store.state.products.BestSeller
    },
    RelatedProducts() {
      return this.$store.state.products.RelatedProducts
    },
    category_id() {
      if (this.product) {
        return this.product.category.id
      }
    },
    page_title() {
      if (this.product) {
        return this.product.name
      }
    },
  },
  methods: {
    getIndividualProduct(id) {
      this.$store.dispatch('products/getIndividualProduct', id).then(() => {
        this.getBestProducts()
        this.getRelatedProducts()
      })
    },
    getBestProducts() {
      let bestSeller = 'best-seller'
      this.$store.dispatch('products/getProducts', bestSeller)
    },
    getRelatedProducts() {
      let id = this.category_id
      this.$store.dispatch('products/getProducts', +id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
