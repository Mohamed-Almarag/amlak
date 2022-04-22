<template>
  <div>
    <div class="container">
      <div class="gallery">
        <h2>Villa In Sharm El Sheikh For Sale</h2>
        <p class="text-dimied">
          Ten Rooms, Two Bathrooms, 270 Square Meters And A Private Garage
        </p>
        <div class="gallery-holder">
          <div class="row">
            <div class="col-md-9 col-sm-12">
              <div>
                <div
                  class="lightbox"
                  v-show="lightboxActive"
                  @click.self="
                    lightboxActive = false
                    currLightboxImg = currImgIdx
                  "
                >
                  <img
                    :src="imgList[currLightboxImg].src"
                    draggable="false"
                    class="img-fluid"
                  />
                  <button
                    class="prev border-none shadow-none"
                    @click="goToImg(currLightboxImg - 1)"
                  >
                    <i class="fas fa-chevron-left fa-2x text-white"></i>
                  </button>
                  <button
                    class="next border-none shadow-none"
                    @click="goToImg(currLightboxImg + 1)"
                  >
                    <i class="fas fa-chevron-right fa-2x text-white"></i>
                  </button>
                </div>
                <img
                  class="currImg img-fluid w-100"
                  :src="imgList[currImgIdx].src"
                  @click="lightboxActive = true"
                />
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div>
                <div
                  class="Carousel_chunk"
                  v-for="(chunk, i) in arrChunk"
                  v-show="currSlide == i"
                  :key="i"
                >
                  <div
                    class="chunk_item"
                    v-for="(item, j) in chunk"
                    :key="j"
                    @click="currImgIdx = j + i * chunkSize"
                    :class="{ CURR: item.src == imgList[currImgIdx].src }"
                  >
                    <img :src="item.src" class="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="Carousel">
            <!-- <div class="Carousel-controls">
          <svg
            @click="prev"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="gold"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 8 8 12 12 16"></polyline>
            <line x1="16" y1="12" x2="8" y2="12"></line>
          </svg>
          <div
            class="Carousel-controls_dot"
            v-for="(dot, i) in arrChunk"
            :key="i"
            :class="{ CURR: currSlide == i }"
            @click="goToChunk(i)"
          >
            {{ i + 1 }}
          </div>
          <svg
            @click="next"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="gold"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 16 16 12 12 8"></polyline>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div> -->
          </div>
        </div>
      </div>
      <div class="comunication-details">
        <div class="row">
          <div class="col-md-3 col-sm-12">
            <div class="media mb-3">
              <i class="fas fa-user mr-3 fa-2x"></i>
              <div class="media-body">
                <h5 class="mt-0">Ahmed Ahmed</h5>
                <p class="text-dimied">On The Site From May 17Th</p>
              </div>
            </div>
            <div class="media mb-3">
              <i class="fas fa-mobile-alt mr-3 fa-2x"></i>
              <div class="media-body">
                <h5 class="mt-0">05515 55656 66</h5>
              </div>
            </div>
            <div class="media mb-3">
              <i class="fas fa-map-marked-alt mr-3 fa-2x"></i>
              <div class="media-body">
                <h5 class="mt-0">Cairo / Egypt</h5>
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            <p>
              Furnished apartment for rent in New Cairo South Academy Villas B
              Required 12000 thousand pounds final 2 rooms and 2 bathrooms,
              fully air-conditioned Contract period of one year Required 12,000
              thousand pounds, a distinctive location, we have different
              apartments at discounted prices, Nour El-Din Real Estate Marketing
              Company, on WhatsApp
            </p>
          </div>
        </div>
        <div class="field my-5">
          <h2>Send Message</h2>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  solo
                  name="input-7-4"
                  label="Help Other Visitors By Sharing Your Review."
                  append-icon="mdi-pencil-outline"
                  rows="8"
                  auto-grow
                ></v-textarea>
              </v-col>
            </v-row>
            <button
              class="btn btn-dark text-white send-Btn"
              @click.prevent="send"
            >
              {{ $t('Send') }}
            </button>
          </v-form>
        </div>
      </div>
      <div class="slide">
        <div class="ordinary-slider">
          <div class="top">
            <HomeNewsCarousel
              :sliders="slider"
              :title1="$t('Featured')"
              :title2="$t('News')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Details',
  },
  data() {
    return {
      chunkSize: 4,
      imgList: [],
      currSlide: 0,
      currImgIdx: 15,
      transition_name: 'slide_next',
      lightboxActive: false,
      currLightboxImg: 15,
      slider: [
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 1 data',
          desc: 'desc 1',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 2 data',
          desc: 'desc 2',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 3 data',
          desc: 'desc 3 data',
        },
        {
          src: require('@/assets/images/amlak.png'),
          title: 'title 4 data',
          desc: 'desc 4',
        },
      ],
    }
  },
  watch: {
    currImgIdx(newVal) {
      this.currLightboxImg = newVal
    },
  },
  computed: {
    arrChunk() {
      return Array.from(
        { length: Math.ceil(this.imgList.length / this.chunkSize) },
        (v, i) =>
          this.imgList.slice(
            i * this.chunkSize,
            i * this.chunkSize + this.chunkSize
          )
      )
    },
  },
  methods: {
    prev() {
      this.transition_name = 'slide_prev'
      this.currSlide =
        this.currSlide == 0 ? this.arrChunk.length - 1 : this.currSlide - 1
    },
    next() {
      this.transition_name = 'slide_next'
      this.currSlide =
        this.currSlide == this.arrChunk.length - 1 ? 0 : this.currSlide + 1
    },
    goToImg(n) {
      this.currLightboxImg =
        n < 0 ? this.imgList.length - 1 : n % this.imgList.length
    },
    goToChunk(idx) {
      this.transition_name = idx < this.currSlide ? 'slide_prev' : 'slide_next'
      this.currSlide = idx
    },
  },
  created() {
    this.imgList = Array.from({ length: 33 }, (v, i) => ({
      src: `//raw.githubusercontent.com/codrops/HoverEffectIdeas/master/img/${
        i + 1
      }.jpg`,
    }))
  },
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  height: 100vh;
}
.CROP {
  height: 96px;
  // overflow: hidden;
  width: 100%;
  padding: 8px 0;
}
.Carousel {
  margin: auto;
  width: 480px;
  .currImg {
    cursor: pointer;
  }
}
.currImg {
  cursor: pointer;
}
.Carousel_chunk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 76vh;
  overflow-y: scroll;
  @media (max-width: 991.98px) {
    flex-direction: row;
    height: 15vh;
    overflow-y: hidden;
    overflow-x: scroll;
  }
}
.chunk_item {
  // height: 80px;
  margin: 2px;
  padding: 2px;
  width: 68%;
  margin-right: auto;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    border: 1px solid #2196f3;
  }
  &.CURR {
    background: $main-color;
    outline: 2px solid #000;
    border-color: transparent;
  }
  img {
    display: inline-block;
    height: 100%;
  }
}
.Carousel-controls {
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    &:hover {
      fill: #ff0;
    }
  }
}
.Carousel-controls_dot,
.Carousel-controls svg {
  cursor: pointer;
}
.Carousel-controls_dot {
  border-radius: 50%;
  width: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  background-color: #222;
  font-family: sans-serif;
  font-size: 0.5em;
  color: #fff;
  &:hover {
    transform: scale(1.4, 1.4);
  }
  &.CURR {
    cursor: none;
    background-color: #ffd700;
    color: #000;
    font-weight: bold;
    transform: scale(1.4, 1.4);
  }
}
.slide_next-enter-active,
.slide_prev-enter-active {
  transition: transform 0.3s;
}
.slide_next-enter {
  transform: translateX(100%);
}
.slide_prev-enter {
  transform: translateX(-100%);
}
.lightbox {
  cursor: pointer;
  user-select: none;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #616574
    url("data:image/svg+xml;utf8,<svg xmlns='http: //www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 10 10' fill='none' stroke-linecap='round' stroke-linejoin='round' stroke='gold'><line x1='4' y1='4' x2='6' y2='6' /><line x1='6' y1='4' x2='4' y2='6' /></svg>")
    top right no-repeat;
  display: flex;
  img {
    cursor: default;
    margin: auto;
    max-width: 90%;
    max-height: 100%;
  }
}
.prev,
.next {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 60px;
  margin: -30px 4% 0;
  background: #444
    url("data:image/svg+xml;utf8,<svg xmlns='http: //www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='gold' d='M6,2 L4,5 L6,8'/></svg>")
    center/cover no-repeat;
}
.prev:hover,
.next:hover {
  background-color: #222;
}
.next {
  right: 0;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http: //www.w3.org/2000/svg' viewBox='0 0 10 10' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='gold' d='M4,2 L6,5 L4,8'/></svg>");
}
.gallery {
  margin: 6% 0;
}
textarea {
  resize: none !important;
}
.send-Btn {
  width: 20%;
}
</style>