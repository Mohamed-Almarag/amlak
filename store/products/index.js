import { getMethods } from '@/API/helpers'

export const state = () => ({
  Products: null,
  IndividualProduct: null,
  BestSeller: null,
  RelatedProducts: null,
})

export const getters = {}

export const mutations = {
  GET_PRODUCTS(state, data) {
    state.Products = data
  },
  GET_INDIVIDUAL_PRODUCT(state, data) {
    state.IndividualProduct = data
  },
  BEST_SELLER(state, data) {
    state.BestSeller = data
  },
  RELATED_PRODUCTS(state, data) {
    state.RelatedProducts = data
  },
}
export const actions = {
  async getProducts({ commit }, payload) {
    console.log(payload)
    try {
      let filter = null
      // Search page
      if (
        localStorage.getItem('param') == 'Search-id' ||
        localStorage.getItem('param') == 'index'
      ) {
        if (payload == 'sub') {
          filter = {
            columns: ['sub_category'],
            operand: ['='],
            column_values: [`${localStorage.getItem('sub_id')}`],
          }
        }
        if (typeof payload == 'number') {
          filter = {
            columns: ['category_id'],
            operand: ['='],
            column_values: [`${payload}`],
          }
        }
        if (payload == 'trending' || payload == 'Weekly-offers') {
          filter = {
            is_feature: [1],
          }
        }
        if (payload == 'new-arrivals') {
          filter = {
            field: 'rate',
            sort: 'desc',
          }
        }
        if (payload == undefined) {
          filter = null
        }
        let response = await getMethods('Product', filter)
        commit('GET_PRODUCTS', response.data.data.data)
      }

      if (localStorage.getItem('param') == 'Product-id') {
        if (payload == 'best-seller') {
          filter = {
            field: 'rate',
            sort: 'desc',
          }
          let response = await getMethods('Product', filter)
          commit('BEST_SELLER', response.data.data.data)
        }
        if (typeof payload == 'number') {
          filter = {
            columns: ['category_id'],
            operand: ['='],
            column_values: [`${payload}`],
          }
          let response = await getMethods('Product', filter)
          commit('RELATED_PRODUCTS', response.data.data.data)
        }
      }
    } catch (error) {
      console.log(error)
    }
  },
  async getIndividualProduct({ commit }, id) {
    try {
      let response = await getMethods(`Product/${id}`)
      console.log(response)
      commit('GET_INDIVIDUAL_PRODUCT', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
}
