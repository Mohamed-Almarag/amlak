<template>
  <v-container>
    <div class="ma-auto my-5 position-relative">
      <form @submit.prevent class="my-4">
        <v-row>
          <v-col cols="12" sm="6" class="d-flex justify-center align-center">
            <div>
              <button
                class="green white--text darken-1 py-2 px-5 rounded"
                @click="submitButton(code)"
              >
                {{ $t('subscribe') }}
              </button>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div>
              <div>
                <input
                  type="number"
                  class="pa-3"
                  v-model="code"
                  :placeholder="$t(`check code`)"
                />
              </div>
              <div>
                <button
                  class="error white--text darken-1 pa-3 rounded"
                  @click="resendCodeHandler"
                >
                  {{ buttonText }}
                </button>
              </div>
            </div>
          </v-col>
        </v-row>
      </form>
    </div>
    <div class="context text-center">
      {{ context }}
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['buttonText', 'submitButton', 'resendCodeHandler', 'context'],
  data() {
    return {
      code: '',
      loading: false,
      snackbar: false,
      snackbarColor: 'default',
    }
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.position-relative {
  position: relative;
}

input[type='number'] {
  border: 2px solid;
  width: 250px;
  margin: 20px auto;
}

button.error {
  width: 250px;
  height: 45px;
}
</style>
