<template>
  <div class="units-holder">
    <div class="container">
      <tabs
        class="nav-pills nav-fill"
        v-if="$i18n.locale == 'en'"
        :data="en_tabsData"
      ></tabs>
      <tabs class="nav-pills nav-fill" v-else :data="ar_tabsData"></tabs>
      <div class="tab-content">
        <div class="tab-pane fade" id="tab1">tab1 data</div>
        <div class="tab-pane fade" id="tab2">tab2 data</div>
        <div class="tab-pane fade" id="tab3">tab3 data</div>
        <div class="tab-pane fade show active" id="tab4">
          <div class="row luxury-unit">
            <div class="col-md-6 col-sm-12">
              <div class="left-side">
                <h3>
                  {{ $t('luxury unit') }}
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis, debitis!
                </p>
                <div class="row" v-for="x in 5" :key="x">
                  <div class="col-2">
                    <p>unit area</p>
                  </div>
                  <div class="col-8 d-flex">
                    <span class="dotted-back"></span>
                  </div>
                  <div class="col-2">
                    <p>220M</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="image-holder">
                <img
                  src="@/assets/images/home/unite.png"
                  alt="unite-image"
                  class="img-fluid w-100"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="tab5">tab5 data</div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/Reusable/Tabs.vue'
export default {
  components: {
    Tabs,
  },
  data() {
    return {
      en_tabsData: [
        {
          id: 'tab1',
          title: 'Residential Tower',
        },
        {
          id: 'tab2',
          title: 'Villa',
        },
        {
          id: 'tab3',
          title: 'House',
        },
        {
          id: 'tab4',
          title: 'luxury apartment',
          active: true,
        },
        {
          id: 'tab5',
          title: 'Residential studio',
        },
      ],
      ar_tabsData: [
        {
          id: 'tab1',
          title: 'برج سكني',
        },
        {
          id: 'tab2',
          title: 'فيلا',
        },
        {
          id: 'tab3',
          title: 'منزل',
        },
        {
          id: 'tab4',
          title: 'شقة فاخرة',
          active: true,
        },
        {
          id: 'tab5',
          title: 'استوديو سكني',
        },
      ],
      lang:localStorage.getItem('lang')
    }
  },
}
</script>


<style lang="scss" scoped>
.units-holder {
  background: #f4f7fa;
  padding: 5% 0 2% 0;
  margin: 2% 0;
  .luxury-unit {
    color: #fff;

    .left-side {
      background: $main-color;
      padding: 40px 20px;
      border-radius: 10px;
    }

    .dotted-back {
      border-bottom: 2px dashed #fff;
      width: 100%;
      display: block;
      margin: 0;
      padding: 0;
      margin: auto;
    }
    .image-holder {
      img {
        border-radius: 10px;
        height: 400px;
      }
    }
  }
}
.nav-pills + .tab-content .tab-pane {
  min-height: 400px;
}
</style>