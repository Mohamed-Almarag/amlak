<template>
  <v-container>
    <h1 class="display-1 text-center mt-6">
      <strong>{{ $auth.user.data.email }}</strong>
      <span class="headline">Profile</span>
    </h1>
    <img :src="$auth.user.data.image" alt="user-image" width="200">
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Profile',
  },
  middleware: 'authentiacteUser',
}
</script>

<style lang="scss" scoped></style>
