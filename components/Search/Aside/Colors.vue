<template>
  <section class="colors grey lighten-4 my-5 pa-3 rounded">
    <v-subheader class="font-weight-bold">Colors</v-subheader>
    <v-container>
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
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
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

<style lang="scss" scoped>
.colors {
  width: 100%;
  .select-color {
    gap: 10px;

    div {
      display: flex;
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
}
</style>
