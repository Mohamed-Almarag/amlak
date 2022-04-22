<template>
  <v-toolbar class="grey lighten-4" flat rounded>
    <v-container>
      <v-row no-gutters align="center" justify="center" class="lg-row">
        <v-col cols="12" sm="2">
          <div>
            <h5 class="text-uppercase" v-if="count > 1">
              <span class="error--text">{{ count }}</span> {{ $t('products') }}
            </h5>
            <h5 class="text-uppercase" v-else-if="count == 1">
              <span class="error--text">{{ count }}</span>
              {{ $t('products').substring(0, 7) }}
            </h5>
            <h5 v-else-if="count == 0" class="error--text text-uppercase">
              {{ $t('nothing') }}
            </h5>
          </div>
        </v-col>

        <v-col cols="12" sm="8">
          <v-row no-gutters justify="center" align="center">
            <v-col cols="12" sm="6" class="px-2">
              <v-select
                :items="selectors"
                label="Sort by"
                color="grey"
                dense
                outlined
              ></v-select>
            </v-col>

            <v-col cols="12" sm="6" class="px-2">
              <v-select
                :items="show"
                label="Show"
                color="grey"
                dense
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="2">
          <div class="view d-flex justify-end">
            <v-btn color="blue" class="py-5" text @click="showAsRow">
              <v-icon v-if="!isRow"> mdi-format-columns </v-icon>
              <v-icon v-else> mdi-vector-square </v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters align="center" justify="space-between" class="sm-row">
        <v-col cols="6">
          <div>
            <h5 class="text-uppercase" v-if="count > 1">
              <span class="error--text">{{ count }}</span> {{ $t('products') }}
            </h5>
            <h5 class="text-uppercase" v-else-if="count == 1">
              <span class="error--text">{{ count }}</span>
              {{ $t('products').substring(0, 7) }}
            </h5>
            <h5 class="error--text text-uppercase" v-else-if="count == 0">
              {{ $t('nothing') }}
            </h5>
          </div>
        </v-col>
        <v-col cols="6">
          <v-row no-gutters align="center" justify="space-between">
            <v-col cols="3">
              <v-btn color="blue" class="py-5" text @click="showAsRow">
                <v-icon v-if="!isRow"> mdi-format-columns </v-icon>
                <v-icon v-else> mdi-vector-square </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="3">
              <v-btn color="blue" text @click="dialogHandler">
                <v-icon>mdi-filter-menu-outline</v-icon>
              </v-btn>
              <ReusableDialogLG
                :dialog="dialog"
                title="filterations"
                :dialogHandler="dialogHandler"
              >
                <v-col cols="12">
                  <v-row no-gutters justify="center" align="center">
                    <v-col cols="12">
                      <v-select
                        :items="selectors"
                        label="Sort by"
                        color="grey"
                        dense
                        outlined
                      ></v-select>
                    </v-col>

                    <v-col cols="12">
                      <v-select
                        :items="show"
                        label="Show"
                        color="grey"
                        dense
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-col>
              </ReusableDialogLG>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
export default {
  props: ['count', 'isRow'],
  // created() {
  //   console.log(this.count)
  // },
  data() {
    return {
      selectors: ['name', 'size', 'date', 'recent added'],
      show: [10, 20, 30, 40, 50],
      dialog: false,
    }
  },
  methods: {
    showAsRow() {
      this.$emit('row')
    },
    dialogHandler() {
      this.dialog = !this.dialog
    },
  },
}
</script>

<style lang="scss" scoped>
.v-toolbar {
  .lg-row {
    .theme--light.v-input {
      transform: translateY(11px);
    }
  }

  .sm-row {
    display: none;
  }

  @media (max-width: 750px) {
    .lg-row {
      display: none;
    }
    .sm-row {
      display: flex;
    }
  }
}
</style>
