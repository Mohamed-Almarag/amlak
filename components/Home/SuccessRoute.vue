<template>
  <div>
    <div class="container-fluid">
      <h2>
        {{$t('success march')}}
      </h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 mb-4" v-for="x in 4" :key="x">
          <div class="media">
            <img
              src="@/assets/images/home/person.png"
              class="mx-3"
              alt="person-image"
            />
            <div class="media-body">
              <h6 class="mt-0 title">
                Abdul Rahman Al-Jeraisy .. The secret formula for success is
                honesty, seriousness and continuity
              </h6>
              <p>
                Adad/ Dr. Waddah Al-Saeed, we host today in the world of adults
                a man of senior businessmen in the Kingdom of Saudi Arabia. He
                is Abd al-Rahman bin Ali al-Jeraisy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center my-5">
          <button class="btn btn-ligh shadow-none">More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.media {
  img {
    border-radius: 5px;
  }
  .title {
    line-height: 1.4;
  }
}
</style>