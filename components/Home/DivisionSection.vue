<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <aside class="col-lg-4">
          <div class="holder">
            <button class="sidebar-fixed-toggler" @click="toggleSidebar">
              <i class="fas fa-cog fa-2x"></i>
            </button>

            <div class="sidebar-filter-overlay" @click="hideSidebar"></div>

            <GeneralSideBar :is-sidebar="isSidebar" />
          </div>
        </aside>

        <div class="col-lg-8 col-md-8 col-sm-12">
          <HomeRightSide />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Sticky from 'vue-sticky-directive'
export default {
  // directives: {
  //   Sticky,
  // },
  mounted: function () {
    this.resizeHandler()
    window.addEventListener('resize', this.resizeHandler, {
      passive: true,
    })
  },
  destroyed: function () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  methods: {
    onScroll() {
      this.top =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    },
    toggleSidebar: function () {
      if (
        document
          .querySelector('body')
          .classList.contains('sidebar-filter-active')
      ) {
        document.querySelector('body').classList.remove('sidebar-filter-active')
      } else {
        document.querySelector('body').classList.add('sidebar-filter-active')
      }
    },

    hideSidebar: function () {
      document.querySelector('body').classList.remove('sidebar-filter-active')
    },
    resizeHandler: function () {
      if (window.innerWidth > 991) this.isSidebar = false
      else this.isSidebar = true
    },
  },
  data() {
    return {
      isSidebar: true,
      loaded: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar-fixed-toggler {
  position: fixed;
  top: 50%;
  left: 7px;
  z-index: 999;
  border: none;
  outline: none;
  @media (min-width: 992px) {
    display: none;
  }
  i {
    color: #fff;
    z-index: 99;

    background: rgba(0, 0, 0, 0.5);
    font-size: 23px;
    padding: 5px;
    border-radius: 9px;
    line-height: 1;
    margin: 0;
    cursor: pointer;
  }
}
</style>