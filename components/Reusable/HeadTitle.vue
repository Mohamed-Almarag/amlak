<template>
  <v-container>
    <h2 class="headline text-center font-weight-light my-5 text-uppercase">
      <!-- {{ $t('Best selling products') }} -->
      {{ msg }}
    </h2>
  </v-container>
</template>

<script>
export default {
  props: ['msg'],
}
</script>

<style lang="scss" scoped></style>
