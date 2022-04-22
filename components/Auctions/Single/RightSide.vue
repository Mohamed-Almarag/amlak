<template>
  <div class="sidebar-shop" :class="isSidebar ? 'sidebar-filter' : 'sidebar'">
    <div :class="{ 'sidebar-filter-wrapper': isSidebar }">
      <h6 class="text-info popular-title">
        {{ $t('Related Events') }}
      </h6>
      <div class="data-holder">
        <div class="trending-data my-5" v-for="x in 9" :key="x.id">
          <div class="row">
            <div class="col-md-4 col-sm-12 d-flex align-items-center">
              <img
                class="mr-3 img-fluid"
                src="@/assets/images/amlak.png"
                alt="Generic placeholder image"
              />
            </div>
            <div class="col-md-8 col-sm-12">
              <div class="media-body">
                <h5 class="mt-0">
                  Every Product Used to Create Awkwafina’s $846 Oscars Beauty
                  Look
                </h5>
                <p class="text-dimied">Cras sit amet nibh libero.</p>
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
    }
  },
  created: function () {
    document.querySelector('body').classList.remove('sidebar-filter-active')
  },
  methods: {
    toggleSlide: function (index) {
      this.toggleStates = this.toggleStates.reduce((acc, cur, id) => {
        if (id == index) return [...acc, !cur]
        else return [...acc, cur]
      }, [])
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