<template>
  <div class="carousel-wrapper" :class="$i18n.locale">
    <h3 class="my-5">
      <span class="bordered-bottom">{{ title1 }}</span> {{ title2 }}
    </h3>
    <VueSlickCarousel
      v-bind="slickOptions"
      class="text-center"
      v-if="sliders.length"
      
    >
      <div v-for="item in sliders" :key="item.id">
        <nuxt-link to="/">
          <img v-if="item.image"
            :src="item.image"
            class="img-fluid bg-transparent m-auto my-5"
            draggable="false"
            width="300"
          />
          <img v-if="item.cover_photo"
            :src="item.cover_photo"
            class="img-fluid bg-transparent m-auto my-5"
            draggable="false"
            width="300"
          />

          <h6>
            {{ item.name }}
          </h6>
          <p>
            {{ item.description }}
          </p>
        </nuxt-link>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  props: ['sliders', 'title1', 'title2', 'toShow', 'toScroll'],
  data() {
    return {
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
    }
  },
}
</script>

<style lang="scss" >
.image-holder {
  border-radius: 10px;
  img {
    border-radius: inherit;

    background-size: cover;
  }
}
.ordinary-slider {
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

  .top {
    .slick-arrow {
      top: 0;
      bottom: auto;
      margin: 10px 0;
    }
  }
  .bottom {
    .slick-arrow {
      bottom: -5%;
      top: auto;
      margin: 10px 0;
    }
    .slick-prev {
      left: 46%;
      transform: translateX(-46%);
      @media (max-width: 992px) {
        left: 32%;
        transform: translateX(-32%);
      }
    }
    .slick-next {
      left: 52%;
      transform: translateX(-52%);
    }
  }
  .middle {
    .slick-arrow {
      left: auto;
      right: auto;
      bottom: 50%;
      top: 50%;
    }
    .slick-next {
      right: 0 !important;
      margin: 0;
    }
    .slick-prev {
      left: 0 !important;
      margin: 0;
    }
  }
  .top-right {
    .slick-arrow {
      top: -15%;
      margin: 10px 0;
    }
    .slick-prev {
      left: 91.5%;
      @media (max-width: 992px) {
        left: auto;
      }
    }
    .slick-next {
      right: 0;
      left: auto;
      @media (max-width: 992px) {
        right: 9%;
      }
    }
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
.ar {
  .ordinary-slider {
    .top {
      .slick-prev {
        right: 8% !important;
        left: auto;
      }
      .slick-next {
        right: 3%;
        left: auto;
      }
    }
  }
}
.slick-track {
  padding-top: 3%;
}
</style>
