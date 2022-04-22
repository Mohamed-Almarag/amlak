<template>
  <v-container>
    <!-- The holer of the components -->
    <v-row>
      <!-- The sidebar -->
      <v-col cols="12" lg="4" class="hidden-md-and-down">
        <aside>
          <SearchAside />
        </aside>
      </v-col>
      <v-col cols="12" lg="8">
        <SearchContent />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
