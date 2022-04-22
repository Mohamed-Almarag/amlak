<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Color</th>
          <th class="text-left">Size</th>
          <th class="text-left">Quantity</th>
          <th class="text-left">Price</th>
          <th class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div
              class="image pt-2 d-flex flex-column justify-center align-center"
            >
              <v-img
                src="https://www.apple.com/v/macos/monterey/d/images/overview/hero/hero_fallback__bz4vu75puzma_large.png"
                width="100"
              ></v-img>
              <p class="mt-1">MacBook Pro</p>
            </div>
          </td>
          <td>Silver</td>
          <td>XL</td>
          <td>
            <div class="quantity mb-5 d-flex">
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
                <div class="mx-2">{{ counter }}</div>
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
          </td>
          <td>120$</td>
          <td>
            <v-btn text color="error" fab>X</v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    minus() {
      if (this.counter > 0) this.counter--
    },
    plus() {
      this.counter++
    },
  },
}
</script>

<style lang="scss" scoped></style>
