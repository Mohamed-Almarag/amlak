<template>
  <v-container>
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
    <div v-if="errors">
      <transition name="error" appear v-if="errors">
        <ReusableErrors :errors="errors" />
      </transition>
    </div>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" md="6">
        <v-col cols="12">
          <ReusableFormsHeader
            :title="$t(`sign up`)"
            :msg="$t(`Sign up to be one of our family`)"
          />
          <ReusableAuthenticateUserForm
            :submitForm="registerHandler"
            :buttonText="$t(`sign up`)"
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
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      CoutriesData: null,
    }
  },
  middleware: 'protect-forms',
  created() {
    this.getCountries()
  },
  computed: {
    ...mapState(['Cities', 'Coutries']),
    state_controller() {
      return this.$store.state.authentication.Register.RegisterUser
    },
    errors() {
      return this.$store.state.Errors
    },
    subscriber_id() {
      return this.$store.state.offer.SubscribeRequest
    },
  },
  methods: {
    ...mapActions(['getCountries']),
    async registerHandler(userInfo) {
      const data = userInfo

      this.loading = true

      const fd = new FormData()
      fd.append('name', data.name)
      fd.append('email', data.email)
      fd.append('password', data.password)
      fd.append('password_confirmation', data.password_confirmation)
      fd.append('phone', data.phone)
      fd.append('type', data.type == true ? 'supplier' : 'customer')
      fd.append('image', data.image)
      fd.append('city_id', data.city_id)
      fd.append('country_id', data.country_id)
      if (this.subscriber_id) {
        fd.append('tpay_id', this.subscriber_id)
      }

      await this.$store
        .dispatch('authentication/Register/postRegisterUser', fd)
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
