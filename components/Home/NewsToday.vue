<template>
  <div>
    <div class="container-fluid">
      <h2>
        {{$t('today\'s news')}}
      </h2>
    </div>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12" lg="4" md="4" sm="12" v-for="item in slider" :key="item.id">
          <img
            :src="item.src"
            class="img-fluid bg-transparent m-auto my-5"
            draggable="false"
            width="250"
          />
          <h6>
            {{ item.title }}
          </h6>
          <p>
            {{ item.desc }}
          </p>
        </v-col>
      </v-row>
      <!-- <pagination :perPage="perPage" :total="total"></pagination> -->
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slider: [
        {
          src: require('@/assets/images/amlak.png'),
          title: this.$i18n.t('title 1'),
          desc: 'desc 1',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 2',
          desc: 'desc 2',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 3',
          desc: 'desc 3',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 4',
          desc: 'desc 4',
        },
      ],
    }
  },
}
</script>

<style>
</style>