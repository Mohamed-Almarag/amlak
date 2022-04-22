<template>
  <v-container>
    <v-row no-gutters>
      <!-- <v-col lg="2" class="hidden-md-and-down">
        <v-menu>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip top>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                  text
                  rounded
                  block
                >
                  <v-icon left> mdi-view-dashboard </v-icon>
                  {{ $t('Categories') }}
                </v-btn>
              </template>
              <span>Show all categories</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in categories" :key="index">
              <v-list-item-title>
                <v-btn block text :to="`/search/${item.id}`">
                  {{ item.name }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col> -->
      <v-col>
        <v-icon @click="goNext('/')">mdi-home</v-icon>
      </v-col>
      <v-col
        lg="1.8"
        v-for="(link, i) in links"
        :key="i"
        class="hidden-md-and-down"
      >
        <v-btn
          block
          text
          rounded
          class="text-capitalize"
          @click="goNext(link.to)"
        >
          <!-- <v-icon v-if="link.to == '/'" class="me-1">mdi-home-outline</v-icon> -->
          {{ link.name }}
        </v-btn>
        <!-- <v-btn
          block
          text
          rounded
          class="text-capitalize"
          @click="goNext(link.to)"
          :class="{
            'v-btn--active':
              link.to == getParamId ||
              (link.to == '/' && getHomeParamId == 'index'),
          }"
        >
          <v-icon v-if="link.to == '/'" class="me-1">mdi-home-outline</v-icon>
          {{ link.name }}
        </v-btn> -->
      </v-col>
      <v-col class="hidden-md-and-down">
        <v-menu>
          <template v-slot:activator="{ on: menu, attrs }">
            <v-tooltip top>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  v-bind="attrs"
                  v-on="{ ...tooltip, ...menu }"
                  text
                  rounded
                  block
                >
                  <v-icon left> mdi-view-dashboard </v-icon>
                  Events and exhibitions
                  <!-- {{ $t('Categories') }} -->
                </v-btn>
              </template>
              <span>Events and exhibitions</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in categories"
              :key="index"
              class="menu"
            >
              <v-list-item-title>
                <v-btn block text :to="`/${item.id}`">
                  {{ item.name }}
                </v-btn>
                <!-- <v-btn block text :to="`/search/${item.id}`">
                  {{ item.name }}
                </v-btn> -->
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
      <v-col
        lg="1.8"
        v-for="link in links2"
        :key="link.id"
        class="hidden-md-and-down"
      >
        <v-btn
          block
          text
          rounded
          class="text-capitalize"
          @click="goNext(link.to)"
          :class="{
            'v-btn--active':
              link.to == getParamId ||
              (link.to == '/' && getHomeParamId == 'index'),
          }"
        >
          {{ link.name }}
        </v-btn>
      </v-col>
      <v-row class="hidden-lg-and-up">
        <v-col>
          <v-navigation-drawer
            v-model="drawer"
            app
            right
            absolute
            temporary
            overlay-opacity=""
          >
            <v-list-item-title class="py-4 px-2"
              ><v-icon left> mdi-view-dashboard </v-icon>
              Categories</v-list-item-title
            >
            <v-list v-for="(item, i) in categories" :key="i">
              <v-list-group @click.once="fetchSubCategories(item.id)">
                <template v-slot:activator>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </template>
                <v-list-item-content>
                  <v-list-item-title class="grey px-1 lighten-2">
                    <v-list-item-action>
                      <nuxt-link
                        :to="`/${item.id}`"
                        class="text-decoration-none white--text"
                      >
                        {{ item.name }}
                      </nuxt-link>
                      <!-- <nuxt-link
                        :to="`/search/${item.id}`"
                        class="text-decoration-none white--text"
                      >
                        {{ item.name }}
                      </nuxt-link> -->
                    </v-list-item-action>
                  </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content v-for="sub in subCategories" :key="sub.id">
                  <v-list-item-title class="blue-grey px-1 lighten-2">
                    <v-list-item-action @click="setSubCategory(sub.id)">
                      <nuxt-link
                        :to="`/${sub.id}`"
                        class="text-decoration-none white--text"
                      >
                        {{ sub.name }}
                      </nuxt-link>
                      <!-- <nuxt-link
                        :to="`/search/sub-${sub.id}`"
                        class="text-decoration-none white--text"
                      >
                        {{ sub.name }}
                      </nuxt-link> -->
                    </v-list-item-action>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-group>
            </v-list>

            <v-list nav>
              <v-list-item-group
                v-model="group"
                active-class="deep-purple--text text--accent-4"
              >
                <v-list-item v-for="(link, i) in links" :key="i">
                  <v-list-item-title>
                    <div @click="goNext(link.to)">
                      <v-icon v-if="link.to == '/'" class="me-1"
                        >mdi-home-outline</v-icon
                      >
                      {{ link.name }}
                    </div>
                  </v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      group: null,
      links: [
        {
          name: 'Home',
          to: '/',
        },
        // {
        //   name: 'News',
        //   to: 'new-arrivals',
        // },
        // {
        //   name: 'Auctions',
        //   // id: 'trending',
        //   to: 'trending',
        // },
        // {
        //   name: 'Deals',
        //   // id: 'deals',
        //   to: 'deals',
        // },
        // {
        //   name: 'Weekly offers',
        //   // id: 'Weekly-offers',
        //   to: 'Weekly-offers',
        // },
      ],
      links2: [
        {
          name: 'Courses',
          to: 'courses',
        },
        {
          name: 'Articles',
          to: 'details',
          // to: 'articles',
        },
        // {
        //   name: 'Number',
        //   // id: 'trending',
        //   to: 'number',
        // },
        {
          name: 'Classified Ads',
          // id: 'trending',
          to: 'classifiedAds',
        },
        {
          name: 'real estate requests',
          // id: 'trending',
          to: 'requests',
          // to: 'details',
        },
      ],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
  created() {
    this.getCategories()
    setInterval(() => {
      this.setParam(this.$route.name)
    }, Infinity)
    // console.log(this.subCategories)
  },
  computed: {
    categories() {
      return this.$store.state.categories.Categories
    },
    subCategories() {
      return this.$store.state.categories.SubCategories
    },
    getParamId() {
      return this.$route.params.id
    },
    getHomeParamId() {
      return this.$route.name
    },
  },
  methods: {
    getCategories() {
      this.$store.dispatch('categories/getCategories')
    },
    fetchSubCategories(id) {
      this.$store.dispatch('categories/getSubCategories', id)
    },
    setSubCategory(id) {
      localStorage.setItem('sub_id', id)
    },
    setParam(param) {
      localStorage.setItem('param', param)
    },
    goNext(to) {
      if (this.$store.state.Errors != null) {
        this.$store.commit('ERRORS', null)
      }

      if (to == '/' || this.$route.path == to) {
        // let the user here
        if (to == '/') {
          this.$router.push(`${to}`)
        }

        if (this.$route.path == to) {
        }
      }

      if (to !== '/') {
        this.$router.push(`${to}`)
      }

      if (
        to == 'new-arrivals' ||
        to == 'trending' ||
        to == 'deals' ||
        to == 'Weekly-offers'
      ) {
        this.$router.push(`/${to}`)
        // this.$router.push(`/search/${to}`)
        // if (this.$route.name !== 'Search-id') {
        // }
      }

      if (this.$route.params.id == to) {
        // let the user here

        if (this.$route.path == to) {
        } else if (to == '/') {
          this.$router.push(`${to}`)
        }
      }

      if (this.$route.name == 'Search-id') {
        if (this.$route.params.path !== to) {
          this.$router.push(`${to}`)
        }
      } else if (
        this.$route.name == 'Product-id' ||
        this.$route.name == 'Cart-adresses' ||
        this.$route.name == 'Cart-storement' ||
        this.$route.name == 'Cart-personal-data' ||
        this.$route.name == 'auth-login' ||
        this.$route.name == 'auth-register' ||
        this.$route.name == 'auth-change-password' ||
        this.$route.name == null
      ) {
        if (to !== '/') {
          if (this.$route.params.id == to) {
            this.$router.push(`/${to}`)
            // this.$router.push(`/search/${to}`)
          } else {
            this.$route.params.path = `/${to}`
            // this.$route.params.path = `/search/${to}`
            this.$router.push(`${this.$route.params.path}`)
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.v-btn--active {
  color: #080 !important;
}
.menu {
  li:hover,
  li.show,
  li.active {
    > a {
      color: $main-color;
    }
  }
}
</style>


