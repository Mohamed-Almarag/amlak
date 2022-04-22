export const state = () => ({
  wishlist: [],
})

export const getters = {
  wishlist: (state) => {
    return state.data
  },
  wishlistQty: (state) => {
    return state.data.length
  },
  //   isInWishlist: (state) => (product) => {
  //     return state.data.find((item) => item.id == product.id) ? true : false
  //   },
}

export const mutations = {
  GET_SLIDER(state, data) {
    state.Sliders = data
  },
  ADD_TO_WISHLIST(state, payload) {
    var findIndex = state.data.findIndex(
      (item) => item.id === payload.product.id
    )
    if (findIndex == -1) {
      state.data = [...state.data, payload.product]
    }
  },

  REMOVE_FROM_WISHLIST(state, payload) {
    state.data = state.data.filter((item) => item.id !== payload.wishlist.id)
  },
}

export const actions = {
  addToWishlist: function ({ commit }, payload) {
    commit(ADD_TO_WISHLIST, payload)
  },
  removeFromWishlist: function ({ commit }, payload) {
    commit(REMOVE_FROM_WISHLIST, payload)
  },
}

export default {
  namespaced: true,
}
