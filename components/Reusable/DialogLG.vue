<template>
  <v-dialog v-model="isDialog" persistent transition="dialog-bottom-transition">
    <v-card-title class="text-h5 grey lighten-5 text-uppercase">
      {{ title }}
    </v-card-title>
    <figure class="white py-3">
      <v-container>
        <slot></slot>
      </v-container>
    </figure>
    <div>
      <v-btn
        color="error lighten-1"
        class="rounded-0"
        block
        @click="dialogHandler"
      >
        {{ $t('exit') }}
      </v-btn>
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog', 'dialogHandler', 'title'],
  data() {
    return {
      isDialog: this.dialog,
    }
  },
  watch: {
    dialog() {
      this.isDialog = this.dialog
    },
  },
}
</script>

<style lang="scss" scoped></style>
