<template>
  <div class="container">
    <div class="form-box">
      <div class="form-tab">
        <tabs
          class="nav-pills nav-fill"
          :data="$i18n.locale == 'en' ? en_tabsData : ar_tabsData"
        ></tabs>
        <!-- <tabs class="nav-pills nav-fill" :data="tabsData"></tabs> -->
        <div class="tab-content">
          <div class="tab-pane fade show active pt-5" id="tab1">
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
            <v-row>
              <v-col lg="3" md="6" sm="12" v-for="x in 10" :key="x.id">
                <HomeCoursesCard />
                <!-- <pagination :perPage="perPage" :total="total"></pagination> -->
              </v-col>
            </v-row>
          </div>
          <div class="tab-pane fade" id="tab2">tab2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Reusable/Tabs.vue'
// import pagination from "@/components/General/Pagination.vue"
export default {
  props: ['items', 'show'],
  data() {
    return {
      loading: false,
      en_tabsData: [
        {
          id: 'tab1',
          title: 'All Courses',
          active: true,
        },
        {
          id: 'tab2',
          title: 'Free Courses',
        },
      ],
      ar_tabsData: [
        {
          id: 'tab1',
          title: 'جميع الدورات',
          active: true,
        },
        {
          id: 'tab2',
          title: 'دورات مجانيه ',
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
