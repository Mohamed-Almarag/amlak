<template>
  <div>
    <div class="details px-2 py-4" v-if="item">
      <nav class="navbar">
        <div class="title">
          <h3 class="font-weight-medium">{{ item.name }}</h3>
        </div>
        <div class="d-flex justify-start align-center">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <div class="rate d-flex mt-4">
                <v-rating
                  :value="+item.rate"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <div class="reviews grey--text">
                  <small class="mx-2">199 reviews</small>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="buttons mt-4 d-flex">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      small
                      rounded
                      text
                      v-bind="attrs"
                      v-on="on"
                      color="green"
                      >submit a review</v-btn
                    >
                  </template>
                  <span class="text-capitalize">tap to submit a review</span>
                </v-tooltip>
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      small
                      rounded
                      text
                      color="info"
                      >available</v-btn
                    >
                  </template>
                  <span class="text-capitalize">available</span>
                </v-tooltip>
              </div>
            </v-col>
          </v-row>
          <!-- <i class="bi bi-dot grey--text"></i> -->
        </div>
      </nav>
      <section class="my-3">
        <div
          class="subtitle mt-2 mb-4 pa-3 rounded blue lighten-5 blue--text text--darken-3"
        >
          <h3 class="headline">
            Starting from
            <span class="font-weight-bold"> {{ item.price }}$</span>
          </h3>
        </div>
        <div class="d-flex">
          <h4>Availablity</h4>
          <p class="font-weight-bold blue--text">Available</p>
        </div>
        <div class="d-flex">
          <h4>Category</h4>
          <p class="font-weight-bold grey--text">{{ item.category.name }}</p>
        </div>
      </section>
      <section class="colors-sizes">
        <div class="select-color d-flex">
          <div
            class="error error--text pa-2"
            @click="active = 1"
            :class="{ active: active == 1 }"
          ></div>
          <div
            class="orange orange--text pa-2"
            @click="active = 2"
            :class="{ active: active == 2 }"
          ></div>
          <div
            class="blue blue--text pa-2"
            @click="active = 3"
            :class="{ active: active == 3 }"
          ></div>
          <div
            class="black blue--text pa-2"
            @click="active = 4"
            :class="{ active: active == 4 }"
          ></div>
        </div>
        <div class="select-size mt-4">
          <v-select
            v-for="option in item.sizes"
            :key="option.id"
            :items="[option.name]"
            label="Select Size"
            outlined
            class="size-selector"
            @change="test(option.id)"
          ></v-select>
        </div>
      </section>
      <section class="actions d-flex justify-space-between align-center">
        <v-row no-gutters>
          <v-col cols="12" md="4">
            <div class="quantity d-flex">
              <div
                class="quantity-controller rounded mt-4 d-flex align-center pa-2"
              >
                <v-btn
                  @click="plus"
                  rounded
                  small
                  color="blue"
                  class="font-weight-bold"
                  text
                  >+</v-btn
                >
                <div>{{ counter }}</div>
                <v-btn
                  rounded
                  small
                  text
                  @click="minus"
                  color="blue"
                  class="font-weight-bold"
                  >-</v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" align-self="center" offset-md="1">
            <div class="fav d-flex mt-auto pa-2">
              <v-btn class="to-cart" rounded text color="green">
                <v-icon left>mdi-cart-outline</v-icon> add to cart
              </v-btn>
              <v-btn class="to-favs" rounded text color="error">
                <i class="bi bi-heart" style="font-size: 1rem"></i>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </section>
      <section class="coupone py-3">
        <ReusableCouponCode :coupone="item.coupon" />
      </section>
      <div class="share mt-4 mb-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" text dark block v-bind="attrs" v-on="on">
              <v-icon>mdi-earth</v-icon> <span class="mx-2">contacting</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-btn elevation="0" class="blue my-1 darken-3 white--text" block>
                <v-icon left>mdi-facebook</v-icon> Share on facebook
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn elevation="0" class="info my-1 white--text" block>
                <v-icon left>mdi-twitter</v-icon> Share on twitter
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-row no-gutters>
          <v-col cols="12" md="4">
            <v-btn elevation="0" class="blue my-1 darken-3 white--text" block>
              <v-icon left>mdi-facebook</v-icon> Share on facebook
            </v-btn>
          </v-col>
          <v-col cols="12" md="4" offset-md="2">
            <v-btn elevation="0" class="info my-1 white--text" block>
              <v-icon left>mdi-twitter</v-icon> Share on twitter
            </v-btn>
          </v-col>
        </v-row> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      active: 1,
      items: ['XL', 'LG', 'MD', 'SM', 'XS'],
      counter: 0,
      // item: this.details,
    }
  },
  computed: {
    // ProductSizes() {
    //   this.items.sizes.map()
    // }
  },
  methods: {
    minus() {
      if (this.counter > 0) this.counter--
    },
    plus() {
      this.counter++
    },
    test(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.details {
  .navbar,
  section {
    padding-bottom: 10px;
    border-bottom: 3px solid #eee;
  }

  section {
    div {
      gap: 20px;
    }
  }

  .select-color {
    gap: 10px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.4s ease-in-out;

      &.active {
        transform: scale(0.8);
      }
    }
  }

  .select-size {
    .size-selector {
      width: 50%;

      @media (max-width: 480px) {
        width: 100%;
      }
    }
  }

  .actions {
    .quantity {
      .quantity-controller {
        border: 1px solid #eee;
        background-color: rgba(238, 238, 238, 0.678);
      }
    }
  }
}
</style>
