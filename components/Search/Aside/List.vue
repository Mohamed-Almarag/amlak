<template>
  <v-card class="mx-auto" tile flat rounded>
    <v-list dense rounded class="grey lighten-4">
      <v-subheader class="font-weight-bold">{{ title }}</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" color="green">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ['items', 'title'],
  data() {
    return {
      selectedItem: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
</style>
