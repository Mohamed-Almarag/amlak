import { getMethods } from '@/API/helpers'

export const state = () => ({
  Sliders: [],
})

export const getters = {}

export const mutations = {
  GET_SLIDER(state, data) {
    state.Sliders = data
  },
}

export const actions = {
  async getSliders({ commit }) {
    try {
      let response = await getMethods('slider')
      commit('GET_SLIDER', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
}
