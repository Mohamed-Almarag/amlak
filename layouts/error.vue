<template>
  <v-app dark>
    <v-container>
      <v-row justify="center" align="center">
        <v-col md="4" sm="6">
          <div class="image mt-4">
            <v-img
              src="https://cdn.dribbble.com/users/2046015/screenshots/6015680/media/c890b0febd049df48ce2c07a39b08a6c.gif"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col md="4" sm="6">
          <div class="context text-center mt-4">
            <div class="my-5 hidden-md-and-down">
              <h1
                v-if="error.statusCode === 404"
                class="display-2 font-weight-bold"
              >
                {{ pageNotFound }}
              </h1>
              <h1 v-else>
                {{ otherError }}
              </h1>
            </div>
            <div class="my-5 hidden-md-and-up">
              <h1 v-if="error.statusCode === 404" class="font-weight-bold">
                {{ pageNotFound }}
              </h1>
              <h1 v-else>
                {{ otherError }}
              </h1>
            </div>
            <NuxtLink to="/">
              {{ $t('Home Page') }}
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
