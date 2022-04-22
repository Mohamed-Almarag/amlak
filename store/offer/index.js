export const state = () => ({
  SubscribeRequest: null,
  SubscribeCode: null,
  SubscribeResendCode: null,
  loggedInSubscriber: null,
  CancelSubscribeRequest: null,
})

export const getters = {}

export const mutations = {
  SUBSCRIBE_REQUEST(state, data) {
    state.SubscribeRequest = data
  },
  SUBSCRIBE_CODE(state, data) {
    state.SubscribeCode = data
  },
  SUBSCRIBE_RESEND_CODE(state, data) {
    state.SubscribeResendCode = data
  },
  LOGGEDIN_SUBSCRIBER(state, data) {
    state.loggedInSubscriber = data
  },
  CANCEL_SUBSCRIBE_REQUEST(state, data) {
    state.SubscribeResendCode = data
  },
}

export const actions = {
  async postSebscribeRequest({ commit }, data) {
    try {
      console.log(data)
      let response = await this.$axios.post('subscribe', data)
      commit('SUBSCRIBE_REQUEST', response)
      this.$cookiz.set(
        'subscriptionContractId',
        response.data.data.customer.subscriptionContractId
      )
      // this.$cookiz.set('subscriber_id', response.data.data.data.id)

      commit('ERRORS', null, { root: true })
    } catch (error) {
      commit('ERRORS', error.response.data, { root: true })
    }
  },
  async postSebscribeCode({ commit, dispatch, state }, data) {
    // console.log(data)
    let payload = Object.assign(data, {
      subscriptionContractId: this.$cookiz.get('subscriptionContractId'),
    })
    try {
      let response = await this.$axios.post('verify_subscription', payload)
      commit('SUBSCRIBE_CODE', response)
      if (this.$auth.loggedIn && response.status == 200) {
        let payload = {
          user_id: this.$auth.user.data.id,
          tpay_id: state.SubscribeRequest.data.data.customer.id,
        }
        dispatch('postLoggedinSubscriber', payload).then(() => {
          location.reload()
        })
      } else if (!this.$auth.loggedIn && response.status == 200) {
        this.$router.push('/auth/register')
      }
      commit('ERRORS', null, { root: true })
    } catch (error) {
      commit('ERRORS', error.response.data, { root: true })
    }
  },
  async postLoggedinSubscriber({ commit }, payload) {
    try {
      let response = await this.$axios.post('active_user', payload)
      commit('LOGGEDIN_SUBSCRIBER', response)
      location.reload()
      commit('ERRORS', null, { root: true })
    } catch (error) {
      commit('ERRORS', error.response.data, { root: true })
    }
  },
  async postSebscribeResendCode({ commit }, data) {
    let payload = {
      subscriptionContractId: this.$cookiz.get('subscriptionContractId'),
      operator_code: data,
    }
    try {
      let response = await this.$axios.post('resend_code', payload)
      commit('SUBSCRIBE_RESEND_CODE', response)
      commit('ERRORS', null, { root: true })
    } catch (error) {
      commit('ERRORS', error.response.data, { root: true })
    }
  },
  async postCancelSubscribeRequest({ commit }) {
    let payload = {
      subscriptionContractId: this.$auth.user.data.tpay.subscriptionContractId,
    }
    try {
      let response = await this.$axios.post('cancel_subscription', payload)
      commit('CANCEL_SUBSCRIBE_REQUEST', response)
      commit('ERRORS', null, { root: true })
    } catch (error) {
      commit('ERRORS', error.response.data, { root: true })
    }
  },
}
