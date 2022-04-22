<template>
  <v-card flat class="grey lighten-5">
    <v-container>
      <v-row no-gutters justify="center" align-content="center">
        <v-breadcrumbs :items="items">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :to="item.to" :disabled="item.disabled">
              <span class="green--text font-weight-bold">
                {{ item.text.toUpperCase() }}
              </span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          to: '/',
        },
        {
          text: 'Link 1',
          to: '/',
        },
        {
          text: 'Link 2',
          to: '/',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.breadcrump {
  ul {
    list-style: none;
    li {
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
