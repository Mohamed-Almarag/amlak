<template>
  <v-container>
    <h4 class="my-4">Storement Methods</h4>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <CartAddressCard
          :type="storement.type"
          :description="storement.description"
          :title="storement.title"
        />
      </v-col>
    </v-row>
    <v-divider class="my-5"> </v-divider>

    <h4 class="my-4">Your Address</h4>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <CartAddressCard
          :type="adress.type"
          :description="adress.description"
          :title="adress.title"
        />
      </v-col>
    </v-row>

    <v-divider class="my-5"> </v-divider>

    <h4 class="my-4">Your Cart Products</h4>
    <v-row>
      <v-col cols="12">
        <CartTable />
      </v-col>
    </v-row>

    <div class="mt-5">
      <CartAction
        btn="continue"
        :input="false"
        :price="false"
        to="personal-data"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      storement: {
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, commodi!',
        type: 'Rent',
        title: 'Storement methods',
      },
      adress: {
        description: 'Elmounib/Giza/Egypt',
        type: 'adress',
        title: 'Ahmed Ragab',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
