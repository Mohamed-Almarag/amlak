<template>
  <div>
    <div class="container">
      <div class="card my-4" v-for="article in articles" :key="article.id">
        <div class="">
          <img :src="article.cover_photo" alt="image" class="img-fluid w-100" />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            {{ article.name }}
          </h5>
          <p>
            {{ article.description }}
          </p>
          <div class="row justify-content-bewteen align-items-center">
            <div class="col-md-9 col-sm-12 my-3">
              <div class="info-holder d-flex">
                <div class="time-holder mr-5">
                  <span class="text-info circle">
                    <i class="fas fa-circle"></i>
                  </span>
                  <span class="time">
                    {{article.type.created_at}}
                  </span>
                </div>
                <div class="comments-holder">
                  <span class="text-primary">
                    <i class="fas fa-comment"></i>
                  </span>
                  <span class="time">
                    {{article.type.updated_at}}
                  </span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-12 my-3">
              
              <nuxt-link :to="`/blog/${article.id}`" class="text-decoration-none">
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
  props: ['articles'],
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