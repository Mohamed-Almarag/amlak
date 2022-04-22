<template>
  <div class="poster">
    <img :src="img" alt="poster image" />
  </div>
</template>

<script>
export default {
  props: ['img'],
}
</script>

<style lang="scss" scoped>
.poster {
  max-height: 75vh;

  @media (max-width: 480) {
    max-height: 55vh;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
