<template>
  <v-container>
    <v-carousel hide-delimiters cycle show-arrows>
      <h2 class="my-5">Top <span class="categories colored-span">
        {{$t('Courses')}}
        </span></h2>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <!-- <p class="text-white paragraph">{{ item.text }}</p> -->
      </v-carousel-item>
    </v-carousel>
    <p class="lead my-5">
      Architectural Engineering, Also Known As Building Engineering Or
      Architecture Engineering, Is An Engineering Discipline That Deals With The
      Technological Aspects And Multi-Disciplinary Approach To Planning, Design,
      Construction And Operation Of Buildings, Such As Analysis And Integrated
      Design Of Environmental Systems (Energy Conservation, HVAC, Plumbing,
      Lighting, Fire Protection, Acoustics, Vertical And Horizontal
      Transportation, Electrical Power Systems), Structural Systems, Behavior
      And Properties Of Building Components And Materials, And Construction
      Management.[1][2]
    </p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require('../../assets/images/slider/4.jpg'),
          text: 'paragraph 1',
        },
        {
          src: require('../../assets/images/slider/2.jpg'),
          text: 'paragraph 2',
        },

        {
          src: require('../../assets/images/slider/1.jpg'),
          text: 'paragraph 3',
        },
        {
          src: require('../../assets/images/slider/3.jpg'),
          text: 'paragraph 4',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.categories {
  color: $colored-span;
}
.paragraph {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.lead {
  color: #707070;
}
</style>