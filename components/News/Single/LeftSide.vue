<template>
  <div>
    <div class="container">
      <div class="neww-info">
        <div class="fast-info">
          <div class="d-flex" v-if="neww.phone">
            <span class="mr-2">
              <i class="fas fa-phone"></i> </span
            >+
            <p class="m-0">
              {{ neww.phone }}
            </p>
          </div>
          <div class="d-flex" v-if="neww.email">
            <span class="mr-2">
              <i class="far fa-envelope"></i>
            </span>
            <p class="m-0">
              {{ neww.email }}
            </p>
          </div>
          <div class="d-flex" v-if="neww.address">
            <span class="mr-2">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            <p class="m-0">
              {{ neww.address }}
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
                    v-model="commentText"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>

              <button
                class="btn btn-dark text-white send-Btn my-5"
                @click.prevent="comment"
              >
                {{ $t('Send') }}
              </button>
            </v-form>
          </div>
        </div>
        <GeneralComments :pageName="pageName" />
        <hr />
        <div class="writeMessage my-5">
          <div class="field my-5">
            <h4 class="my-5 title">
              {{ $t('Rating') }}
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
                    v-model="requestData.comment"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-card flat rounded="0">
                <h3 class="subtitle-1 text-uppercase font-weight-bold">
                  {{ $t('rate the product') }}
                </h3>
                <div>
                  <v-rating
                    v-model="requestData.value"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    required
                  ></v-rating>
                </div>
              </v-card>
              <button
                class="btn btn-dark text-white send-Btn my-5"
                @click.prevent="rate"
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
              <span class="mr-2">{{ neww.rate }}/5</span>
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

        <div class="user-reviews my-5" v-if="neww.rateable > 0">
          <h4 class="my-5 title">
            {{ $t('User Reviews') }}
          </h4>
          <div class="my-5">
            <div
              class="user-review-data"
              v-for="rating in neww.rateable"
              :key="rating.id"
            >
              <div class="row">
                <div class="col-md-9 col-sm-12 my-3">
                  <div class="media">
                    <img
                      v-if="rating.photo"
                      :src="rating.photo"
                      width="100"
                      class="mr-3"
                      alt="user-img"
                    />
                    <div class="media-body">
                      <h5 class="mt-0 usernAME">
                        {{ rating.user_id.first_name }}
                      </h5>
                      <p class="text-dimied">
                        {{ rating.message }}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    col-md-3 col-sm-12
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <span
                    v-for="ratingNumber in rating.value"
                    :key="ratingNumber.id"
                  >
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
import { postMethods } from '@/API/helpers'
export default {
  props: ['neww'],
  data() {
    return {
      requestData: {
        comment: null,
        value: null,
        type: null,
        id: this.$route.params.slug,
      },
      commentText: '',
      id: this.$route.params.slug,
    }
  },
  methods: {
    rate() {
      postMethods(`rate`, {
        value: this.requestData.value,
        message: this.requestData.comment,
        type: 'new',
        id: parseInt(this.requestData.id),
      })
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    comment() {
      postMethods(`comments`, {
        note: this.commentText,
        type: 'new',
        id_type: parseInt(this.id),
      })
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      console.log(this.$store.state)
    },
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
.progress {
  background: transparent;
}
</style>