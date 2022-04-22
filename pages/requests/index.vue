<template>
  <div class="my-2" :class="$i18n.locale">
    <div class="cover">
      <h2 class="h1">
        {{ $t('Submit An Application For A Housing Unit') }}
      </h2>
    </div>
    <div class="filling-data">
      <v-container>
        <div class="text-center p-5">
          <h2>
            {{ $t('Please Fill In The Information Correctly And Completely') }}
          </h2>
        </div>
        <form @submit.prevent="handleSubmit">
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  :label="$t('Your Name * ')"
                  v-model="user.name"
                  :class="{
                    'is-invalid': submitted && $v.user.name.$error,
                  }"
                  required
                ></v-text-field>
                <div
                  v-if="submitted && !$v.user.name.required"
                  class="invalid-feedback"
                >
                  field is required
                </div>
                <v-text-field
                  :label="$t('Your Phone * ')"
                  v-model="user.phone"
                  :class="{
                    'is-invalid': submitted && $v.user.phone.$error,
                  }"
                  required
                ></v-text-field>
                <div
                  v-if="submitted && !$v.user.phone.required"
                  class="invalid-feedback"
                >
                  field is required
                </div>

                <v-text-field
                  :label="$t('E-mail *')"
                  v-model="user.email"
                  :class="{
                    'is-invalid': submitted && $v.user.email.$error,
                  }"
                  required
                ></v-text-field>
                <div
                  v-if="submitted && $v.user.email.$error"
                  class="invalid-feedback"
                >
                  <span v-if="!$v.user.email.required">Email is required</span>
                </div>
                <v-text-field
                  :label="$t('Your Address *')"
                  v-model="user.address"
                  :class="{
                    'is-invalid': submitted && $v.user.address.$error,
                  }"
                  required
                ></v-text-field>
                <div
                  v-if="submitted && !$v.user.address.required"
                  class="invalid-feedback"
                >
                  field is required
                </div>
              </v-col>
            </v-row>
            <div class="additional-data">
              <div class="data-holder">
                <div class="my-5">
                  <h3>
                    {{ $t('Unit Type') }}
                  </h3>
                </div>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-expansion-panels focusable>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header class="accordionBack"
                          >Apartment</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
              </div>
              <div class="data-holder">
                <div class="my-5">
                  <h3>
                    {{ $t('Space') }}
                  </h3>
                </div>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-expansion-panels focusable>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header class="accordionBack"
                          >170M</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          150M
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
              </div>
              <div class="data-holder">
                <div class="my-5">
                  <h3>
                    {{ $t('Role') }}
                  </h3>
                </div>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-expansion-panels focusable>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header class="accordionBack"
                          >2</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          3
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
              </div>
              <div class="data-holder">
                <div class="my-5">
                  <h3>
                    {{ $t('Unit Interface') }}
                  </h3>
                </div>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-expansion-panels focusable>
                      <v-expansion-panel v-for="(item, i) in 1" :key="i">
                        <v-expansion-panel-header class="accordionBack"
                          >East</v-expansion-panel-header
                        >
                        <v-expansion-panel-content>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                </v-row>
              </div>
            </div>
            <div class="data-holder last">
              <v-row>
                <v-col cols="12">
                  <label> Additional<span class="text-danger">*</span></label>
                  <v-textarea
                    solo
                    name="input-7-4"
                    rows="8"
                    auto-grow
                  ></v-textarea>
                </v-col>
              </v-row>
            </div>
          </v-container>
          <div class="data-holder">
            <button
              type="submit"
              class="btn burble-button btn-block shadow-none"
            >
              {{ $t('Send') }}
            </button>
          </div>
        </form>
      </v-container>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  head: {
    title: 'Requests',
  },
  data() {
    return {
      submitted: false,
      user: {
        name: '',
        email: '',
        phone: '',
        address: '',
      },
    }
  },
  methods: {
    sendData() {
      alert('clicked')
    },
    handleSubmit(e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      this.sendData()

      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
    },
  },
  validations: {
    user: {
      name: { required },
      phone: { required, Number },
      email: { required, email },
      address: { required },
      // password: { required, minLength: minLength(6) },
      // registerPassword: { required, minLength: minLength(6) },
      // confirmRegisterPassword: {
      //   required,
      //   sameAsPassword: sameAs('registerPassword'),
      // },
    },
  },
}
</script>

<style lang="scss" scoped>
.cover {
  background-image: linear-gradient(to left, $main-color, #4f0000);
  padding: 8% 0;
  text-align: center;
  color: #fff;
}
.accordionBack {
  background: #515151;
  color: #fff;
  .mdi-chevron-down::before {
    color: #fff !important;
  }
}
.data-holder {
  margin: 50px 0;
}
.burble-button {
  width: 30%;
}

</style>