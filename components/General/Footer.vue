<template>
  <v-footer class="mt-5" :class="$i18n.locale">
    <v-container>
      <v-row no-gutters justify="center" align-content="center">
        <v-col cols="12" md="6" sm="12">
          <!-- <div class="logo">
            <img src="@/assets/images/amlak.png" alt="" width="100" />
          </div>
          <div class="context">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptatibus expedita repellendus.
          </div> -->
          <ul
            class="
              list-unstyled
              d-flex
              justify-content-center
              align-items-center
              links
              mx-0
              px-0
            "
          >
            <li>
              <nuxt-link to="/" class="text-white">who are we</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="text-white">Contact Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="text-white">Privacy policy</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-row>
            <v-col cols="12">
              <b-form @submit.stop.prevent>
                <b-form-input
                  id="feedback-user"
                  class="form-input-no-effect inline-block"
                  placeholder="E-mail"
                ></b-form-input>
                <button class="btn">Subscribe</button>
              </b-form>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" class="text-center mt-5">
          <h5 class="rights">All rights reserved to Amlak 2021</h5>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props:['info']
}
</script>

<style lang="scss" scoped>
.v-footer {
  background: #333333;
  line-height: 2.5;
  .links {
    gap: 20px;

    a {
      color: #000;
      text-decoration: none;
      opacity: 0.8;
      text-align: center;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
form {
  display: flex;
  button {
    border-radius: 0 5px 5px 0;
    background: $main-color;
    color: #fff;
  }
}
.ar {
  form {
    button {
      border-radius: 5px 0 0 5px;
    }
  }
  .form-input-no-effect{
    border-radius: 0 5px 5px 0;
  }
}
.rights {
  color: #9d9d9d;
}
</style>
 