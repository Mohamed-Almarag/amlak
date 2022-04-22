<template>
  <div class="mt-5">
    <div class="container">
      <div class="gallery-holder">
        <div class="live-photo">
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
            class="currImg img-fluid"
            :src="imgList[currImgIdx].src"
            @click="lightboxActive = true"
          />
        </div>
        <div class="container">
          <div class="small-images d-flex">
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
      <div class="description my-11">
        <p>
          Many have wondered why Badya is a creative city. It is so because it
          is developed in a way where everything is unique from its designs to
          its structures & landscape. The city as a whole is innovative &
          challenges the norm in every undertaking. Badya is a cultural hub for
          a modern and progressive Egypt, it’s the place that gives you a
          platform to prosper, exchange great ideas & engage with different
          cultures.
        </p>
        <p>
          If you are looking for something new, unseen and beautiful; Palm Hills
          Developments constantly works on having many well-established firsts.
          As Badya is our latest and greatest project, it is the epi-center of
          the new 6th of October city.
        </p>
        <p>
          While designing Badya we put these four main principles into action:
        </p>
        <p>Being accessible:</p>
      </div>
      <form action="">
        <div
          class="
            form-group
            d-flex
            justify-content-center
            align-items-center
            text-center
          "
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter the Bid value"
            class="form-control"
          />
        </div>
      </form>
      <div class="my-11">
        <div class="person-info" v-for="x in 5" :key="x.id">
          <div class="media">
            <div class="person-img">
              <img
                src="@/assets/images/auction/avatar.png"
                class="mr-3"
                alt="image"
              />
            </div>
            <div class="media-body">
              <h5 class="mt-0">Ahmed Ahmed</h5>
              <p class="m-0">EGYPT</p>
              <p class="text-success m-0">1250 $</p>
            </div>
          </div>
          <div class="w-50">
            <hr>
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
  height: 70vh;
  width: 100%;
  border-radius: 5px;
}
.Carousel_chunk {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 15vh;
  overflow-y: hidden;
}
.chunk_item {
  // height: 80px;
  margin: 2px;
  padding: 2px;
  width: 68%;
  margin-right: auto;
  // border: 1px solid transparent;
  cursor: pointer;
  opacity: 0.5;
  border-radius: 5px;
  &:hover {
    border: 1px solid #2196f3;
  }
  &.CURR {
    // background: $main-color;
    // outline: 2px solid #000;
    // border-color: transparent;
    opacity: 1;
  }
  img {
    display: inline-block;
    height: 100%;
    border-radius: 5px;
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
.form-group {
  width: 30% !important;
  margin: 10% auto;
}
::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder {
  /* Firefox 18- */
  text-align: center;
}

::-moz-placeholder {
  /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}
.person-img {
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
}
</style>