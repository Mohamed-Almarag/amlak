<template>
  <v-container class="strange">
    <div v-if="errors">
      <transition name="error" appear v-if="errors">
        <ReusableErrors :errors="errors" />
      </transition>
    </div>

    <tabs class="nav-pills nav-fill" :data="tabsData"></tabs>
    <div class="tab-content">
      <div class="tab-pane fade show active" id="tab1">
        <v-row justify="center" align="center" no-gutters>
          <v-col cols="12" md="6">
            <v-col cols="12">
              <ReusableFormsHeader
                :msg="$t(`Make The Most Of Your Professional Life`)"
              />
              <ReusableAuthenticateUserForm
                :submitForm="loginHandler"
                :buttonText="$t('login')"
                :hasName="false"
                :confirmPass="false"
                :register="false"
                :loading="loading"
                :cities="null"
                :coutries="null"
              />
            </v-col>
            <div class="span-text px-2">
              <v-row justify="center" align="center">
                <v-col cols="6" class="d-flex justify-start">
                  <v-checkbox
                    v-model="checkbox"
                    label="Remember Me"
                  ></v-checkbox>
                </v-col>
                <v-col cols="6" class="d-flex justify-end">
                  <v-btn
                    @click="goNext('/auth/forgot-password')"
                    color="red"
                    text
                    class="underline"
                  >
                    {{ $t('forgot password') }}
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="tab-pane fade" id="tab2">
        <div v-if="!errors && state_controller">
          <transition name="success" appear>
            <div>
              <ReusableSuccess />
              <v-alert border="top" color="indigo" dark>
                <nuxt-link
                  to="/auth/login"
                  class="text-decoration-none white--text"
                >
                  {{
                    $t(
                      "Congratulations, now we're done! tap to go to the login page?"
                    )
                  }}
                </nuxt-link>
              </v-alert>
            </div>
          </transition>
        </div>
        <v-row justify="center" align="center" no-gutters>
          <v-col cols="12" md="6">
            <v-col cols="12">
              <!-- :title="$t(`sign up`)" -->
              <!-- <ReusableFormsHeader
                :msg="$t(`Fill In Your Information Completely And Correctly`)"
              /> -->
              <h6 class="text-center mb-8">
                Fill In
                <span class="h5 d-inline">Your Information</span> Completely And
                Correctly
              </h6>
              <ReusableAuthenticateUserForm
                :submitForm="registerHandler"
                :buttonText="$t(`Create`)"
                :hasName="true"
                :confirmPass="true"
                :register="true"
                :loading="loading"
                :cities="Cities"
                :countries="Coutries"
              />
            </v-col>
          </v-col>
        </v-row>
      </div>
      <div class="my-5 text-center">
        <v-row justify="center">
          <v-dialog v-model="dialog" width="600px">
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on" class="text-dimied">
                By clicking Agree & Join, you agree to the amlak User Agreement,
                Privacy Policy, and Cookie Policy.
              </div>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">
                  {{ $t('Privecy Title') }}
                </span>
              </v-card-title>
              <v-card-text>
                <h4>
                  {{ $t('Bio') }}
                </h4>
                <p v-html="infoData.bio"></p>
                <br />
                <h4>
                  {{ $t('About') }}
                </h4>
                <p v-html="infoData.about_us"></p>
                <br />
                <h4>
                  {{ $t('policy') }}
                </h4>
                <p v-html="infoData.policy"></p>
                <br />
                <h4>
                  {{ $t('privacy') }}
                </h4>
                <p v-html="infoData.privacy"></p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Disagree
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  Agree
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import Tabs from '@/components/Reusable/Tabs.vue'
import { mapActions, mapState } from 'vuex'
import axios from "axios"
import {baseUrl} from "@/API/axios"
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      loading: false,
      CoutriesData: null,
      checkbox: false,
      dialog: false,
      infoData: [],
      tabsData: [
        {
          id: 'tab1',
          title: 'Login',
          active: true,
        },
        {
          id: 'tab2',
          title: 'Register',
        },
      ],
    }
  },
  computed: {
    ...mapState(['Cities', 'Coutries', 'Info']),
    state_controller() {
      return this.$store.state.authentication.Register.RegisterUser
    },
    errors() {
      return this.$store.state.Errors
    },
    subscriber_id() {
      return this.$store.state.offer.SubscribeRequest
    },
    errors() {
      return this.$store.state.Errors
    },
    subscriber_id() {
      return this.$store.state.offer.SubscribeRequest
    },
  },
  middleware: 'protect-forms',
  methods: {
    ...mapActions(['getCountries']),
    async loginHandler(userInfo) {
      const data = userInfo

      this.loading = true

      this.$store
        .dispatch('authentication/Login/LoginHandler', data)
        .then(() => {
          if (this.$auth.user) {
            this.$router.push('/')

            if (this.subscriber_id) {
              let payload = {
                user_id: this.$auth.user.data.id,
                tpay_id: this.subscriber_id.data.data.customer.id,
              }
              this.$store.dispatch('offer/postLoggedinSubscriber', payload)
            }
          }
        })
        .finally(() => {
          this.loading = false
        })
    },
    goNext(to) {
      this.$router.replace(`${to}`)
      if (this.$store.state.Errors != null) {
        this.$store.commit('ERRORS', null)
      }
    },
    async registerHandler(userInfo) {
      const data = userInfo

      this.loading = true

      const fd = new FormData()
      fd.append('first_name', data.first_name)
      fd.append('last_name', data.last_name)
      fd.append('bio', data.bio)
      fd.append('email', data.email)
      fd.append('password', data.password)
      fd.append('password_confirmation', data.password_confirmation)
      fd.append('phone', data.phone)
      // fd.append('type', data.type == true ? 'supplier' : 'customer')
      fd.append('type', data.type)
      fd.append('image', data.image)
      fd.append('city_id', data.city_id)
      fd.append('country_id', data.country_id)
      fd.append('name_company', data.name_company)
      fd.append('company_size', data.company_size)
      if (this.subscriber_id) {
        fd.append('tpay_id', this.subscriber_id)
      }

      await this.$store
        .dispatch('authentication/Register/postRegisterUser', fd)
        .finally(() => {
          this.loading = false
        })
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
  created(){
    // this.getInfo()
    this.getCountries()
  }
}
</script>

<style lang="scss" >
.strange {
  .v-label {
    margin-bottom: 0 !important;
  }
  // .v-application .primary--text {
  //   color: #9e0000 !important;
  //   caret-color: #9e0000 !important;
  // }
  .text-dimied {
    color: #6a6a6a;
  }
  .nav-link {
    text-transform: capitalize !important;
  }
  .nav.nav-pills .nav-item .nav-link.active {
    color: #000;
  }
  .underline {
    text-decoration: underline;
  }
}
</style>
