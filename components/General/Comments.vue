<template>
  <div>
    <div class="pl-5" v-if="comments && comments.length > 0">
      <div class="" v-for="comment in comments" :key="comment.id">
        <div class="media">
          <img
            src="@/assets/images/auction/avatar.png"
            class="mr-5 default-userImage"
            alt="default-userImage"
            width="50"
            height="50"
            v-if="comment.user.image"
          />
          <img
            :src="comment.user.image"
            class="mr-5"
            alt="userImage"
            v-else
          />
          
          <div class="media-body">
            <h5 class="mt-0" v-if="comment.user.first_name">
              {{ comment.user.first_name }}
            </h5>
            <p v-if="comment.user.bio" class="text-dimied">
              {{ comment.user.bio | shorten(100, '...') }}
            </p>
          </div>
        </div>
        <div class="comment-data p-4 py-2 m-4">
          <h6 v-if="comment.note">
            {{ comment.note }}
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseUrl } from '@/API/axios'
import { getMethods } from '@/API/helpers'
export default {
  methods: {
    getComments() {
      getMethods(`${baseUrl}${this.pageName}/${this.id}`, {
        params: {
          limit: 4,
          sort: 'ASC',
        },
      })
        .then((resp) => {
          console.log('comments', resp)
          this.comments = resp.data.data.data.comment.slice(0, 10)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  data() {
    return {
      id: this.$route.params.slug,
      comments: [],
    }
  },
  created() {
    this.getComments()
  },
  props: ['pageName'],
}
</script>

<style>
</style>