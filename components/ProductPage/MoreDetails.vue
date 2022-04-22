<template>
  <div class="my-5">
    <v-toolbar class="grey lighten-3 rounded-t" flat>
      <template v-slot:extension>
        <v-tabs v-model="tab">
          <v-tabs-slider color="primay" class="py-2 rounded"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat rounded="0">
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ['web', 'Reviews 0', 'Author'],
      text: 'Lorem ipsum dolor sit amet, consectetur sdfsd12123 adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
}
</script>

<style lang="scss" scoped>
.v-tab {
  &.v-tab--active {
    color: #000;
  }
}
</style>
