<template>
  <div class="upper-nav" :class="$i18n.locale">
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="6" md="6" sm="6">
          <v-row no-gutters>
            <v-col cols="2" class="d-flex justify-center align-center">
              <v-menu bottom offset-x>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn small text fab v-bind="attrs" v-on="on">
                    <v-icon small> mdi-translate </v-icon>
                  </v-btn>
                </template>

                <v-list subheader dense>
                  <v-list-item link @click="switchs('en')">
                    <v-list-item-title class="px-2">en</v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="switchs('ar')">
                    <v-list-item-title class="px-2">ع</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="8" sm="12" offset="1">
              <div class="image">
                <nuxt-link to="/" exact v-if="info">
                  <img :src="info.logo" />
                </nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" class="hidden-sm-and-down">
          <div class="search d-flex justify-center align-center px-4">
            <v-text-field
              outlined
              dense
              rounded
              dashed
              clearable
              color="light-green lighten-1"
              :label="`${
                $i18n.locale == 'en' ? 'Saved Search' : 'عمليات البحث المحفوظه'
              }`"
              class="input"
            ></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="loggin-div">
      <v-container>
        <v-row class="setNow">
          <v-col
            md="3"
            sm="12"
            class="d-flex justify-end align-center bg-black first-col"
            v-if="!$auth.loggedIn"
          >
            <v-btn
              @click="goNext('/auth/login')"
              text
              color="white"
              class="login-btn"
            >
              <v-icon>mdi-login</v-icon>
              <span class="me-1">{{ $t('login') }}</span>
            </v-btn>
            <div class="notification">
              <div class="notification-holder" title="Notifications">
                <div class="notification-dots"></div>
                <i class="far fa-bell fa-2x"></i>
              </div>
            </div>
          </v-col>
          <v-col cols="6" md="3" sm="6" v-if="$auth.loggedIn">
            <div class="icons d-flex justify-end align-center">
              <!-- <v-badge bordered color="error" content="9+" overlap>
                <v-btn fab small text @click="dialogHandler" color="white">
                  <v-icon>mdi-cards-heart-outline</v-icon>
                </v-btn>
              </v-badge> -->
              <!-- <v-btn fab small text @click="dialogHandler" color="white">
                <v-icon>mdi-cards-heart-outline</v-icon>
              </v-btn> -->
              <!-- <v-badge bordered color="error" content="4" overlap>
                <v-btn fab small text to="/cart" color="white">
                  <v-icon>mdi-cart-outline</v-icon>
                </v-btn>
              </v-badge> -->
              <!-- <v-btn fab small text to="/cart" color="white">
                <v-icon>mdi-cart-outline</v-icon>
              </v-btn> -->
              <v-menu bottom offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn small text fab v-bind="attrs" v-on="on" color="white">
                    <v-icon> mdi-account-outline </v-icon>
                  </v-btn>
                </template>

                <v-list subheader dense>
                  <v-list-item link to="/profile" class="d-flex justify-content-center">
                    <img
                      :src="$auth.user.data.image"
                      alt="user-image"
                      width="60"
                    />
                  </v-list-item>
                  <v-list-item link to="/profile">
                    <v-list-item-title class="text-center">
                      {{ $auth.user.data.first_name }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="goNext('/auth/change-password')">
                    <v-list-item-title class="text-center">
                      {{ $t('Change Password') }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    @click="dialogHandler"
                    v-if="$auth.user.data.tpay"
                  >
                    <v-list-item-title
                      class="text-center text-capitalize error--text"
                    >
                      {{ $t('cancel subscribtion') }}
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    @click="logoutHandler"
                    class="error white--text"
                  >
                    <v-list-item-title class="text-center text-capitalize">
                      {{ $t('logout') }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>

          <v-col md="6" sm="12" class="text-center">
            <h2 class="h1">أملاك اكبر منصة إخبارية عربية</h2>
          </v-col>
          <v-col md="3" sm="12">
            <div class="social-contact">
              <v-list-item>
                <v-list-item-content>
                  <a
                    :href="info.instagram_link"
                    instagram_link
                    target="_blank"
                    class="text-decoration-none"
                  >
                    <v-icon text color="white" title="instagram"
                      >mdi-instagram</v-icon
                    >
                  </a>
                </v-list-item-content>
                <v-list-item-content>
                  <a
                    :href="info.linked_link"
                    target="_blank"
                    class="text-decoration-none"
                  >
                    <v-icon text color="white" title="linkedin"
                      >mdi-linkedin</v-icon
                    >
                  </a>
                </v-list-item-content>
                <v-list-item-content>
                  <a
                    :href="info.twitter_link"
                    target="_blank"
                    class="text-decoration-none"
                  >
                    <v-icon text color="white" title="twitter"
                      >mdi-twitter</v-icon
                    >
                  </a>
                </v-list-item-content>
                <v-list-item-content>
                  <a
                    :href="info.fb_link"
                    target="_blank"
                    class="text-decoration-none"
                  >
                    <v-icon text color="white" title="facebook"
                      >mdi-facebook</v-icon
                    >
                  </a>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-col>
        </v-row>
        <div class="nav-links bg-white">
          <!-- <GeneralLinksNav /> -->
          <GeneralNavbar />
        </div>
      </v-container>
    </div>
    <div>
      <ReusableDialog
        :dialog="isDialog"
        :title="$t('alert')"
        :msg="$t(`do you really want to take this step`)"
        :methodHandler="cancelSubscribeRequest"
        :dialogHandler="dialogHandler"
        :btnText="$t('submit')"
      />
      <div v-if="errors" class="error-msg" hidden>
        <transition name="error" appear v-if="errors">
          <ReusableErrors :errors="errors" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import axios from 'axios'
import { baseUrl } from '@/API/axios'
export default {
  data() {
    return {
      isDialog: false,
      infoData: [],
    }
  },
  computed: {
    // ...mapState(['Info']),
    errors() {
      return this.$store.state.Errors
    },
  },

  mounted() {
    if (this.$cookiz.get('lang') == 'ar') {
      this.$i18n.locale = 'ar'
      this.$vuetify.rtl = true
      this.$auth.$storage.setCookie('lang', 'ar', false)
    } else {
      this.$i18n.locale = 'en'
      this.$vuetify.rtl = false
      this.$auth.$storage.setCookie('lang', 'en', false)
    }
  },
  methods: {
    switchs(local) {
      this.$i18n.locale = local
      this.$cookiz.set('lang', local)
      localStorage.setItem('lang', local)
      if (local == 'ar') {
        this.$vuetify.rtl = true
      } else {
        this.$vuetify.rtl = false
      }
    },
    goNext(to) {
      if (this.$route.name !== 'auth-login') {
        this.$router.replace(`${to}`)
      }
      if (this.$store.state.Errors != null) {
        this.$store.commit('ERRORS', null)
      }
    },
    logoutHandler() {
      this.$store.dispatch('authentication/Login/Logout')
      if (this.$store.state.Errors != null) {
        this.$store.commit('ERRORS', null)
      }
    },
    cancelSubscribeRequest() {
      this.$store.dispatch('offer/postCancelSubscribeRequest').then(() => {
        this.isDialog = false
        location.reload()
      })
    },
    dialogHandler() {
      this.isDialog = !this.isDialog
    },
    // getInfo() {
    //   axios
    //     .get(`${baseUrl}info`)
    //     .then((resp) => {
    //       this.infoData = resp.data.data.data
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
  },
  // created() {
  //   this.getInfo()
  // },
  props: ['info'],
}
</script>

<style lang="scss" scoped>
.upper-nav {
  position: relative;
  margin-bottom: 3%;
  .image {
    img {
      width: 25%;
      height: 25%;
      object-fit: contain;
      @media (max-width: 992px) {
        width: 90%;
      }
    }
  }
  .search {
    position: relative;
    .input {
      transform: translateY(15px);
    }
    .icon {
      position: absolute;
      right: 20px;
    }
  }
  .icons {
    gap: 15px;
    @media (max-width: 992px) {
      display: flex !important;
      justify-content: center !important;
    }
  }

  .error-msg {
    position: absolute;
    top: 20vh;
    width: 100%;
    z-index: 9;
  }
}
.loggin-div {
  background: $main-color;
  color: #fff;
  padding: 60px 15px;
  .notification {
    .notification-holder {
      width: 20px;
      height: 20px;
      color: #000;
      background: #e8ebf4;
      border-radius: 50%;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      position: relative;
      .notification-dots {
        position: absolute;
        top: 5px;
        right: 7px;
        background: orange;
        color: rgba(255, 255, 255, 1);
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  }
  .setNow {
    @media (max-width: 992px) {
      flex-direction: column;

      justify-content: center !important;
      align-items: center !important;
    }
  }
  .first-col {
    @media (max-width: 992px) {
      order: 1;
      display: flex !important;
      justify-content: center !important;
    }
  }
}
.nav-links {
  position: absolute;
  bottom: 20px;
  background: #f8f8f8;
  left: 50%;
  bottom: -7%;
  transform: translate(-50%, 7%);
  box-shadow: inset 0px 5px 9px #00000029;
  width: 85%;
}
.login-btn {
  background: black;
  color: #fff;
  margin: 0 15px;
}
</style>
