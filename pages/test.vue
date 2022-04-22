<template>
  <div>
    <div class="container">
      <div
        class="loading d-flex justify-content-center align-items-center"
        v-if="loading"
      >
        loading ...
      </div>
      <div class="holder" v-else>
        <div class="row">
          <div
            class="col-md-3 col-sm-12"
            v-for="product in products"
            :key="product.id"
          >
            <img :src="product.image_link" alt="" class="img-fluid w-100" />
            <h6>
              {{ product.brand }}
            </h6>
            <!-- <nuxt-link
              :title="$t('product.inWishlist')"
              :to="localePath('/shop/wishlist')"
              class="btn-product btn-wishlist added-to-wishlist"
              v-if="isInWishlist(product)"
              key="inWishlist"
            >
              <span>In wishlist</span>
            </nuxt-link> -->
            <a
              :title="$t('product.addToWishlist')"
              class="btn-product btn-wishlist"
              @click.prevent="addToWishlist({ product: product })"
              
              key="notInWishlist"
            >
              <span>add to wishlist</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return {
      products: [],
      loading: true,
      getExistPId: null,
    }
  },
  methods: {
    getProducts() {
      axios
        .get(
          'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
        )
        .then((resp) => {
          console.log(resp)
          if (resp.status == 200) {
            this.loading = false
            this.products = resp.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addToCart(item) {
      const product = [
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1,
        },
      ]

      if (this.cart.length > 0) {
        let id = item.id
        this.getExistPId = id
        let cartIndex = this.cart.findIndex((cart) => {
          return cart.id == id
        })

        if (cartIndex == -1) {
          this.$store.dispatch('addToCart', product)
          this.$toast('Added to cart', {
            icon: 'fas fa-cart-plus',
          })
        } else {
          this.$store.dispatch('updateCart', {
            id,
            unit: 1,
            cart: this.cart,
          })
          this.$toast.info('Already added to the cart and update with one')
        }
      } else {
        this.$store.dispatch('addToCart', product)
        this.$toast('Added to cart', {
          icon: 'fas fa-cart-plus',
        })
      }
    },
    ...mapActions('wishlist', ['addToWishlist']),
  },
  created() {
    // this.getProducts()
  },
  computed: {
    ...mapGetters('wishlist', ['isInWishlist']),
  },
}
</script>

<style>
</style>