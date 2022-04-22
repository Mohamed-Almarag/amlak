<template>
  <div class="">
    <v-row no-gutters class="mt-5">
      <div class="container-fluid">
        <div class="cover">
          <div class="container-fluid">
            <ReusableSimbleCover
              :title="$t('Courses')"
              :img="img"
              :myClass="'w-100'"
            />
          </div>
        </div>
        <CoursesTopCourses class="my-5" :topCourses="topCourses" />
      </div>
      <!-- <v-container>
        <HomeSlider />

        
      </v-container> -->

      <v-container>
        <div v-if="errors">
          <transition name="error" appear v-if="errors">
            <ReusableErrors :errors="errors" />
          </transition>
        </div>

        <!-- <div>
        <ReusableDialog
          :dialog="isDialog"
          :title="$t('alert')"
          :msg="
            $t(
              `you are logged in right now, if you want to continue, we'll log you out to continue the process!`
            )
          "
          :methodHandler="logoutHandler"
          :dialogHandler="dialogHandler"
          :btnText="$t('logout')"
        />
      </div> -->

        <!-- <ReusableHeadTitle :msg="$t('Notifications System')" /> -->
        <!-- <ReusableNotifyBox
        :btnSubmit="subscribeBtn"
        color="green"
        :btnTxt="$t('subscribe')"
      /> -->
      </v-container>

      <!-- <ReusableHeadTitle :msg="$t(`Best selling products`)" /> -->
      <!-- <HomeProductsSlider :items="products" /> -->

      <!-- Seperator poster -->
      <!-- <ReusableSeperatorPoster :img="posterImage" /> -->

      <!-- <ReusableHeadTitle :msg="$t('Best seller')" /> -->
      <!-- <HomeBestSeller :items="products" :show="showSpans" /> -->
      <CoursesTypes
        :show="showSpans"
        :freeCourses="freeCourses"
        :sponsorCourses="sponsorCourses"
        :paidCourses="paidCourses"
      />

      <!-- <ReusableHeadTitle msg="Camera" /> -->
      <!-- <HomeRecentlyAdded /> -->

      <!-- <ReusableHeadTitle msg="Watch" /> -->
      <!-- <HomeProductsSlider :items="products" /> -->

      <!-- Seperator poster -->
      <!-- <ReusableSeperatorPoster :img="posterImage" /> -->

      <!-- <v-container>
      <ReusableHeadTitle msg="Featured Products" />
      <v-row no-gutters justify="center" align-content="center">
        <v-col cols="6" lg="4" sm="6" v-for="item in products" :key="item.id">
          <ReusableRowProductCard :item="item" />
        </v-col>
      </v-row>
    </v-container> -->
    </v-row>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Courses',
  },
  data() {
    return {
      companies: 'https://offers-egy.com/frontend/assets/images/networks.jpeg',
      cards: [
        {
          id: 1,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 2,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 3,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 4,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 5,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 6,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 7,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
        {
          id: 8,
          title: 'Card text',
          author: 'Ahmed Ragab',
          images: require('@/assets/images/products/watch.svg'),
        },
      ],
      posterImage: require('@/assets/images/poster.jpg'),
      showSpans: true,
      isDialog: false,
      id: this.$route.params.slug,
      img: require('@/assets/images/courses/imgCover.png'),
    }
  },
  created() {
    this.getHomeProducts(this.$route.params.id)

    this.getCourses()
    this.getTopCourses()
    this.getFreeCourses()
    this.getSponsorCourses()
    this.getPaidCourses()
  },
  computed: {
    state_controller() {
      return this.$store.state.offer.SubscribeRequest
    },
    errors() {
      return this.$store.state.Errors
    },
    products() {
      return this.$store.state.products.Products
    },
    courses() {
      return this.$store.state.courses.Courses
    },
    topCourses() {
      return this.$store.state.courses.TopCourses
    },
    freeCourses() {
      return this.$store.state.courses.FreeCourses
    },
    sponsorCourses() {
      return this.$store.state.courses.SponsorCourses
    },
    paidCourses() {
      return this.$store.state.courses.PaidCourses
    },
  },
  methods: {
    subscribeBtn(userInfo) {
      this.$cookiz.set('subscribtion_info', userInfo)
      this.$store.dispatch('offer/postSebscribeRequest', userInfo).then(() => {
        if (this.$store.state.offer.SubscribeRequest) {
          this.$router.push('/notify')
        }
      })
    },
    getHomeProducts(payload) {
      this.$store.dispatch('products/getProducts', payload)
    },
    getCourses() {
      this.$store.dispatch('courses/getCourses')
    },
    getTopCourses() {
      this.$store.dispatch('courses/getTopCourses')
    },
    getFreeCourses() {
      this.$store.dispatch('courses/getFreeCourses')
    },
    getSponsorCourses() {
      this.$store.dispatch('courses/getSponsorCourses')
    },
    getPaidCourses() {
      this.$store.dispatch('courses/getPaidCourses')
    },
  },
  // middleware: 'authentiacteUser',
}
</script>
<style lang="scss">

</style>
