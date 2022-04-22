<template>
  <main class="my-2">
    <div class="position-relative">
      <img
        src="https://wallpaperaccess.com/full/1757473.jpg"
        class="img-fluid w-100"
        alt="Responsive
      image"
      />
      <div class="title position-absolute">
        A new investment environment with the formation of the Industry and
        Mineral Resources System Sustainability Council
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  transform: translate(-50%, 0);
  bottom: 0;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 45px;
  width: 44%;
  margin: auto;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  @media (max-width:991.98px) {
    width: 90%;
    text-align: center;
  }
}
main {
  img {
    background-size: cover;
    height: 500px;
  }
}
</style>