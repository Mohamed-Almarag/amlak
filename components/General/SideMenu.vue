<template>
  <div>
    <!-- Side-menu -->

    <div
      id="menu-overlay"
      class="menu-overlay d-none d-lg-none"
      @click="menuClose"
    />
    <div id="mobileMenu" class="bg-white mobileMenu d-block d-lg-none">
      <div class="text-center py-2 mb-3">
        <nuxt-link class="navbar-brand" to="/" v-if="info">
          <img :src="info.logo" class="img-fluid w-50" alt="logo image" />
        </nuxt-link>
        
      </div>
      <hr />
      <ul class="list-unstyled">
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/" class="nav-link" exact>{{
            $t('nav.home')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/courses" class="nav-link">{{
            $t('nav.courses')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/details" class="nav-link">{{
            $t('nav.details')
          }}</nuxt-link>
        </li>
        <!-- <li :class="{ active: current == 'number' }">
            <nuxt-link to="number">number</nuxt-link>
          </li> -->
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/classifiedAds" class="nav-link">{{
            $t('nav.classified')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/requests" class="nav-link">{{
            $t('nav.requests')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/about" class="nav-link">{{
            $t('nav.about')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/events" class="nav-link">{{
            $t('nav.events')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/news" class="nav-link">{{
            $t('nav.news')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/blog" class="nav-link">{{
            $t('nav.blogs')
          }}</nuxt-link>
        </li>
        <li class="nav-item" @click="menuClose">
          <nuxt-link to="/auctions" class="nav-link">{{
            $t('nav.auctions')
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <!-- Side-menu -->
  </div>
</template>

<script>
export default {
  methods: {
    menuClose() {
      const mobileMenu = document.getElementById('mobileMenu')
      const menuOverlay = document.getElementById('menu-overlay')
      mobileMenu.classList.remove('menu-fade')
      mobileMenu.classList.add('menu-fadeout')
      setTimeout(() => {
        menuOverlay.classList.remove('d-block')
      }, 250)
    },
    // getInfo() {
    //   axios
    //     .get(`${baseUrl}info`)
    //     .then((resp) => {
    //       this.infoData = resp.data.data.data
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
  },
  props: ['info'],
}
</script>

<style scoped>
/* Mobile Menu */
.menu-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  display: none;
}
.mobileMenu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 70%;
  overflow-y: auto;
  z-index: 2001;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  transform: translateX(-100%);
  margin: 0;
}
.mobileMenu a {
  color: #47494d;
}
.menu-fade {
  transform: translateX(0);
  display: block;
}
.menu-fadeout {
  transform: translateX(-100%);
  display: none;
}
.nav-item-hvr {
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}
.nav-item-hvr:hover {
  background-color: #f8f8f8;
}
a.nuxt-link-active {
  color: #000;

  font-weight: 600;
}
/* ./Mobile Menu */
</style>
