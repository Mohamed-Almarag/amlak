<template>
  <div>
    <div class="container">
      <div class="card my-4" v-for="neww in news" :key="neww.id">
        <div class="">
          <img :src="neww.cover_photo" alt="image" class="img-fluid w-100" />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            {{ neww.name }}
          </h5>
          <p class="text-dimied">
            {{ neww.description }}
          </p>
          <div class="row justify-content-bewteen align-items-center">
            <div class="col-md-9 col-sm-12 my-3">
              <div class="info-holder d-flex">
                <div class="time-holder mr-5" v-if="neww.date">
                  <span class="text-info circle">
                    <i class="fas fa-circle"></i>
                  </span>
                  <span class="time" >
                    {{ neww.date }}
                  </span>
                </div>
                <div class="comments-holder" v-if="neww.time">
                  <span class="text-primary">
                    <i class="fas fa-clock"></i>
                  </span>
                  <span class="time" >
                    {{ neww.time }}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12 my-3">
              <nuxt-link :to="`/news/${neww.id}`" class="text-decoration-none">
                <button class="btn btn-block join-btn">Join</button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- <GeneralPagination :perPage="perPage" :total="total" /> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['news'],
  mounted() {
    console.log('left news', this.news)
  },
}
</script>

<style lang="scss" scoped>
.join-btn {
  background: #212121;
  color: #fff;
}
.circle i {
  background: #2e9fff;
  color: #2e9fff;
  border-radius: 50%;
}
</style>