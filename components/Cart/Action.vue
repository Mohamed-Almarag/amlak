<template>
  <v-container>
    <v-row no-gutters justify="center" align-content="center">
      <v-col cols="12" md="3" sm="6" class="d-flex justify-start align-center">
        <v-btn text color="grey" class="text--black" rounded @click="goBack">
          <v-icon left v-if="this.$vuetify.rtl == false">mdi-arrow-left</v-icon>
          <v-icon left v-else>mdi-arrow-right</v-icon>
          Back
        </v-btn>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-text-field
          label="Promo code"
          color="grey"
          outlined
          rounded
          dense
          append-icon="mdi-android-messages"
          prepend-icon=""
          class="mt-5"
          v-if="input"
        ></v-text-field>
      </v-col>
      <v-col cols="6" md="3" sm="6" class="d-flex justify-center align-center">
        <h4 class="text-center" v-if="price">total cost: 1234$</h4>
      </v-col>
      <v-col cols="6" md="3" sm="6" class="d-flex justify-center align-center">
        <v-btn color="green" text elevation="0" rounded block @click="goNext">{{
          btn
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['btn', 'input', 'price', 'to'],
  methods: {
    goBack() {
      this.$router.back()
    },
    goNext() {
      this.$route.path == '/cart'
        ? this.$router.replace(`cart/${this.to}`)
        : this.$router.replace(`${this.to}`)
    },
  },
}
</script>

<style lang="scss" scoped></style>
