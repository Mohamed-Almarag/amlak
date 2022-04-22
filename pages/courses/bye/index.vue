<template>
  <div id="app">
    <GeneralCreditFormCardForm />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      id: this.$route.query.courseId,
    }
  },
}
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  text-align: center;
  color: #2c3e50;

  * {
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
}
</style>