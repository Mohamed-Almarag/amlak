import { getMethods } from '@/API/helpers'

export const state = () => ({
  News: [],
  New: [],
  Reviews: [],
  Review: [],
  Sliders: [],
  Aside: [],
  Rside: [],
})

export const getters = {}

export const mutations = {
  GET_NEWS(state, data) {
    state.News = data
  },
  GET_NEW(state, data) {
    state.New = data
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
  async getNews({ commit }) {
    try {
      let response = await getMethods('news')
      commit('GET_NEWS', response.data.data.data)
      console.log('GET_NEWS' ,response.data.data.data );
    } catch (error) {
      console.log(error)
    }
  },
  async getNew({ commit }, id) {
    try {
      let response = await getMethods(`news/${id}`)
      commit('GET_NEW', response.data.data.data)
      console.log('GET_NEW', response.data.data.data);
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
  async newsSliderData({ commit }) {
    try {
      let response = await getMethods('news', {
        limit: 10,
        field: 'rate',
        sort: 'ASC',
      })
      commit('GET_SLIDERS', response.data.data.data)
      console.log('GET_SLIDERS', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async newsAside({ commit }) {
    try {
      let response = await getMethods('news', {
        limit: 5,
        field: 'visit',
        // sort: 'ASC',
      })
      commit('GET_ASIDE', response.data.data.data)
      console.log('GET_ASIDE', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async newsRside({ commit },id) {
    try {
      let response = await getMethods(`news`, {
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
