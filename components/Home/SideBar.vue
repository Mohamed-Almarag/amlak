<template>
  <div>
    <form @submit.prevent="search">
      <div class="aside-holder">
        <h6 class="title">
          <v-icon>mdi-home-search </v-icon>
          <span class="colored-title">{{$t('Search for a property')}}</span>
        </h6>
        <v-row>
          <v-col lg="6" md="6" sm="12">
            <v-select
              :items="places"
              filled
              label="All Places"
              v-model="selectedPlace"
            ></v-select>
          </v-col>
          <v-col lg="6" md="6" sm="12">
            <v-select
              :items="cities"
              filled
              label="All Places"
              v-model="selectedCity"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              :items="sections"
              filled
              label="All Places"
              v-model="selectedSection"
            ></v-select>
          </v-col>
        </v-row>
        <div class="types">
          <v-container class="px-0" fluid>
            <v-row>
              <v-col lg="3" md="3" sm="12">
                <v-checkbox v-model="Selling" :label="`Selling`"></v-checkbox>
              </v-col>
              <v-col lg="3" md="3" sm="12">
                <v-checkbox v-model="Renting" :label="`Renting`"></v-checkbox>
              </v-col>
              <v-col lg="6" md="6" sm="12">
                <v-checkbox
                  v-model="Ads"
                  :label="`Ads with pictures only`"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
      <v-row>
        <v-col lg="6" md="6" sm="12" class="d-flex px-2" justify="start" align="start">
          <label for="from">
            {{$t('Price From')}}
          </label>
          <v-text-field v-model="priceFrom" filled></v-text-field>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="d-flex px-2" justify="start" align="start">
          <label for="to">
            {{$t('Price To')}}
          </label>
          <v-text-field v-model="priceTo" filled></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" md="6" sm="12" class="d-flex px-2" justify="start" align="start">
          <label for="from">
            {{$t('Space From')}}
          </label>
          <v-text-field v-model="spaceFrom" filled></v-text-field>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="d-flex px-2" justify="start" align="start">
          <label for="to">
            {{$t('Space To')}}
          </label>
          <v-text-field v-model="spaceTo" filled></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-radio-group v-model="selectedPaymrentMethod" row>
          <v-radio
            label="installment"
            value="1"
            name="paymrentMethod"
          ></v-radio>
          <v-radio label="Cash Money" value="2" name="paymrentMethod"></v-radio>
        </v-radio-group>
      </v-row>
      <button class="btn btn-block burble-button">
        {{$t('Search')}}
      </button>
    </form>
    <div class="fastNews my-4">
      <div class="fastNewsData py-4 px-2">
        <ul class="list-unstyled m-0">
          <li v-for="x in 5" :key="x">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-2">
                <h5 class="text-danger">
                  <b>{{ x }}</b>
                </h5>
              </div>
              <div class="col-10">{{$t('fast new')}} {{ x }}</div>
            </div>
            <hr class="mx-5" v-if="x < 5" />
          </li>
        </ul>
      </div>
    </div>
    <div class="writters my-4">
      <div class="writters-holder">
        <div class="row" v-for="x in 5" :key="x">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="writter-img text-center">
              <img
                src="@/assets/images/amlak.png"
                alt="writter image"
                srcset=""
                width="100"
              />
            </div>
          </div>
          <div class="col-lg-8 col-md-6 col-sm-12">
            <h5 class="colored-title">
              {{$t('writter name')}}
            </h5>
            <p>
              {{$t('We will never forget that we had a president')}}
            </p>
            <span class="colored-writter-hr" v-if="x < 5"></span>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-ligh shadow-none">
      {{$t('More')}}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: ['place1', 'place2', 'place3', 'place4'],
      cities: ['citiy 1', 'citiy 2', 'citiy 3', ' citiy 4'],
      sections: ['section 1', 'section 2', 'section 3', ' section 4'],
      Selling: false,
      Renting: false,
      Ads: false,
      selectedPlace: null,
      selectedCity: null,
      selectedSection: null,
      ///
      priceFrom: '',
      priceTo: '',
      spaceFrom: '',
      spaceTo: '',
      selectedPaymrentMethod: '',
    }
  },
  methods: {
    search() {
      console.log('places', this.selectedPlace)
      console.log('cities', this.selectedCity)
      console.log('sections', this.selectedSection)
      console.log('priceFrom', this.priceFrom)
      console.log('priceTo', this.priceTo)
      console.log('spaceFrom', this.spaceFrom)
      console.log('spaceTo', this.spaceTo)
      console.log('selectedPaymrentMethod', this.selectedPaymrentMethod)
    },
    // test(item){
    //     console.log(item);
    // }
  },
}
</script>

<style lang="scss" scoped>
.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  margin-bottom: 0 !important;
}
.colored-title {
  color: #3b6aee;
}

.fastNews {
  background: #e8e8ee;
  padding: 20px;
  margin: 40px 0;
  .fastNewsData {
    background: #fff;
  }
}
.writters {
  border: 2px solid $main-color;
  padding: 10px;
  .colored-writter-hr {
    background: $main-color;
    width: 100%;
    margin: auto;
    height: 2px;
    display: block;
  }
}
.writter-img {
  border: 1px solid $main-color;
  img {
    padding: 5px;
  }
}
</style>