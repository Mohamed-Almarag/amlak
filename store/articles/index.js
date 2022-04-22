import { getMethods } from '@/API/helpers'

export const state = () => ({
  Articles: null,
  Article: null,
  Aside: [],
  Rside: [],
  Sliders: [],
  Bslider: [],
})
export const getters = {}
export const mutations = {
  GET_ARTICLES(state, data) {
    state.Articles = data
  },
  GET_ARTICLE(state, data) {
    state.Article = data
  },
  GET_ASIDE(state, data) {
    state.Aside = data
  },
  GET_RSIDE(state, data) {
    state.Rside = data
  },
  GET_SLIDERS(state, data) {
    state.Sliders = data
  },
  GET_BSLIDER(state, data) {
    state.Bslider = data
  },
}
export const actions = {
  async getArticles({ commit }) {
    try {
      let resonse = await getMethods('articles')

      commit('GET_ARTICLES', resonse.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getArticle({ commit }, id) {
    try {
      let response = await getMethods(`articles/${id}`)
      commit('GET_ARTICLE', response.data.data.data)
      console.log('GET_ARTICLE', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async articlesSliderData({ commit }) {
    try {
      let response = await getMethods('articles', {
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
  async articlesAside({ commit }) {
    try {
      let response = await getMethods('articles', {
        limit: 5,
        field: 'visit',
        // sort: 'ASC',
      })
      commit('GET_ASIDE', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async articlesRside({ commit }, id) {
    try {
      let response = await getMethods(`articles`, {
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
  async articlesBottomSlider({ commit }) {
    try {
      let response = await getMethods('articles', {
        limit: 10,
        field: 'id',
        sort: 'desc',
      })
      commit('GET_BSLIDER', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
}
