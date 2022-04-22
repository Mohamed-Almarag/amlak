export default function ({ $axios, $auth, store }, params) {
  console.log(params)
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

  $axios.onRequest((config, param) => {
    config.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      language: !process.server ? store.state.LanguageSwicher : 'en',
    }
    config.params = {
      ...defultParams,
    }
  })

  $axios.onError((error) => {
    console.log(error)
  })
}
