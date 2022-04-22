import { getMethods } from '@/API/helpers'

export const state = () => ({
  Partners: [],
})

export const getters = {}

export const mutations = {
  GET_PARTNERS(state, data) {
    state.Partners = data
  },
}

export const actions = {
  async getPartners({ commit }) {
    try {
      let response = await getMethods('partners')
      commit('GET_PARTNERS', respnse.data.data.data)
      console.log("partners" , respnse.data.data.data);
    } catch (error) {
      console.log(error)
    }
  },
}
