<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="6" class="d-flex justify-start flex-wrap">
        <CartAddressCard
          :type="type"
          :description="description"
          :title="title"
        />
      </v-col>
    </v-row>

    <!-- Create adress btn -->

    <div class="mt-5">
      <v-btn text rounded color="blue" @click="showCreate" v-if="!create">
        <i class="bi bi-cloud-plus"></i> Create a new one
      </v-btn>
    </div>

    <!-- Create a new address -->

    <v-row v-if="create">
      <v-col cols="12" sm="6">
        <CartAddressCreate />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      create: false,
      description: 'Elmounib/Giza/Egypt',
      type: 'adress',
      title: 'Ahmed Ragab',
    }
  },
  methods: {
    showCreate() {
      this.create = !this.create
    },
  },
}
</script>

<style lang="scss" scoped></style>
