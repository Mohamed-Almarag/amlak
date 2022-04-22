<template>
  <div>
    <div class="container-fluid">
      <ReusableSimbleCover :title="$t('Events')" :img="imageCover" />
      <div class="">
        <div class="ordinary-slider">
          <div class="bottom">
            <VueSlickCarousel
              v-bind="slickOptions"
              class="text-center holder"
              v-if="sliders.length"
            >
              <div v-for="item in sliders" :key="item.id">
                <div
                  class="bg"
                  :style="{ backgroundImage: `url(${item.cover_photo})` }"
                >
                  <!-- <img
                    v-if="item.cover_photo"
                    :src="item.cover_photo"
                    class="img-fluid bg-transparent m-auto my-5 w-100"
                    draggable="false"
                  /> -->
                  <div class="info-holder text-white">
                    <h3>
                      {{ item.name }}
                    </h3>
                    <p class="" v-html="item.description"></p>
                  </div>
                </div>
              </div>
            </VueSlickCarousel>
          </div>
        </div>
      </div>
      <div class="events-holder my-5 pt-5">
        <h2 class="bordered-bottom colored-bottom d-inline-block">
          {{ $t('Events') }}
        </h2>
        <div class="my-4">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <EventsLeftSide :events="events" />
            </div>
            <aside class="col-lg-4">
              <div class="holder">
                <button class="sidebar-fixed-toggler" @click="toggleSidebar">
                  <i class="fas fa-cog fa-2x"></i>
                </button>

                <div class="sidebar-filter-overlay" @click="hideSidebar"></div>

                <EventsRightSide :is-sidebar="isSidebar" :sideData="sideData" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  head: {
    title: 'Events',
  },
  data() {
    return {
      isSidebar: true,
      loaded: false,
      slickOptions: {
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: this.toShow,
        slidesToScroll: this.toScroll,
        touchThreshold: 5,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: this.toShow,
              slidesToScroll: this.toScroll,
              infinite: true,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: true,
            },
          },
        ],
      },
      imageCover: require('@/assets/images/events/cover.png'),
    }
  },
  mounted: function () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, {
      passive: true,
    })
    this.getEvents()
    this.getReviews()
    this.sliderData()
    this.eventsAside()
  },
  // created(){

  // },
  destroyed: function () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    onScroll() {
      this.top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    },
    toggleSidebar: function () {
      if (
        document
          .querySelector('body')
          .classList.contains('sidebar-filter-active')
      ) {
        document.querySelector('body').classList.remove('sidebar-filter-active')
      } else {
        document.querySelector('body').classList.add('sidebar-filter-active')
      }
    },

    hideSidebar: function () {
      document.querySelector('body').classList.remove('sidebar-filter-active')
    },
    resizeHandler: function () {
      if (window.innerWidth > 991) this.isSidebar = false
      else this.isSidebar = true
    },
    getEvents() {
      return this.$store.dispatch('events/getEvents')
    },
    getReviews() {
      return this.$store.dispatch('events/getReviews')
    },
    sliderData() {
      return this.$store.dispatch('events/eventsSliderData')
    },
    eventsAside() {
      return this.$store.dispatch('events/eventsAside')
    },
  },
  computed: {
    events() {
      return this.$store.state.events.Events
    },
    sliders() {
      return this.$store.state.events.Sliders
    },
    reviews() {
      return this.$store.state.events.Reviews
    },
    sideData() {
      return this.$store.state.events.Aside
    },
  },
}
</script>

<style lang="scss" scoped >
.carousel-wrapper {
  padding: 40px;
}
.bottom {
  .image-holder {
    border-radius: 10px;
    img {
      border-radius: inherit;

      background-size: cover;
    }
  }
  .carousel-wrapper {
    padding: 40px;
  }
  .img-wrapper img {
    margin: auto;
    width: 200px;
    height: 100px;
    background-image: linear-gradient(gray 100%, transparent 0);
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 30px;
    font-family: 'FontAwesome 5 Free';
    background: #a1a1a1;
    padding: 5px 10px;
    color: #000;
  }

  .slick-arrow {
    bottom: 0;
    margin: 10px 0;
  }
  .slick-prev {
    left: 0;
    margin: 10px 0;
    z-index: 9;
  }
  .slick-next {
    left: 65px;
  }
  .slick-prev:before {
    background: #e8e8e8;
  }
}
.ordinary-slider .bottom .slick-arrow {
  bottom: -25% !important;
}
.cover {
  position: relative;
  .img-holder {
    img {
      border-radius: 10px;
    }
  }
  .cover-title {
    position: absolute;
    top: 40%;
    left: 7.7%;
    transform: translate(-7.7%, -40%);
    color: #fff;
    .title {
      font-size: 40px !important;
      font-weight: bold;
    }
  }
}
// .slick-slide {
//   position: relative !important;
//   .info-holder {
//     position: absolute;
//     top: 50%;
//     text-align: left;
//     left: 5%;
//     width: 50%;
//     transform: translate(-5%, -50%);
//   }
// }
.bg {
  min-height: 70vh;
  background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 7%;
  text-align: left;
  margin-bottom: 5%;
}
</style>