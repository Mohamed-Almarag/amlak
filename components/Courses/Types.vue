<template>
  <div class="container">
    <div class="form-box">
      <div class="form-tab">
        <tabs
          class="nav-pills nav-fill"
          :data="$i18n.locale == 'en' ? en_tabsData : ar_tabsData"
        ></tabs>
        <!-- <tabs class="nav-pills nav-fill" :data="tabsData"></tabs> -->
        <div class="container-fluid">
          <h2 class="my-4" v-if="$i18n.local == 'en'">
            {{ $t('Orthopedics') }}
            <span class="colored-span">
              {{ $t('Courses') }}
            </span>
          </h2>
          <h2 class="my-4" v-else>
            <span class="colored-span">
              {{ $t('Courses') }}
            </span>
            <span>
              {{ $t('Orthopedics') }}
            </span>
          </h2>
        </div>
        <div class="tab-content">
          <div class="tab-pane fade show active pt-5" id="tab1">
            <v-row>
              <v-col
                lg="3"
                md="6"
                sm="12"
                v-for="course in freeCourses"
                :key="course.id"
              >
                <nuxt-link :to="`/courses/${course.id}`" class="text-decoration-none">
                  <CoursesCard :item="course" />
                </nuxt-link>
                <!-- v-if="freeCourses && freeCourses.lenght > 0" -->
                <!-- <div class="" v-else>
                  <h2>
                    {{ $t('No Free Courses Till now') }}
                  </h2>
                </div> -->
                <!-- <pagination :perPage="perPage" :total="total"></pagination> -->
              </v-col>
            </v-row>
          </div>
          <div class="tab-pane fade" id="tab2">
            <v-row>
              <v-col
                lg="3"
                md="6"
                sm="12"
                v-for="course in sponsorCourses"
                :key="course.id"
              >
                <nuxt-link :to="`/courses/${course.id}`" class="text-decoration-none">
                  <CoursesCard :item="course" />
                </nuxt-link>
                <!-- <div class="" v-else>
                  <h2>
                    {{ $t('No sponsor Courses Till now') }}
                  </h2>
                </div> -->
                <!-- <pagination :perPage="perPage" :total="total"></pagination> -->
              </v-col>
            </v-row>
          </div>
          <div class="tab-pane fade" id="tab3">
            <v-row>
              <v-col
                lg="3"
                md="6"
                sm="12"
                v-for="course in paidCourses"
                :key="course.id"
              >
                <nuxt-link :to="`/courses/${course.id}`" class="text-decoration-none">
                  <CoursesCard :item="course" />
                </nuxt-link>
                <!-- <div class="" v-else>
                  <h2>
                    {{ $t('No paid  Courses Till now') }}
                  </h2>
                </div> -->
                <!-- <pagination :perPage="perPage" :total="total"></pagination> -->
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Reusable/Tabs.vue'
// import pagination from "@/components/General/Pagination.vue"
export default {
  props: ['show', 'freeCourses', 'sponsorCourses', 'paidCourses'],
  data() {
    return {
      loading: false,
      en_tabsData: [
        {
          id: 'tab1',
          title: 'Free Courses',
          active: true,
        },
        {
          id: 'tab2',
          title: 'Sponsored Courses',
        },
        {
          id: 'tab3',
          title: 'Paid Courses',
        },
      ],
      ar_tabsData: [
        {
          id: 'tab1',
          title: 'دورات مجانيه ',
          active: true,
        },
        {
          id: 'tab2',
          title: 'دورات مموله ',
        },
        {
          id: 'tab3',
          title: 'دورات مدفوعه ',
        },
      ],
    }
  },
  components: {
    Tabs,
    // pagination
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  .image {
    border-bottom: 1px solid #eee;
    margin: 10px;

    img {
      mix-blend-mode: multiply;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
