<template>
  <div>
    <div class="cover">
      <div class="container-fluid">
        <ReusableSimbleCover
          :title="$t('Auctions')"
          :imgSrc="'@/assets/images/classified/cover.png'"
          :myClass="'w-100'"
        />
      </div>
    </div>
    <div class="ordinary-slider">
      <div class="bottom">
        <div class="auctionCarousel">
          <VueSlickCarousel v-bind="slickOptions" class="">
            <div v-for="item in slider" :key="item.id">
              <img
                :src="item.src"
                class="img-fluid bg-transparent m-auto my-5"
                draggable="false"
                width="300"
              />
              <div class="data-holder">
                <div class="container-fluid">
                  <div class="row">
                    <div
                      class="
                        col-md-8 col-sm-12
                        mb-3
                        d-flex
                        justify-content-start
                        flex-column
                      "
                    >
                      <h6>
                        {{ item.title }}
                      </h6>
                      <div class="time-holder">
                        <span class="mr-2">
                          <i class="far fa-clock"></i>
                        </span>
                        <span>
                          {{ item.time }}
                        </span>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12  d-flex justify-content-center align-items-center">
                      <button class="btn btn-light px-11 ">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
    <div class="container mt-15">
      <div class="events-holder my-5">
        <h2 class="bordered-bottom d-inline-block">
          {{ $t('Auctions') }}
        </h2>
        <div class="my-4">
          <div class="row">
            <div class="col-md-8 col-sm-12">
              <AuctionsLeftSide />
            </div>
            <aside class="col-lg-4">
              <div class="holder">
                <button class="sidebar-fixed-toggler" @click="toggleSidebar">
                  <i class="fas fa-cog fa-2x"></i>
                </button>

                <div class="sidebar-filter-overlay" @click="hideSidebar"></div>

                <AuctionsRightSide :is-sidebar="isSidebar" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Auctions',
  },
  data() {
    return {
      slickOptions: {
        arrows: true,

        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
      slider: [
        {
          src: require('@/assets/images/amlak.png'),
          title: 'Heliopolis House Auction',
          time: '20 : 13 : 40',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'home title 2 data',
          time: 'time 2',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'home title 3 data',
          time: 'time 3 data',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'home title 4 data',
          time: 'time 4',
        },
      ],
      isSidebar: true,
      loaded: false,
    }
  },
  mounted: function () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, {
      passive: true,
    })
  },
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
  },
}
</script>

<style lang="scss" scoped >
.data-holder {
  background: #000;
  color: #fff;
  padding: 3% 1%;
}
</style>