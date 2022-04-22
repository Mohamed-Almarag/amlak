<template>
  <div class="my-5">
    <div class="container">
      <div class="cover-holder">
        <div class="cover-img">
          <img
            :src="neww.cover_photo"
            alt="event-image"
            class="img-fluid w-100"
          />
        </div>
        <!-- <div class="cover-data">
          <h2 class="h1 title">
            {{ $t('Real Estate Brokers Group In Egypt') }}
          </h2>
          <div class="d-flex">
            <span>
              <i class="fas fa-tachometer-alt"></i>
            </span>
            <span>10.00 AM 20 / 9 / 2021</span>
          </div>
          <div class="d-flex">
            <span>
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <span>
              {{ $t('Egypt International Exhibition Center, Cairo, Egypt') }}
            </span>
          </div>
        </div> -->
        <!-- <div class="rating">4/8 rating</div> -->

        <div class="slider-holder" >
          <div class="ordinary-slider">
            <div class="middle">
              <VueSlickCarousel
                v-bind="slickOptions"
                class="text-center"
                v-if="neww.file && neww.file.length > 0"
              >
                <div v-for="item in neww.file" :key="item.id">
                  <img
                    v-if="item.filename"
                    :src="item.filename"
                    class="
                      img-fluid
                      bg-transparent
                      m-auto
                      my-5
                      w-100
                      file-image
                    "
                    draggable="false"
                  />
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </div>
        <div class="events-holder">
          <div class="first" v-if="neww.name">
            <h2 class="h3 bordered-bottom">
              {{neww.name}}
            </h2>
            <p class="my-4 pr-4" v-html="neww.description"></p>
          </div>
          <div class="my-5">
            <div class="row divided">
              <div class="col-md-6 col-sm-12">
                <div class="title">
                  <h5>
                    {{ $t('Timings') }}
                  </h5>
                </div>
                <p>
                  {{neww.time}}
                </p>
              </div>
              <!-- <div class="col-md-4 col-sm-12">
                <div class="title">
                  <h5>
                    {{ $t('Entry Fees') }}
                  </h5>
                </div>
                <p>{{ $t('neww payment') }}</p>
              </div> -->
              <!-- <div class="col-md-4 col-sm-12">
                <div class="title">
                  <h5>
                    {{ $t('Editions') }}
                  </h5>
                </div>
                <p>10:00 AM - 8:00 PM (Business)</p>
              </div> -->
              <div class="col-md-6 col-sm-12">
                <div class="title">
                  <h5>
                    {{ $t('Category & Type') }}
                  </h5>
                </div>
                <p v-if="neww.name">
                  {{neww.type.name}}
                </p>
              </div>
            </div>
          </div>
          <div class="my-4">
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <NewsSingleLeftSide :neww="neww" :pageName="pageName" />
              </div>
              <aside class="col-lg-4">
                <div class="holder">
                  <button class="sidebar-fixed-toggler" @click="toggleSidebar">
                    <i class="fas fa-cog fa-2x"></i>
                  </button>

                  <div
                    class="sidebar-filter-overlay"
                    @click="hideSidebar"
                  ></div>

                  <NewsSingleRightSide :is-sidebar="isSidebar" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.slug,
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
              dots: true,
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
              dots: true,
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
      pageName:'news'
    }
  },
  mounted: function () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, {
      passive: true,
    })
  },
  created() {
    this.getNew(this.id)
    console.log(this.$store.state.news.New);
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
    getNew(id) {
      this.$store.dispatch('news/getNew', id)
    },
  },
  computed: {
    neww() {
      return this.$store.state.news.New
    },
  },
}
</script>

<style lang="scss" scoped>
.cover-holder {
  position: relative;
  .cover-data {
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(-10%, -50%);
    .title {
      color: #fff;
      font-size: 40px !important;
    }
    .d-flex {
      color: #2fba4b;
      font-size: 30px;
    }
  }
  .cover-img {
    img {
      @media (max-width: 992px) {
        min-height: 100vh;
      }
    }
  }
  .rating {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    font-size: 15px;
    background: #004773;
    color: #fff;
    border-radius: 5px;
  }
}
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

.bordered-bottom {
  color: #004773;
}
.events-holder {
  .first {
    padding: 5% 0;
  }
  .divided {
    width: 90%;
    margin: auto;
  }
}
.file-image {
  max-height: 70vh;
  background-size: cover;
}
</style>