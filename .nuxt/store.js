import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('..\\store\\index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\whishlist.js'), 'whishlist.js')
  resolveStoreModules(require('..\\store\\slider\\index.js'), 'slider/index.js')
  resolveStoreModules(require('..\\store\\reaction\\index.js'), 'reaction/index.js')
  resolveStoreModules(require('..\\store\\products\\index.js'), 'products/index.js')
  resolveStoreModules(require('..\\store\\partners\\index.js'), 'partners/index.js')
  resolveStoreModules(require('..\\store\\offer\\index.js'), 'offer/index.js')
  resolveStoreModules(require('..\\store\\news\\index.js'), 'news/index.js')
  resolveStoreModules(require('..\\store\\events\\index.js'), 'events/index.js')
  resolveStoreModules(require('..\\store\\courses\\index.js'), 'courses/index.js')
  resolveStoreModules(require('..\\store\\categories\\index.js'), 'categories/index.js')
  resolveStoreModules(require('..\\store\\articles\\index.js'), 'articles/index.js')
  resolveStoreModules(require('..\\store\\authentication\\ChangePassword.js'), 'authentication/ChangePassword.js')
  resolveStoreModules(require('..\\store\\authentication\\Login.js'), 'authentication/Login.js')
  resolveStoreModules(require('..\\store\\authentication\\Register.js'), 'authentication/Register.js')
  resolveStoreModules(require('..\\store\\authentication\\ResetPassword.js'), 'authentication/ResetPassword.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '..\\store\\index.js',
      '..\\store\\whishlist.js',
      '..\\store\\slider\\index.js',
      '..\\store\\reaction\\index.js',
      '..\\store\\products\\index.js',
      '..\\store\\partners\\index.js',
      '..\\store\\offer\\index.js',
      '..\\store\\news\\index.js',
      '..\\store\\events\\index.js',
      '..\\store\\courses\\index.js',
      '..\\store\\categories\\index.js',
      '..\\store\\articles\\index.js',
      '..\\store\\authentication\\ChangePassword.js',
      '..\\store\\authentication\\Login.js',
      '..\\store\\authentication\\Register.js',
      '..\\store\\authentication\\ResetPassword.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
