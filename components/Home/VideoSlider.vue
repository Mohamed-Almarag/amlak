<template>
  <div>
    <div class="container-fluid my-5">
      <h3>
        {{$t('video')}}
      </h3>
    </div>
    <div class="my-5 video-slider">
      <v-container>
        <h4  class="mb-5">
          {{$t('Opening of a new tower in Jeddah')}}
        </h4>
        <div class="row">
          <div class="col-md-7 col-sm-12">
            <div class="current-holder">
              <img
                src="@/assets/images/home/state.PNG"
                alt="image"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-md-5 col-sm-12">
            <div class="other-videos">
              <ul class="list-unstyled m-0">
                <li v-for="x in 3" :key="x" class="mb-2">
                  <div class="media">
                    <img
                      src="@/assets/images/home/state.PNG"
                      class="mr-3"
                      alt="image"
                      width="250"
                    />
                    <div class="media-body mx-2">
                      <h5 class="mt-0">{{$t('title')}}- {{ x }}</h5>
                      <p>
                        {{$t('Will you do the same for me.')}}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.video-slider {
  background: $main-color;
  color: #fff;
  padding: 5% 0;
}
.current-holder {
  min-height: 67vh;
  img {
    height: 67vh;
  }
}
.other-videos {
  max-height: 90vh !important;
  overflow-y: scroll;
}
</style>