<template>
  <v-carousel hide-delimiters cycle show-arrows>
    <h2 class="my-5">
      Top
      <span class="categories colored-span">
        {{ $t('Courses') }}
      </span>
    </h2>
    <v-carousel-item v-for="(item, i) in topCourses" :key="i" :src="item.photo">
      <div class="textsts">
        <p class="pay_type">
          {{ item.pay_type }}
        </p>
        <nuxt-link :to="`/courses/${item.id}`" class="text-decoration-none">
          <h2 class="text-white paragraph">{{ item.title }}</h2>
        </nuxt-link>

        <nuxt-link :to="`/courses/${item.id}`" class="text-decoration-none">
          <p class="text-white lead my-5">
            {{ item.description | shorten(100, '...') }}
          </p>
        </nuxt-link>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['topCourses'],
  data() {
    return {
      // items: [
      //   {
      //     src: require('../../assets/images/slider/4.jpg'),
      //     text: 'paragraph 1',
      //   },
      //   {
      //     src: require('../../assets/images/slider/2.jpg'),
      //     text: 'paragraph 2',
      //   },
      //   {
      //     src: require('../../assets/images/slider/1.jpg'),
      //     text: 'paragraph 3',
      //   },
      //   {
      //     src: require('../../assets/images/slider/3.jpg'),
      //     text: 'paragraph 4',
      //   },
      // ],
    }
  },
}
</script>

<style lang="scss" scoped>
.categories {
  color: $colored-span;
}
.textsts {
  position: absolute;
  bottom: 20%;
  left: 10%;
  // right: 0;
  z-index: 5;
  transform: translate(-10%, -20%);
}
.lead {
  color: #707070;
}
.pay_type {
  background: #14395b;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
}
.para {
  position: absolute;
  bottom: -20%;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  text-align: center;
}
</style>