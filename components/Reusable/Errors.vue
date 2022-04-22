<template>
  <v-container>
    <div v-if="errors">
      <div>
        <v-alert border="right" colored-border type="error" elevation="2">
          {{ errors.message }}
        </v-alert>
      </div>
      <div v-if="errors.errors">
        <v-alert
          border="top"
          color="red lighten-2"
          dark
          dense
          v-for="(error, i) in errors.errors"
          :key="i"
        >
          <span v-for="(err, i) in error" :key="i">
            {{ err }}
          </span>
        </v-alert>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['errors'],
}
</script>

<style lang="scss" scoped></style>
