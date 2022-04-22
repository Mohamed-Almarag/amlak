<template>
  <v-container class="mb-10">
    <v-carousel hide-delimiters show-arrows-on-hover height="auto">
      <template v-for="(item, index) in items">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row class="flex-nowrap" style="height: 100%">
            <template v-for="(n, i) in columns">
              <template v-if="+index + i < items.length">
                <v-col :key="i" class="d-flex justify-center align-center">
                  <v-sheet
                    v-if="+index + i < items.length"
                    height="100%"
                    max-width="220"
                    class="py-5"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <ReusableRatedCard
                        :show="false"
                        :item="item"
                        :loading="false"
                      />
                      <!-- <slot></slot> -->
                    </v-row>
                  </v-sheet>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>

    <div>
      <ReusableLoadMore />
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      model: 0,
    }
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 1
      }

      if (this.$vuetify.breakpoint.lg) {
        return 1
      }

      if (this.$vuetify.breakpoint.md) {
        return 3
      }
      if (this.$vuetify.breakpoint.sm) {
        return 2
      }

      return 2
    },
  },
}
</script>

<style lang="scss" scoped>
.v-sheet {
  @media (max-width: 480px) {
    max-width: 150px;
  }
}
</style>
