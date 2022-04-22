<template>
  <div>
    <header class="header-4 header-intro-clearance bg-transparent">
      <div class="d-block d-md-none p-4">
        <v-row no-gutters justify="center" align="center">
          <v-col class="pl-5">
            <nuxt-link to="/">
              <v-icon>mdi-home</v-icon>
            </nuxt-link>
          </v-col>
          <v-col class="d-flex justify-content-end pr-5">
            <v-icon @click="menuOpen">mdi-menu</v-icon>
          </v-col>
        </v-row>
      </div>
      <div class="d-none d-md-block">
        <div class="d-flex">
          <div
            class="
              myFloat
              d-flex
              justify-content-center
              align-items-center
              pl-5
            "
          >
            <nuxt-link to="/">
              <v-icon>mdi-home</v-icon>
            </nuxt-link>
          </div>
          <ul
            class="
              list-unstyled
              d-flex
              justify-content-center
              align-items-center
              p-4
              m-0
            "
          >
            <li :class="{ active: current == '/' }">
              <nuxt-link to="/" exact>
                {{ $t('nav.home') }}
              </nuxt-link>
            </li>
            <!-- <li :class="{ active: current == 'new-arrivals' }">
            <nuxt-link to="new-arrivals">new-arrivals</nuxt-link>
          </li> -->
            <!-- <li :class="{ active: current == 'trending' }">
            <nuxt-link to="trending">trending</nuxt-link>
          </li> -->
            <li :class="{ active: current == 'courses' }">
              <nuxt-link to="/courses">{{ $t('nav.courses') }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'details' }">
              <nuxt-link to="/details">{{ $t('nav.details') }}</nuxt-link>
            </li>
            <!-- <li :class="{ active: current == 'number' }">
            <nuxt-link to="number">number</nuxt-link>
          </li> -->
            <li :class="{ active: current == 'classifiedAds' }">
              <nuxt-link to="/classifiedAds">{{
                $t('nav.classified')
              }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'requests' }">
              <nuxt-link to="/requests">{{ $t('nav.requests') }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'about' }">
              <nuxt-link to="/about">{{ $t('nav.about') }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'events' }">
              <nuxt-link to="/events">{{ $t('nav.events') }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'news' }">
              <nuxt-link to="/news">{{ $t('nav.news') }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'blog' }">
              <nuxt-link to="/blog">{{ $t('nav.blogs') }}</nuxt-link>
            </li>
            <li :class="{ active: current == 'auctions' }">
              <nuxt-link to="/auctions">{{ $t('nav.auctions') }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  computed: {
    current: function () {
      if (this.$route.path.includes('auctions')) return 'auctions'
      if (this.$route.path.includes('courses')) return 'courses'
      if (this.$route.path.includes('articles')) return 'articles'
      if (this.$route.path.includes('number')) return 'number'
      if (this.$route.path.includes('classifiedAds')) return 'classifiedAds'
      if (this.$route.path.includes('requests')) return 'requests'
      if (this.$route.path.includes('about')) return 'about'
      if (this.$route.path.includes('events')) return 'events'
      if (this.$route.path.includes('news')) return 'news'
      if (this.$route.path.includes('blog')) return 'blog'
      return '/'
    },
    categories() {
      return this.$store.state.categories.Categories
    },
    subCategories() {
      return this.$store.state.categories.SubCategories
    },
    getParamId() {
      return this.$route.params.id
    },
    getHomeParamId() {
      return this.$route.name
    },
    isFullwidth: function () {
      return this.$route.path.includes('fullwidth')
    },
  },
  methods: {
    openMobileMenu: function () {
      document.querySelector('body').classList.add('mmenu-active')
    },
    viewAllDemos: function (e) {
      var list = document.querySelectorAll('.demo-list .hidden')
      for (let i = 0; i < list.length; i++) {
        list[i].classList.add('show')
      }

      e.currentTarget.parentElement.classList.add('d-none')
    },
    getCategories() {
      this.$store.dispatch('categories/getCategories')
    },
    fetchSubCategories(id) {
      this.$store.dispatch('categories/getSubCategories', id)
    },
    setSubCategory(id) {
      localStorage.setItem('sub_id', id)
    },
    setParam(param) {
      localStorage.setItem('param', param)
    },
    menuOpen() {
      const mobileMenu = document.getElementById('mobileMenu')
      const menuOverlay = document.getElementById('menu-overlay')

      menuOverlay.classList.add('d-block')
      mobileMenu.classList.add('menu-fade')
      mobileMenu.classList.remove('menu-fadeout')
    },
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  created() {
    this.getCategories()
  },
}
</script>
<style lang="scss" scoped>
$second-color: #ffe607;
.marked {
  background: $second-color;
}
.text-dark {
  padding: 10px;
}
.categorie-name {
  margin: 0;
  padding: 0;
  &:last-of-type {
    background: $second-color;
  }

  a {
    padding: 20px 10px;
    text-align: center !important;
    margin: 0 !important;
    line-height: 20px;
  }
}
.lang {
  padding: 10px 15px;
}
@media (max-width: 766.98px) {
  .top-menu {
    display: flex !important;
    flex-direction: column-reverse !important;

    justify-content: center !important;
    align-items: center !important;
  }
}
.langChaner {
  cursor: pointer;
}

/* play with some lines below */
#progress-container-el {
  /* background */
  background-color: transparent !important;
  top: calc(100% - 4px) !important; /* remove if Vue 3.x */
}
#progress-el {
  /* progress bar */
  background-color: #fcb932 !important;
}

.header {
  display: flex;
  padding: 0 15px;
}
a {
  margin-right: 20px;
  font-size: 14px;
  color: #999;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color 0.25s;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
}
a:hover {
  color: #000;
}
a.nuxt-link-active {
  color: #000;

  font-weight: 600;
}
.en {
  .myFloat {
    margin-right: auto;
  }
}
.ar {
  .myFloat {
    margin-left: auto;
  }
}
</style>