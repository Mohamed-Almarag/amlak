<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.email"
      :label="$t('Email')"
      :rules="[required('email'), emailFormat()]"
      v-if="email"
      :append-icon="'mdi-email'"
      outlined
      dense
      color="green"
    />

    <v-text-field
      v-model="userInfo.oldpassword"
      :label="$t('Old Password')"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      :rules="[required('password'), minLength('password', 6)]"
      v-if="oldPass"
      outlined
      dense
      color="green"
    />

    <v-text-field
      v-model="userInfo.password"
      v-if="newPass"
      :label="$t('New Password')"
      :rules="[required('password'), minLength('password', 6)]"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      outlined
      dense
      color="green"
    />

    <v-text-field
      v-model="userInfo.password_confirmation"
      v-if="confirmPass"
      :label="$t('Confirm Password')"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[required('password'), minLength('password', 8)]"
      counter="true"
      outlined
      dense
      color="green"
    />

    <v-btn
      @click="submitForm(userInfo)"
      :disabled="!valid"
      :loading="loading"
      text
      color="red"
      >{{ buttonText }}</v-btn
    >
  </v-form>
</template>

<script>
import validations from '@/utils/validations'
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        oldpassword: null,
        password: null,
        password_confirmation: null,
      },
      ...validations,
    }
  },
  props: [
    'submitForm',
    'buttonText',
    'oldPass',
    'confirmPass',
    'email',
    'newPass',
    'loading',
  ],
}
</script>

<style lang="scss" scoped>
.v-btn,
.v-btn:not(.v-btn--round).v-size--default {
  background: $main-color;

  margin: auto;
  padding: 13px 45px !important;
  display: block;
  line-height: 1;
  height: auto !important;
  color: #fff !important;
}
</style>
