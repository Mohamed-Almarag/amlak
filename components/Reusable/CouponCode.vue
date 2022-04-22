<template>
  <div class="d-flex justify-space-between align-center">
    <div class="d-flex">
      <h3>
        Coupon code:
        <div v-if="$auth.loggedIn && $auth.user">
          <input
            v-if="$auth.user.data.tpay"
            type="text"
            :value="coupone"
            class="error--text pa-2"
            id="myInput"
          />
        </div>
      </h3>
    </div>
    <div v-if="$auth.loggedIn && $auth.user">
      <div v-if="$auth.user.data.tpay">
        <v-tooltip top>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn
              v-bind="attrs"
              v-on="{ ...tooltip, ...menu }"
              text
              class="py-5"
              @click="copyHandler"
            >
              <v-icon v-if="!isCopied"> mdi-arrange-bring-forward </v-icon>
              <v-icon v-else color="green"> mdi-check </v-icon>
            </v-btn>
          </template>
          <span v-if="!isCopied">Copy this?</span>
          <span v-else>Copied</span>
        </v-tooltip>
      </div>
    </div>
    <div v-if="!$auth.loggedIn || !$auth.user || !$auth.user.data.tpay">
      <v-btn @click="dialogHandler" elevation="0">subscribe to use it</v-btn>
    </div>
    <ReusableDialogLG
      :dialog="dialog"
      :title="$t('subscribe')"
      :dialogHandler="dialogHandler"
    >
      <ReusableNotifyBox
        :btnSubmit="subscribeBtn"
        color="green"
        :btnTxt="$t('subscribe')"
      />
    </ReusableDialogLG>
  </div>
</template>

<script>
export default {
  props: ['coupone'],
  data() {
    return {
      isCopied: false,
      dialog: false,
    }
  },
  methods: {
    dialogHandler() {
      this.dialog = !this.dialog
    },
    copyHandler() {
      /* Get the text field */
      var copyText = document.getElementById('myInput')

      /* Select the text field */
      copyText.select()
      copyText.setSelectionRange(0, 99999) /* For mobile devices */

      /* Copy the text inside the text field */
      navigator.clipboard.writeText(copyText.value)

      this.isCopied = !this.isCopied
    },
    subscribeBtn(userInfo) {
      this.$cookiz.set('subscribtion_info', userInfo)
      this.$store.dispatch('offer/postSebscribeRequest', userInfo).then(() => {
        if (this.$store.state.offer.SubscribeRequest) {
          this.$router.push('/notify')
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
