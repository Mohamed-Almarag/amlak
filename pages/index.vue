<template>
  <div>
    <v-container>
      <div class="row text-center my-5">
        <div class="col-md-4 col-sm-12">
          <div class="image">
            <nuxt-link to="/" exact>
              <b-img
                src="@/assets/images/amlak.png"
                alt="Responsive image"
                width="200"
              ></b-img>
            </nuxt-link>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="image-holder">
            <b-img
              src="@/assets/images/home/adds.png"
              fluid
              alt="Responsive image"
              height="500"
            ></b-img>
          </div>
        </div>
        <div class="col-md-4 col-sm-12">
          <div class="image-holder">
            <b-img
              src="@/assets/images/home/adds.png"
              fluid
              alt="Responsive image"
              height="500"
            ></b-img>
          </div>
        </div>
      </div>
    </v-container>
    <HomeNewsSlider />
    <HomeCover />
    <div class="ordinary-slider">
      <div class="top">
        <div class="" v-if="$i18n.locale == 'en' && Sliders">
          <HomeNewsCarousel 
            :title1="$t('fast')"
            :title2="$t('newss')"
            :toShow="3"
            :toScroll="3"
            :sliders="Sliders"
          />
        </div>

        <div class="" v-if="$i18n.locale !== 'en' && Sliders">
          <HomeNewsCarousel
            :title2="$t('fast')"
            :title1="$t('newss')"
            :toShow="3"
            :toScroll="3"
            :sliders="Sliders"
          />
        </div>
      </div>
    </div>
    <HomeDivisionSection />

    <HomeVideoSlider />
    <HomeNewsToday />
    <HomeUnits />
    <HomeSuccessRoute />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home Page',
  },
  data() {
    return {
      // slider: [
      //   {
      //     src: require('@/assets/images/amlak.png'),
      //     title: 'home title 1 data',
      //     desc: 'desc 1',
      //   },
      //   {
      //     src: require('@/assets/images/amlak.png'),
      //     title: 'home title 2 data',
      //     desc: 'desc 2',
      //   },
      //   {
      //     src: require('@/assets/images/amlak.png'),
      //     title: 'home title 3 data',
      //     desc: 'desc 3 data',
      //   },
      //   {
      //     src: require('@/assets/images/amlak.png'),
      //     title: 'home title 4 data',
      //     desc: 'desc 4',
      //   },
      // ],
    }
  },
  methods: {
    getSliders() {
      return this.$store.dispatch('slider/getSliders')
    },
  },
  created() {
    this.getSliders()
    // console.log('page Sliders', this.Sliders)
  },
  computed: {
    Sliders() {
      return this.$store.state.slider.Sliders
    },
  },
}
</script>

<style lang="scss" scoped >
</style>