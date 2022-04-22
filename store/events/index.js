import { getMethods } from '@/API/helpers'

export const state = () => ({
  Events: [],
  Event: [],
  Reviews: [],
  Review: [],
  Sliders: [],
  Aside: [],
  Rside: [],
})

export const getters = {}

export const mutations = {
  GET_EVENTS(state, data) {
    state.Events = data
  },
  GET_EVENT(state, data) {
    state.Event = data
  },
  GET_REVIEWS(state, data) {
    state.Reviews = data
  },
  GET_REVIEW(state, data) {
    state.Review = data
  },
  GET_SLIDERS(state, data) {
    state.Sliders = data
  },
  GET_ASIDE(state, data) {
    state.Aside = data
  },
  GET_RSIDE(state, data) {
    state.Rside = data
  },
}

export const actions = {
  async getEvents({ commit }) {
    try {
      let response = await getMethods('events')
      commit('GET_EVENTS', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getEvent({ commit }, id) {
    try {
      let response = await getMethods(`events/${id}`)
      commit('GET_EVENT', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getReviews({ commit }) {
    try {
      let response = await getMethods('AdsReview')
      commit('GET_REVIEWS', response.data.data.data)
      // console.log('AdsReview', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getReview({ commit }, id) {
    try {
      let response = await getMethods(`AdsReview/${id}`)
      commit('GET_REVIEW', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async eventsSliderData({ commit }) {
    try {
      let response = await getMethods('events', {
        limit: 10,
        field: 'rate',
        sort: 'ASC',
      })
      commit('GET_SLIDERS', response.data.data.data)
      // console.log('GET_SLIDERS', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async eventsAside({ commit }) {
    try {
      let response = await getMethods('events', {
        limit: 5,
        field: 'visit',
        // sort: 'ASC',
      })
      commit('GET_ASIDE', response.data.data.data)
      // console.log('GET_ASIDE', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async eventsRside({ commit },id) {
    try {
      let response = await getMethods(`events`, {
        limit: 5,
        columns: ['type-id'],
        operand: ['='],
        column_values: [`${id}`],
      })
      commit('GET_RSIDE', response.data.data.data)
      // console.log('GET_RSIDE', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
}
