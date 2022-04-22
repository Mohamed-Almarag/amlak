<template>
  <div class="sidebar-shop" :class="isSidebar ? 'sidebar-filter' : 'sidebar'">
    <div :class="{ 'sidebar-filter-wrapper': isSidebar }">
      <h6 class="text-info popular-title">
        {{ $t('Related Events') }}
      </h6>
      <div class="data-holder">
        <div class="trending-data my-5" v-for="side in Rside" :key="side.id">
          <div class="row">
            <div class="col-md-4 col-sm-12 d-flex align-items-center">
              <nuxt-link
                :to="`/events/${side.id}`"
                class="text-decoration-none"
              >
                <img
                  v-if="side.cover_photo"
                  class="mr-3 img-fluid"
                  :src="side.cover_photo"
                  alt="Generic placeholder image"
                />
              </nuxt-link>
            </div>
            <div class="col-md-8 col-sm-12">
              <div class="media-body">
                <nuxt-link
                  :to="`/events/${side.id}`"
                  class="text-decoration-none"
                >
                  <h5 class="mt-0">
                    {{ side.name }}
                  </h5>
                </nuxt-link>
                <nuxt-link
                  :to="`/events/${side.id}`"
                  class="text-decoration-none"
                >
                  <p
                    class="text-dimied"
                    v-html="side.description.substring(0, 100) + '...'"
                  ></p>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'
export default {
  components: {
    VueSlideToggle,
  },
  props: {
    isSidebar: Boolean,
  },
  data: function () {
    return {
      loaded: true,
      id: this.$route.params.slug,
    }
  },
  created: function () {
    document.querySelector('body').classList.remove('sidebar-filter-active')
    this.newsRside(this.id)
    console.log('this.Rside', this.Rside)
  },
  methods: {
    toggleSlide: function (index) {
      this.toggleStates = this.toggleStates.reduce((acc, cur, id) => {
        if (id == index) return [...acc, !cur]
        else return [...acc, cur]
      }, [])
    },
    newsRside(id) {
      this.$store.dispatch('news/newsRside', id)
    },
  },
  computed: {
    Rside() {
      return this.$store.state.news.Rside
    },
  },
}
</script>
<style lang="scss" scoped>
.filters {
  font-size: 22px;
  color: #144b96;
  // color: #848c9e;
  font-weight: 500;
}
.sidebar-filter-clear {
  cursor: pointer;
}
.popular-title {
  padding: 10px 0;
  border-bottom: 2px solid #17a2b8;
}
.trending {
  border: 1px solid #000;
  display: flex;
  align-items: center;
  .trending-title {
    margin: 0;
    border-right: 1px solid;
    padding: 10px;
    border-bottom: 3px solid #004773;
  }
}
.trending {
  border-right: 1px solid;
}
</style>