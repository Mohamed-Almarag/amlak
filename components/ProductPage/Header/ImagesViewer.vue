<template>
  <div class="images-viewer">
    <v-card flat class="px-2 py-4">
      <section class="cover-image">
        <zoom-on-hover :img-normal="image"></zoom-on-hover>
      </section>
      <div class="bullets mt-1">
        <div @click="image1">
          <img :src="img1" width="45" />
        </div>
        <div @click="image2">
          <img :src="img2" width="45" />
        </div>
        <div @click="image3">
          <img :src="img3" width="45" />
        </div>
        <div @click="image4">
          <img :src="img4" width="45" />
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image:
        'https://www.apple.com/v/macos/monterey/d/images/overview/hero/hero_fallback__bz4vu75puzma_large.png',
      img1: 'https://www.apple.com/v/macos/monterey/d/images/overview/hero/hero_fallback__bz4vu75puzma_large.png',
      img2: require('@/assets/images/products/watch.svg'),
      img3: require('@/assets/images/products/special-camera.svg'),
      img4: require('@/assets/images/products/mac.svg'),
    }
  },
  methods: {
    image1() {
      this.image = this.img1
    },
    image2() {
      this.image = this.img2
    },
    image3() {
      this.image = this.img3
    },
    image4() {
      this.image = this.img4
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  &:hover {
    background-color: #fff !important;
  }

  .cover-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;

    div {
      width: 95vw / 3vw;
      cursor: pointer;
      border: 3px solid transparent;
      width: 80px;
      padding: 10px;
      transition: 0.4s;
      &:hover {
        transform: translateY(-15px);
        border: 3px solid currentColor;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
