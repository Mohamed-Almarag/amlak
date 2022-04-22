<template>
  <div class="my-5">
    <div class="container-fluid">
      <div class="data-holder">
        <div class="img-holder" v-if="course.photo">
          <img
            :src="course.photo"
            alt=""
            class="img-fluid w-100 course-photo"
            draggable="false"
          />
        </div>
        <div class="course-info">
          <div class="course-section px-3 py-2 mb-3" v-if="course.title">
            {{ course.title }}
          </div>
          <!-- <h2 class="course-name">
            {{ course.create_dates.created_at_human }}
          </h2> -->
          <div class="date d-flex" v-if="course.create_dates">
            <span>
              <i class="fas fa-circle circle"></i>
            </span>
            <p class="m-0">
              {{ course.create_dates.created_at_human }}
            </p>
          </div>
          <div class="ratings" v-if="course.rate">
            <div class="rating" v-if="course.rate == 1">
              <span class="mr-2" v-for="x in 1" :key="x">
                <i class="fas fa-star text-gold"></i>
              </span>
            </div>
            <div class="rating" v-if="course.rate == 2">
              <span class="mr-2" v-for="x in 2" :key="x">
                <i class="fas fa-star text-gold"></i>
              </span>
            </div>
            <div class="rating" v-if="course.rate == 3">
              <span class="mr-2" v-for="x in 3" :key="x">
                <i class="fas fa-star text-gold"></i>
              </span>
            </div>
            <div class="rating" v-if="course.rate == 4">
              <span class="mr-2" v-for="x in 4" :key="x">
                <i class="fas fa-star text-gold"></i>
              </span>
            </div>
            <div class="rating" v-if="course.rate == 5">
              <span class="mr-2" v-for="x in 5" :key="x">
                <i class="fas fa-star text-gold"></i>
              </span>
            </div>
            <div class="rating" v-else>
              <span class="mr-2">
                <span class="text-white">0 / 5 </span
                ><i class="fas fa-star text-gold"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="course-intro p-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 col-sm-12 mb-3">
            <p
              v-html="course.description.substr(0, 100) + '...'"
              v-if="course.description"
            ></p>
            <div class="tags-holder">
              <div class="tags" v-for="tag in course.tags" :key="tag.id">
                <span class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="row d-flex">
              <div class="col-md-5 col-sm-12 mb-3">
                <button class="btn btn-success btn-block py-3">
                  {{ $t('Buy Now') }}
                </button>
              </div>
              <div class="col-md-5 col-sm-12 mb-3">
                <div class="action-div">
                  <p class="m-0 mx-2 course-price text-dimied">
                    <del> {{ course.price }}</del>
                  </p>
                  <p class="my-0 course-price text-success">
                    {{ course.offer_price }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="course-features mt-12">
          <h3 class="">
            <span class="bordered-bottom">
              {{ $t("What you'll") }}
            </span>
            <span>
              {{ $t('learn') }}
            </span>
          </h3>
          <div class="row">
            <div class="col-md-6 col-sm-12" v-if="course.learn_objective">
              <!-- <div class="d-flex mb-3" v-for="object  in course.learn_objective" :key="object.id"> -->
              <div class="d-flex mb-3">
                <div class="icon mr-3">
                  <i class="fas fa-check text-success"></i>
                </div>
                <div class="feature">
                  <p class="m-0" v-html="course.learn_objective"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <!-- <div class="features-img">
                <img
                  src="@/assets/images/courses/features.png"
                  alt="image"
                  class="img-fluid w-100"
                />
              </div> -->
              <!-- <figure
                class="entry-media"
                :class="blog.type === 'video' ? 'entry-video' : ''"
                v-if="blog.image.length <= 1"
              >
                <nuxt-link
                  :to="'/blog/single/default/' + blog.slug"
                  v-if="blog.type !== 'video'"
                >
                  <img
                    v-lazy="`${baseUrl}${blog.image[0].url}`"
                    alt="blog"
                    :width="blog.image[0].width"
                    :height="blog.image[0].height"
                  />
                </nuxt-link>

                <template v-else>
                  <img
                    v-lazy="`${baseUrl}${blog.image[0].url}`"
                    alt="blog"
                    :width="blog.image[0].width"
                    :height="blog.image[0].height"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=vBPgmASQ1A0//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1"
                    @click.prevent="openVideoModal({href:href})"
                    class="btn-video btn-iframe"
                    v-if="blog.type === 'video'"
                    ><i class="icon-play"></i
                  ></a>
                </template>
              </figure> -->

              <template>
                <!-- <img
                    v-lazy="`${baseUrl}${course.image[0].url}`"
                    alt="course"
                    :width="course.image[0].width"
                    :height="course.image[0].height"
                  /> -->
                <a
                  href="https://www.youtube.com/watch?v=vBPgmASQ1A0//www.youtube.com/embed/vBPgmASQ1A0?autoplay=1"
                  @click.prevent="openVideoModal({ href: href })"
                  class="btn-video btn-iframe"
                  v-if="course.type === 'video'"
                  ><i class="icon-play"></i
                ></a>
              </template>
            </div>
          </div>
        </div>

        <div class="requirments my-11">
          <h3 class="">
            <span class="bordered-bottom">
              {{ $t('Requirements') }}
            </span>
          </h3>
          <p class="text-dimied my-5" v-html="course.requirement"></p>
        </div>
        <div class="Description my-11">
          <h3 class="">
            <span class="bordered-bottom">
              {{ $t('Description') }}
            </span>
          </h3>
          <!-- <h5 class="hi mt-5">Hi!!!</h5> -->
          <p class="text-dimied my-5">
            {{ course.description }}
          </p>
        </div>
        <div class="course-for my-11">
          <h3 class="">
            <span class="bordered-bottom">
              {{ $t('Who this') }}
            </span>
            <span>
              {{ $t('course is for') }}
            </span>
          </h3>
          <p class="text-dimied my-5">
            {{ course.to_whom }}
          </p>
        </div>
        <div
          class="course-content my-11"
          v-if="course.section && course.section.length > 0"
        >
          <h3 class="">
            <span class="bordered-bottom">
              {{ $t('Course') }}
            </span>
            <span>
              {{ $t('Content') }}
            </span>
          </h3>
          <p class="text-dimied my-5" v-if="course.section.length > 0">
            <!-- {{course.section.length}} sections • 112 lectures • 6h 56m total length -->
            {{ course.section.length }}
          </p>
          <div class="" v-if="course.section">
            <div class="holder" v-for="sec in course.section" :key="sec.id">
              <div class="row">
                <div class="col-md-5 col-sm-12">
                  <div class="row justify-content-center align-items-center">
                    <div class="col-2">
                      <div class="play">
                        <i class="fas fa-play-circle fa-2x text-success"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="video-name">
                        <b>Contents Of Theis Section</b>
                      </div>
                    </div>
                    <div class="col-2">
                      <p class="m-0 text-dimied video-time">06:34</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="more-btn my-11">
            <div class="d-flex align-items-center">
              <div class="icon">
                <!-- <i class="fas fa-chevron-down text-dimied"></i> -->
                <i class="fas fa-angle-down"></i>
              </div>
              <div class="button">
                <button
                  class="
                    btn btn-light
                    shadow-none
                    border-0
                    text-dimied
                    bg-transparent
                  "
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 class="bordered-bottom mb-11">
        {{ $t('Instructor') }}
      </h3>
    </div>
    <div class="instructor">
      <div class="container-fluid">
        <div class="instrictor-data py-10">
          <div class="row">
            <div class="col-md-5 col-sm-12">
              <div class="row">
                <div class="col-md-3 col-sm-12" v-if="course.lecturer">
                  <img
                    :src="course.lecturer.photo"
                    alt="instrictor-img"
                    class="img-fluid instrictor-img"
                  />
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-center">
                  <ul class="list-unstyled m-0 d-flex flex-column">
                    <li v-if="course.lecturer">
                      <h3>
                        {{ course.lecturer.name }}
                      </h3>
                    </li>
                    <li v-if="course.lecturer">
                      <span class="mr-2">
                        <i class="fas fa-star text-gold"></i>
                      </span>
                      <span>
                        {{ course.lecturer.rate }} Instructor Rating
                      </span>
                    </li>
                    <li>
                      <span class="mr-2">
                        <i class="fas fa-medal text-gold"></i>
                      </span>
                      <span> 1,465 Reviews </span>
                    </li>
                    <li>
                      <span class="mr-2">
                        <i class="fas fa-user-circle text-gold"></i>
                      </span>
                      <span> 31,345 Students </span>
                    </li>
                    <li>
                      <span class="mr-2">
                        <i class="fas fa-globe-africa text-gold"></i>
                      </span>
                      <span> 3 Courses </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="instructor-para">
            <p class="text-dimied mt-11 mb-5" v-if="course.lecturer">
              {{ course.lecturer.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="user-rating">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="user-raing my-5">
              <h4 class="my-5 title">
                {{ $t('User Rating') }}
              </h4>
              <div class="rating-info">
                <div class="ratings" v-if="course.rate">
                  <div class="rating" v-if="course.rate == 1">
                    <span class="mr-2" v-for="x in 1" :key="x">
                      1 / 5 <i class="fas fa-star text-gold"></i>
                    </span>
                  </div>
                  <div class="rating" v-if="course.rate == 2">
                    <span class="mr-2" v-for="x in 2" :key="x">
                      2 / 5 <i class="fas fa-star text-gold"></i>
                    </span>
                  </div>
                  <div class="rating" v-if="course.rate == 3">
                    <span class="mr-2" v-for="x in 3" :key="x">
                      3 / 5 <i class="fas fa-star text-gold"></i>
                    </span>
                  </div>
                  <div class="rating" v-if="course.rate == 4">
                    <span class="mr-2" v-for="x in 4" :key="x">
                      4 / 5 <i class="fas fa-star text-gold"></i>
                    </span>
                  </div>
                  <div class="rating" v-if="course.rate == 5">
                    <span class="mr-2" v-for="x in 5" :key="x">
                      5 / 5 <i class="fas fa-star text-gold"></i>
                    </span>
                  </div>
                  <div class="rating mb-2" v-else>
                    <span class="mr-2">
                      <span class="">0 / 5 </span
                      ><i class="fas fa-star text-gold"></i>
                    </span>
                  </div>
                </div>
                <p>602 Ratings</p>
                <p>260 Reviews</p>
              </div>
              <div class="rating-progress">
                <div class="progress mb-5">
                  <div
                    class="progress-bar text-dark"
                    role="progressbar"
                    style="width: 100%"
                    aria-valuenow="430"
                    aria-valuemin="0"
                    aria-valuemax="500"
                  >
                    430
                  </div>
                </div>
                <div class="progress mb-5">
                  <div
                    class="progress-bar text-dark"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="360"
                    aria-valuemin="0"
                    aria-valuemax="500"
                  >
                    360
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="user-reviews my-5"
        v-if="course.rateable && course.rateable.length > 0"
      >
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <h3 class="my-5 title">
              <span class="bordered-bottom">{{ $t('User') }}</span>
              <span class="">{{ $t('Reviews') }}</span>
            </h3>
            <div class="my-5" v-if="course.rateable">
              <div
                class="user-review-data"
                v-for="say in course.rateable"
                :key="say.id"
              >
                <div class="row">
                  <div class="col-md-9 col-sm-12 my-3">
                    <div class="media">
                      <img
                        v-if="say.user_id"
                        :src="say.user_id.image"
                        width="100"
                        class="mr-3"
                        alt="user-img"
                      />
                      <div class="media-body">
                        <h5 class="mt-0 usernAME" v-if="say.user_id">
                          {{ say.user_id.first_name }}message
                        </h5>
                        <p class="text-dimied" v-if="say.message">
                          {{ say.message }}
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
                    <div class="ratings" v-if="say">
                      <div class="rating" v-if="say.value == 1">
                        <span class="mr-2" v-for="x in 1" :key="x">
                          <i class="fas fa-star text-gold"></i>
                        </span>
                      </div>
                      <div class="rating" v-if="say.value == 2">
                        <span class="mr-2" v-for="x in 2" :key="x">
                          <i class="fas fa-star text-gold"></i>
                        </span>
                      </div>
                      <div class="rating" v-if="say.value == 3">
                        <span class="mr-2" v-for="x in 3" :key="x">
                          <i class="fas fa-star text-gold"></i>
                        </span>
                      </div>
                      <div class="rating" v-if="say.value == 4">
                        <span class="mr-2" v-for="x in 4" :key="x">
                          <i class="fas fa-star text-gold"></i>
                        </span>
                      </div>
                      <div class="rating" v-if="say.value == 5">
                        <span class="mr-2" v-for="x in 5" :key="x">
                          <i class="fas fa-star text-gold"></i>
                        </span>
                      </div>
                      <div class="rating" v-if="say.value == 0">
                        <span class="mr-2">
                          <span class="text-white">0 / 5 </span
                          ><i class="fas fa-star text-gold"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bought my-11">
        <h3 class="my-11 title">
          <span class="bordered-bottom">{{ $t('Students') }}</span>
          <span class="">{{ $t('Also Bought') }}</span>
        </h3>
        <div
          class="instructor mb-7"
          v-for="(course, index) in courses"
          :key="index"
        >
          <div class="row">
            <div class="col-md-3 col-sm-12 mb-3">
              <img
                :src="course.photo"
                :alt="course.title"
                class="img-fluid w-100 ml-2"
              />
            </div>
            <div
              class="
                col-md-9 col-sm-12
                d-flex
                justify-content-center
                align-items-center
              "
            >
              <div class="row">
                <div class="col-md-9 col-sm-12 mb-2">
                  <h4 class="title">
                    {{ course.title }}
                  </h4>
                  <p class="text-dimied" v-html="course.description"></p>
                  <div class="rating">
                    <span
                      class="mr-2"
                      v-for="(x, index) in course.rate"
                      :key="index"
                    >
                      <i class="fas fa-star text-gold"></i>
                    </span>
                    ({{ course.rate }} / 5.0)
                  </div>
                </div>
                <div
                  class="
                    col-md-2 col-sm-12
                    d-flex
                    justify-content-center
                    align-items-end
                  "
                >
                  <!-- <button class="btn btn-primary btn-block">Buy Now</button> -->
                  <nuxt-link
                    class="text-decoration-none"
                    :to="{
                      path: '/courses/bye',
                      query: { courseId: `${course.id}` },
                    }"
                  >
                    <button class="btn btn-primary btn-block">Buy Now</button>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-11 d-flex justify-content-center align-items-center">
          <button class="btn btn-light moreBtn">More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.slug,
    }
  },
  methods: {
    getCourse(id) {
      this.$store.dispatch('courses/getCourse', id)
    },
    getCourses() {
      this.$store.dispatch('courses/getCourses')
    },
    openVideoModal: function (src) {
      this.$modal.show(
        () => import('~/components/modals/VideoModal'),
        {
          href: this.href,
        },
        { width: '1060', height: '596', adaptive: true }
      )
    },
    // goTOBy(courseId) {
    //   this.$router.push({
    //     path: '/courses/bye',
    //     query: { courseId: `${courseId}` },
    //   })
    // },
  },
  computed: {
    course() {
      return this.$store.state.courses.Course
    },
    courses() {
      return this.$store.state.courses.Courses
    },
  },
  created() {
    this.getCourse(this.id)
    this.getCourses()
  },
}
</script>

<style lang="scss" scoped>
.text-dimied {
  color: #707070 !important;
}
i.circle:before {
  color: #004773;
  background: #004773;
  border-radius: 50%;
  margin: 0 5px 0 0;
}
.data-holder {
  position: relative;
  .course-info {
    position: absolute;
    left: 20px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
    .course-name {
      @media (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
  .course-section {
    display: inline-block;
    background: #004773;
    border-radius: 5px;
  }
}
.course-intro {
  .action-div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
.bordered-bottom {
  color: #004773;
}
.course-features {
  .features-img {
    img {
      border-radius: 5px;
    }
  }
}
.Description {
  .hi {
    color: #004773;
  }
}
.instructor {
  background: #f8f8f8;
  .instrictor-img {
    border-radius: 5px;
    border: 2px solid green;
  }
}
.user-rating {
  .progress {
    background: transparent;
    .progress-bar {
      background: #c2cf06;
    }
  }
}
.moreBtn {
  background: transparent;
  border: 1px solid;
  padding: 10px 50px;
  margin: 5% 0;
}
.course-photo {
  height: 70vh;
  object-fit: fill;
}
.tags-holder {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tag {
    background: #cccc;
    color: #333;
    padding: 10px 15px;
    border-radius: 5px;
    // margin: 0 10px;
    display: inline-block;
    width: 100%;
  }
}
.instructor {
  img {
    @media (max-width: 992px) {
      margin-left: 0 !important;
    }
  }
}
</style>