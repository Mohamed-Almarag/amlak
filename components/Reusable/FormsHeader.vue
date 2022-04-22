<template>
  <div class="headtitle text-center mt-10 mb-2">
    <h3 class="headline text-uppercase font-weight-bold mb-3">
      {{ title }}
    </h3>
    <small>
      {{ msg }}
    </small>
  </div>
</template>

<script>
export default {
  props: ['title', 'msg'],
}
</script>

<style lang="scss" scoped></style>
