<template>
  <div>
    <v-container>
      <div class="container-holder">
        <ReusableSimbleCover
          :title="$t('Classified Ads')"
          :imgSrc="'@/assets/images/classified/cover.png'"
        />
        <section class="my-5 pt-5">
          <div class="adds">
            <div class="row justify-content-between align-items-center">
              <div class="add-title">
                <h2 class="add-title bordered-bottom">New ads</h2>
              </div>
              <div class="button-holder">
                <button class="btn burble-button px-5">
                  {{ $t('Add An Ad') }}
                </button>
              </div>
            </div>
          </div>
          <div class="tabs-data-holder">
            <div class="tabs-holder">
              <ReusableAddsTab class="nav-pills nav-fill" :data="tabsData" />
            </div>

            <div class="tab-content">
              <div class="tab-pane fade show active pt-5" id="tab1">
                <div class="container-fluid">
                  <h2 class="my-4">
                    Orthopedics <span class="colored-span">Courses</span>
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
              <div class="tab-pane fade" id="tab3">tab3</div>
              <div class="tab-pane fade" id="tab4">tab4</div>
              <div class="tab-pane fade" id="tab5">tab5</div>
              <div class="tab-pane fade" id="tab6">tab6</div>
            </div>
          </div>
        </section>
      </div>
    </v-container>
  </div>
</template>

<script>
// import pagination from '@/components/General/Pagination.vue'
export default {
  head: {
    title: 'Classified Ads',
  },
  data() {
    return {
      tabsData: [
        {
          id: 'tab1',
          title: 'Apartment',
          icon: 'far fa-building fa-2x',
          active: true,
        },
        {
          id: 'tab2',
          title: 'Villa',
          icon: 'fas fa-place-of-worship fa-2x',
        },
        {
          id: 'tab3',
          title: 'Land',
          icon: 'fas fa-landmark fa-2x',
        },
        {
          id: 'tab4',
          title: 'Home',
          icon: 'fas fa-home fa-2x',
        },
        {
          id: 'tab5',
          title: 'Office',
          icon: 'fas fa-hotel fa-2x',
        },
        {
          id: 'tab6',
          title: 'Building',
          icon: 'fas fa-city fa-2x',
        },
      ],
    }
  },
  components: {
    // pagination,
  },
}
</script>

<style lang="scss" scoped>
.nav-link {
  background: $main-color !important;
  color: #fff !important;
}
.tabs-holder {
  margin: 5% 0;
  background: #fbfbfb;
  padding: 5% 0;
}
</style>