import { getMethods } from '@/API/helpers'

export const state = () => ({
  Courses: [],
  TopCourses: [],
  Course: [],
  FreeCourses: [],
  SponsorCourses: [],
  PaidCourses: [],
})

export const getters = {}
export const mutations = {
  GET_COURSES(state, data) {
    state.Courses = data
  },
  GET_TOP_COURSES(state, data) {
    state.TopCourses = data
  },
  GET_COURSE(state, data) {
    state.Course = data
  },
  GET_FREE_COURSES(state, data) {
    state.FreeCourses = data
  },
  GET_SPONSOR_COURSES(state, data) {
    state.SponsorCourses = data
  },
  GET_PAID_COURSES(state, data) {
    state.PaidCourses = data
  },
}

export const actions = {
  async getCourses({ commit }) {
    try {
      let response = await getMethods('Courses', {
        columns: ['active'],
        operand: ['='],
        column_values: [1],
      })
      commit('GET_COURSES', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getTopCourses({ commit }) {
    try {
      let response = await getMethods('Courses', {
        limit: 10,
        field: 'rate',
        sort: 'desc',
        columns: ['active'],
        operand: ['='],
        column_values: [1],
      })
      commit('GET_TOP_COURSES', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getFreeCourses({ commit }) {
    try {
      let response = await getMethods('Courses', {
        limit: 10,
        sort: 'desc',
        // columns: ['active', 'pay_type','status'],
        // operand: ['=', '=' , '='],
        // column_values: [1, 'free','active'],
      })
      commit('GET_FREE_COURSES', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getSponsorCourses({ commit }) {
    try {
      let response = await getMethods('Courses', {
        limit: 10,
        sort: 'desc',
        // columns: ['active', 'pay_type','status'],
        // operand: ['=', '=','='],
        // column_values: [1, 'sponsor','active'],
      })
      commit('GET_SPONSOR_COURSES', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getPaidCourses({ commit }) {
    try {
      let response = await getMethods('Courses', {
        limit: 10,
        sort: 'desc',
        // columns: ['active', 'pay_type','status'],
        // operand: ['=', '=' , '='],
        // column_values: [1, 'paid','active'],
      })
      commit('GET_PAID_COURSES', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
  async getCourse({ commit }, id) {
    try {
      let response = await getMethods(`Courses/${id}`)
      commit('GET_COURSE', response.data.data.data)
      console.log('GET_COURSE', response.data.data.data)
    } catch (error) {
      console.log(error)
    }
  },
}
