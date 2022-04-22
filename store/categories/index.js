import { getMethods } from '@/API/helpers'

export const state = () => ({
  Categories: null,
  SubCategories: null,
})
export const getters = {}
export const mutations = {
  GET_CATEGORIES(state, data) {
    state.Categories = data
  },
  GET_SUB_CATEGORIES(state, data) {
    state.SubCategories = data
  },
}
export const actions = {
  async getCategories({ commit }) {
    try {
      let resonse = await getMethods('Category')

      commit('GET_CATEGORIES', resonse.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getSubCategories({ commit }, category_id) {
    try {
      let resonse = await getMethods(`SubCategory`, {
        columns: ['category_id'],
        operand: ['='],
        column_values: [`${category_id}`],
      })

      commit('GET_SUB_CATEGORIES', resonse.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
}
