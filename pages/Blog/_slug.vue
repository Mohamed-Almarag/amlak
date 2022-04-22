<template>
  <div class="my-5">
    <div class="cover-img">
      <div class="container-fluid">
        <img
          :src="article.cover_photo"
          alt="event-image"
          class="img-fluid w-100 event-image"
          draggable="false"
        />
      </div>
      <!-- <div class="container-fluid">
        <ReusableSimbleCover :title="$t('')" :img="article.cover_photo" class="m-auto w-100" />
      </div> -->
    </div>
    <div class="container">
      <div class="cover-holder">
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
        </div>
        <div class="rating">4/8 rating</div> -->
        <div class="events-holder">
          <div class="my-4">
            <h1 class="py-5">{{ article.name }}</h1>
            <div class="row data-holder">
              <div class="col-md-8 col-sm-12">
                <div class="first">
                  <p class="pr-4" v-html="article.description"></p>
                </div>
                <div class="my-5">
                  <h2>
                    {{ $t('Book Link') }}
                  </h2>
                  <a
                    href="https://en.wikipedia.org/wiki/The_Brokerhttps://en.wikipedia.org/wiki/The_Broker"
                    target="_blank"
                  >
                    https://en.wikipedia.org/wiki/The_Brokerhttps://en.wikipedia.org/wiki/The_Broker</a
                  >
                </div>
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

                  <BlogSingleRightSide :is-sidebar="isSidebar" />
                </div>
              </aside>
            </div>
            <div class="fearured-books">
              <h3 class="bordered-bottom">
                {{ $t('Featured Book') }}
              </h3>
              <div class="ordinary-slider">
                <div class="top-right">
                  <VueSlickCarousel
                    v-bind="slickOptions"
                    class="text-center"
                    v-if="Bslider.length"
                  >
                    <div v-for="item in Bslider" :key="item.id">
                      <nuxt-link :to="`/blog/${item.id}`">
                        <img
                          v-if="item.cover_photo"
                          :src="item.cover_photo"
                          class="img-fluid bg-transparent m-auto my-5"
                          draggable="false"
                          width="300"
                        />
                      </nuxt-link>

                      <nuxt-link
                        :to="`/blog/${item.id}`"
                        class="text-decoration-none"
                      >
                        <h6>
                          {{ item.name }}
                        </h6>
                      </nuxt-link>
                      <nuxt-link
                        :to="`/blog/${item.id}`"
                        class="text-decoration-none"
                      >
                        <p class="text-dimied">
                          {{ item.description | shorten(40, '...') }}
                        </p>
                      </nuxt-link>
                    </div>
                  </VueSlickCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { baseUrl } from '@/API/axios'
import { getMethods } from '@/API/helpers'
export default {
  data() {
    return {
      id: this.$route.params.slug,
      slickOptions: {
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        infinite: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
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
      article:[],
      isSidebar: true,
      loaded: false,
      imageCover: require('@/assets/images/articles/siCover.png'),
    }
  },
  mounted: function () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, {
      passive: true,
    })
  },
  created() {
    this.articlesBottomSlider()
    this.getArticle()
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
    getArticle() {
      getMethods(`${baseUrl}articles/${this.id}`)
        .then((resp) => {
          console.log(resp)
          this.article = resp.data.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    articlesBottomSlider() {
      this.$store.dispatch('articles/articlesBottomSlider')
    },
  },
  computed: {
    Bslider() {
      return this.$store.state.articles.Bslider
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
  padding: 0px !important;
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
  .divided {
    width: 90%;
    margin: auto;
  }
}
.data-holder {
  padding: 3% 0;
}
.fearured-books {
  margin: 5% 0;
}
.event-image{
  height: 70vh;
}
</style>