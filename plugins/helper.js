import Api from '@/API/axios'
// import { axiosIns } from "./axios";

// console.log(param)
// Start Get Helper Mthods
export default function getMethods(uri, params) {
  let defultParams = {
    limit: 10,
    offset: 0,
    field: 'id',
    sort: 'desc',
    resource: 'all',
    deleted: 'false',
    paginate: 'true',
    columns: ['active'],
    operand: ['='],
    column_values: [1],
  }

  if (typeof defultParams !== undefined) {
    defultParams = {
      ...defultParams,
      ...params,
    }
  }

  return new Promise((resolve, reject) => {
    Api.get(`${uri}`, {
      params: {
        ...defultParams,
      },
      headers: {
        language: !process.server ? store.state.LanguageSwicher : 'en',
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    })
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        if (error.response) {
          error.response.status == 400
            ? console.log(error.response.data.message)
            : 'no'
          error.response.status == 401
            ? store.dispatch('Logout') //console.log(error.response.data.message)
            : 'no'
          error.response.status == 404
            ? console.log(error.response.data.message)
            : 'no'
          error.response.status == 500
            ? console.log(error.response.data.message)
            : 'no'
        }
        reject(error)
      })
  })
}
/* 
  // End Get Helper Mthods
export default  function ({ store }, param) {
  // Start Post Helper Mthods
  function postMethods(uri, payload) {
    return new Promise((resolve, reject) => {
      Api.post(`${uri}`, payload, {
        headers: {
          language: !process.server ? store.state.LanguageSwicher : 'en',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          if (error.response) {
            error.response.status == 400
              ? console.log(error.response.data.message)
              : 'no'
            error.response.status == 401
              ? store.dispatch('Logout') //console.log(error.response.data.message)
              : 'no'
            error.response.status == 404
              ? console.log(error.response.data.message)
              : 'no'
            error.response.status == 500
              ? console.log(error.response.data.message)
              : 'no'
          }
          reject(error)
        })
    })
  }
  // End Post Helper Mthods

  // Start Put Helper
  function putMethods(uri, payload) {
    return new Promise((resolve, reject) => {
      Api.put(`${uri}`, payload, {
        headers: {
          language: !process.server ? store.state.LanguageSwicher : 'en',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          if (error.response) {
            error.response.status == 400
              ? console.log(error.response.data.message)
              : 'no'
            error.response.status == 401
              ? store.dispatch('Logout') //console.log(error.response.data.message)
              : 'no'
            error.response.status == 404
              ? console.log(error.response.data.message)
              : 'no'
            error.response.status == 500
              ? console.log(error.response.data.message)
              : 'no'
          }
          reject(error)
        })
    })
  }
  // End Put Helper

  // Start delete Helper
  function deleteMethods(uri, payload) {
    return new Promise((resolve, reject) => {
      Api.delete(`${uri}`, {
        params: payload,
        headers: {
          language: !process.server ? store.state.LanguageSwicher : 'en',
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          if (error.response) {
            error.response.status == 400
              ? console.log(error.response.data.message)
              : 'no'
            error.response.status == 401
              ? store.dispatch('Logout') //console.log(error.response.data.message)
              : 'no'
            error.response.status == 404
              ? console.log(error.response.data.message)
              : 'no'
            error.response.status == 500
              ? console.log(error.response.data.message)
              : 'no'
          }
          reject(error)
        })
    })
  }
  // End delete Helper

  return {
    getMethods,
    postMethods,
    putMethods,
    deleteMethods,
  }
}
*/
