<template>
  <v-container>
    <div v-if="!errors && state_controller && !isSuccess">
      <transition name="success" appear>
        <div>
          <ReusableSuccess />
          <div class="my-3">
            <v-alert border="top" color="indigo" dark>
              {{ state_controller.data.message }}
            </v-alert>
          </div>
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
            :title="$t(`type the code that we've sent to your phone number`)"
            :msg="null"
          />
          <h4 class="text-center" v-if="userInfo">
            {{ userInfo.phone }}
          </h4>
          <!-- :submitForm="CheckCodeHandler" -->
          <ReusableNotifyCode
            :buttonText="$t('Resend the code')"
            :submitButton="SubmitHandler"
            :resendCodeHandler="resendCodeHandler"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  middleware: 'notify',
  computed: {
    state_controller() {
      return this.$store.state.offer.SubscribeRequest
    },
    isSuccess() {
      return this.$store.state.offer.SubscribeCode
    },
    errors() {
      return this.$store.state.Errors
    },
    userInfo() {
      return this.$cookiz.get('subscribtion_info')
    },
  },
  methods: {
    SubmitHandler(code) {
      let data = {
        operator_code: this.userInfo.operator_code,
        pin_code: code,
      }
      this.$store.dispatch('offer/postSebscribeCode', data)
    },
    resendCodeHandler() {
      let data = this.userInfo.operator_code
      this.$store.dispatch('offer/postSebscribeResendCode', data)
    },
  },
}
</script>

<style lang="scss" scoped></style>
