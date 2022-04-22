<template>
  <v-card width="100%" flat outlined @click="goNext">
    <v-card-text>
      <div class="text-capitalize">{{ type }}</div>
      <p class="text-h6 black--text">{{ title }}</p>
      <div class="text--grey">{{ description }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['description', 'type', 'title'],
  methods: {
    goNext() {
      if (this.type == 'adress') this.$router.push('storement')
    },
  },
}
</script>

<style lang="scss" scoped></style>
