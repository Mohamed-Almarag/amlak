<template>
  <div class="my-5">
    <section>
      <div class="cover">
        <div class="img-holder">
          <img
            :src="img"
            alt="cover-img"
            class="img-fluid cover-img"
            :class="myClass"
          />
        </div>
        <div class="cover-title">
          <h1 class="title">
            {{ title }}
          </h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ['title', 'myClass', 'img'],
}
</script>

<style lang="scss" scoped>
.cover {
  position: relative;
  .img-holder {
    img {
      border-radius: 10px;
    }
  }
  .cover-title {
    position: absolute;
    top: 40%;
    left: 7.7%;
    transform: translate(-7.7%, -40%);
    color: #fff;
    .title {
      font-size: 40px !important;
      font-weight: bold;
    }
  }
}
</style>