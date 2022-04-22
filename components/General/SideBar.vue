<template>
  <div class="sidebar-shop" :class="isSidebar ? 'sidebar-filter' : 'sidebar'">
    <div :class="{ 'sidebar-filter-wrapper': isSidebar }">
      <HomeSideBar />
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
</style>