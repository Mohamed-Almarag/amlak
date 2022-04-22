<template>
  <div class="">
    <!-- <v-card class="mx-auto my-12" max-width="374" v-if="item.lenght > 0"> -->
    <v-card class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        :src="item.photo"
      ></v-img>

      <v-row>
        <v-col md="8" sm="12">
          <v-card-text>
            <h6>
              {{ item.title }}
            </h6>
          </v-card-text>
        </v-col>
        <v-col md="4" sm="12">
          <v-card-text>
            <div class="text-subtitle-1">
              <span class="current-price">
                {{ item.offer_price }}
              </span>
              <span
                ><del class="deleted-price">{{ item.price }}</del></span
              >
            </div>
          </v-card-text>
        </v-col>
      </v-row>

      <v-card-text>
        <p v-html="item.description.substring(0, 80) + '...'" class="text-dimied"></p>
      </v-card-text>
      <v-container>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <!-- <div class="grey--text ms-4">4.5 (413)</div> -->
        </v-row>
        <v-card-text class="ml-0 pl-0">
          <div>
            {{ item.create_dates.created_at_human }}
          </div>
        </v-card-text>
      </v-container>

      <!-- <v-divider class="mx-4"></v-divider> -->

      <!-- <v-card-title>Tonight's availability</v-card-title> -->

      <!-- <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text> -->

      <!-- <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
    </v-card-actions> -->
    </v-card>
    <!-- <div class="" v-else>
        sorry no data
    </div> -->
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style>
</style>