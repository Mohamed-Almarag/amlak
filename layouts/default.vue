<template>
  <v-app v-if="isMounted" :class="$i18n.locale">
    <header>
      <GeneralSideMenu :info="SiteInfo" />
      <GeneralUpperNav :info="SiteInfo" />
      <!-- <GeneralLinksNav /> -->
    </header>
    <v-main>
      <Nuxt />
      <div class="route_error" v-if="error_modal">
        <ReusableRouteError />
      </div>
    </v-main>
    <button
      id="scroll-top"
      ref="scrollTop"
      title="Back to Top"
      @click.prevent="toTop"
      v-show="scY > 1000"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
    <GeneralFooter :info="SiteInfo" />
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { baseUrl } from '@/API/axios'
import axios from 'axios'
export default {
  data() {
    return {
      isMounted: false,
      scTimer: 0,
      scY: 0,
      infoData: [],
    }
  },
  created() {
    this.languageSwicher()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    if (this.lang_type == 'ar') {
      document.body.style.fontFamily = "'Tajawal', sans-seri"
      this.$vuetify.rtl = true
      this.$store.commit('LANGUAGE_SWITCHER', 'ar')
    } else {
      document.body.style.fontFamily = "'Poppins', sans-serif"
      this.$vuetify.rtl = false
      this.$store.commit('LANGUAGE_SWITCHER', 'en')
    }

    // console.log(this.$store.state.LanguageSwicher)
    // console.log('this.$store.state.Info', this.$store.state.Info)
    this.setData()
    this.getSiteInfo()
  },
  computed: {
    ...mapState(['SiteInfo']),
    lang_type() {
      return this.$cookiz.get('lang')
    },
    error_modal() {
      return this.$store.state.RouteError
    },
    SiteInfo() {
      return this.$store.state.SiteInfo
    },
  },
  methods: {
    ...mapActions(['languageSwicher']),
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    setData() {
      let colors = this.$cookiz.get('site_info')
      if (colors) {
        document.documentElement.style.setProperty(
          '--main-color',
          `${colors.main_color}`
        )
      }
      // console.log('colors', colors)
    },
    getSiteInfo() {
      this.$store.dispatch('getSiteInfo').then(() => {
        this.isMounted = true
      })
    },
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css');
@import url('https://fonts.googleapis.com/css2?family=Tajawal&display=swap');
// @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css');
html,
body {
  scroll-behavior: smooth;
  overflow-x: hidden;

  .v-card,
  .card {
    transition: all 0.4s ease-in-out;

    .image {
      img {
        mix-blend-mode: multiply;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &:hover {
      background-color: #eee;
    }
  }

  .v-main {
    position: relative;

    .route_error {
      position: absolute;
      top: 0;
      transform: translate(50%, -50%);
    }
  }
}
/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #fff;
}
::-webkit-scrollbar-thumb {
  background: rgb(224, 224, 224);
  border-radius: 5px;
}

/* Alerts transition */

// success
.success-enter,
.success-leave-to {
  transform: translateY(50px) scale(0);
  opacity: 1;
}
.success-enter-active,
.success-leave-active {
  transition: all 0.4s ease-in-out;
}

// errors
.error-enter-active,
.error-leave-active {
  animation: error 0.5s ease;
}
.error-leave-to {
  opacity: 0;
  transform: translateX(-60px) scale(0.7);
}
@keyframes error {
  0% {
    transform: translateX(-60px) scale(0.7);
    opacity: 0;
  }
  50% {
    transform: translateX(0px) scale(1.1);
    opacity: 1;
  }
  60% {
    transform: translateY(8px) scale(1);
    opacity: 1;
  }
  70% {
    transform: translateY(-8px) scale(1);
    opacity: 1;
  }
  80% {
    transform: translateY(8px) scale(1);
    opacity: 1;
  }
  90% {
    transform: translateY(-8px) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(0px) scale(1);
    opacity: 1;
  }
}

/* Pages transition */
.page-enter-active {
  animation: acrossIn 0.45s ease-out both;
}

.page-leave-active {
  animation: acrossOut 0.65s ease-in both;
}

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
header {
  z-index: 999;
}
#scroll-top {
  position: fixed;
  right: 20px;
  bottom: 70px;
  z-index: 999;
  background: $main-color;
  padding: 10px 15px;
  font-size: 28px;
  border: none;
  outline: none;
  box-shadow: none;
  color: #fff;
}
.en {
  direction: ltr;
  text-align: left;
}
.ar {
  direction: rtl;
  text-align: right;
}
</style>
