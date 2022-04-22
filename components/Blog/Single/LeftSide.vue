<template>
  <div>
    <div class="container">
      <div class="event-info">
        <div class="fast-info">
          <div class="d-flex">
            <span class="mr-2">
              <i class="fas fa-phone"></i>
            </span>
            <p class="m-0">0225366892</p>
          </div>
          <div class="d-flex">
            <span class="mr-2">
              <i class="far fa-envelope"></i>
            </span>
            <p class="m-0">Nile Medicine@gmail.com</p>
          </div>
          <div class="d-flex">
            <span class="mr-2">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <p class="m-0">
              Egypt International Exhibition Center, Cairo, Egypt
            </p>
          </div>
        </div>
        <div class="writeMessage my-5">
          <div class="field my-5">
            <h4 class="my-5 title">
              {{ $t('Write a Review') }}
            </h4>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    solo
                    name="input-7-4"
                    label="Help Other Visitors By Sharing Your Review."
                    append-icon="mdi-pencil-outline"
                    rows="8"
                    auto-grow
                  ></v-textarea>
                </v-col>
              </v-row>
              <button
                class="btn btn-dark text-white send-Btn"
                @click.prevent="send"
              >
                {{ $t('Send') }}
              </button>
            </v-form>
          </div>
        </div>
        <div class="user-raing my-5">
          <h4 class="my-5 title">
            {{ $t('User Rating') }}
          </h4>
          <div class="rating-info">
            <p class="d-flex">
              <span class="mr-2">4.0/5</span>
              <span><i class="fas fa-star text-gold"></i></span>
            </p>
            <p>42 Ratings</p>
            <p>18 Reviews</p>
          </div>
          <div class="rating-progress">
            <div class="progress mb-5">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 100%"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                20
              </div>
            </div>
            <div class="progress mb-5">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 75%"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                15
              </div>
            </div>
            <div class="progress mb-5">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 30%"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                6
              </div>
            </div>
            <div class="progress mb-5">
              <div
                class="progress-bar bg-success"
                role="progressbar"
                style="width: 15%"
                aria-valuenow="15"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                3
              </div>
            </div>
          </div>
        </div>

        <div class="user-reviews my-5">
          <h4 class="my-5 title">
            {{ $t('User Reviews') }}
          </h4>
          <div class="my-5">
            <div class="user-review-data" v-for="x in 5" :key="x">
              <div class="row">
                <div class="col-md-9 col-sm-12 my-3">
                  <div class="media">
                    <img
                      src="@/assets/images/amlak.png"
                      width="100"
                      class="mr-3"
                      alt="user-img"
                    />
                    <div class="media-body">
                      <h5 class="mt-0 usernAME">S S</h5>
                      <p class="text-dimied">I Will Be There On Time.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 col-sm-12 d-flex justify-content-center align-items-center">
                  <span v-for="x in 5" :key="x">
                    <i class="fas fa-star text-gold mr-2"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
.fast-info {
  font-size: 20px;
  i {
    color: #2e9fff;
  }
}
.event-info {
  .title {
    color: #004773;
  }
}
.progress{
  background: transparent;
}
</style>