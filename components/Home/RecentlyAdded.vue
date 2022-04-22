<template>
  <v-container>
    <v-row no-gutters justify="center" align-content="center">
      <v-col cols="12" lg="6" order-lg="last">
        <ReusableRecentlySpecialCard :item="spcialProduct" />
      </v-col>
      <v-col cols="12" lg="6" order-lg="first">
        <v-row
          no-gutters
          justify="center"
          align-content="center"
          class="small-row"
        >
          <v-col
            cols="5"
            sm="6"
            class="d-flex justify-center align-center"
            v-for="(item, i) in items"
            :key="i"
          >
            <ReusableRecentlyCard :item="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'SONY Express',
          author: 'Ahmed Ragab',
          image: require('../../assets/images/products/camera.svg'),
          price: 24,
        },
        {
          id: 2,
          title: 'SONY Express',
          author: 'Ahmed Ragab',
          image: require('../../assets/images/products/camera.svg'),
          price: 76,
        },
        {
          id: 3,
          title: 'SONY Express',
          author: 'Ahmed Ragab',
          image: require('../../assets/images/products/camera.svg'),
          price: 99,
        },
        {
          id: 4,
          title: 'SONY Express',
          author: 'Ahmed Ragab',
          image: require('../../assets/images/products/camera.svg'),
          price: 87,
        },
      ],
      spcialProduct: {
        id: 1,
        image: require('../../assets/images/products/special-camera.svg'),
        title: 'Nike air force 1 shadow',
        subtitle: 'Brand nike',
        offer: 'Sale -50%',
        price: 49,
      },
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.v-card {
  background-color: #eee;
}
@media (max-width: 480px) {
  .small-row {
    gap: 10px;
  }
}
</style>
