<template>
  <ul class="nav">
    <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
      <div class="data-holder">
        <a
          class="nav-link"
          :href="getUrl(tab)"
          :class="{ 'active bg-white': tab.active }"
          @click.prevent="tabClick(tab)"
        >
          <!-- <img :src="tab.icon" alt="" srcset="" width="40" /> -->
          <i :class="tab.icon"></i>
        </a>
      </div>
      <h6 class="mt-3">{{ tab.title }}</h6>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    id: String,
    data: Array,
  },
  data: function () {
    return {
      tabs: [...this.data],
    }
  },
  computed: {},
  methods: {
    getUrl: function (tab) {
      if (this.id) {
        return '#' + this.id + '-' + tab.id
      } else {
        return '#' + tab.id
      }
    },
    tabClick: function (tab) {
      if (tab.active) {
        return
      }

      this.tabs = this.tabs.reduce((acc, item) => {
        if (item.id == tab.id) {
          return [...acc, { ...item, active: true }]
        } else {
          return [...acc, { ...item, active: false }]
        }
      }, [])

      let activePanel = document.querySelector(this.getUrl(tab))

      if (activePanel) {
        let old = activePanel.parentElement.querySelector('.tab-pane.active')

        if (old) {
          old.classList.remove('show')
          setTimeout(() => {
            old.classList.remove('active')
          }, 150)
        }

        activePanel.classList.add('show')
        setTimeout(() => {
          activePanel.classList.add('active')
        }, 150)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.nav.nav-pills .nav-link {
  transition: all .3s ease-in-out;
  border-radius: 50%;
  padding: 5px;
}
.nav.nav-pills .nav-item .nav-link.active {
  border: 2px solid $main-color;
  color: transparent;
  border-radius: 50%;
}
.nav.nav-pills .nav-item .nav-link i {
  background: $main-color !important;
  padding: 17px 17px;
  border-radius: 50%;
  color: #fff;
}
</style>
