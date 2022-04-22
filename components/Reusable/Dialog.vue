<template>
  <v-dialog persistent v-model="dialog" max-width="280">
    <v-card>
      <v-card-title class="text-h5 error--text text-uppercase">
        {{ title }}
      </v-card-title>

      <v-card-text>
        {{ msg }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green lighten-1" text @click="dialogHandler">
          {{ $t('exit') }}
        </v-btn>

        <v-btn color="error" text @click="methodHandler">
          {{ btnText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: [
    'dialog',
    'methodHandler',
    'btnText',
    'title',
    'msg',
    'dialogHandler',
  ],
}
</script>

<style lang="scss" scoped>
.v-card {
  &:hover {
    background-color: #fff;
  }
}
</style>
