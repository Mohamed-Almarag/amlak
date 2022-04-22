<template>
  <div>
    <div class="container">
      <div class="card my-4" v-for="x in 4" :key="x.id">
        <div class="">
          <img src="@/assets/images/amlak.png" alt="image" class="img-fluid" />
        </div>
        <div class="card-body">
          <h5 class="card-title">
            {{ $t('A Purebred Arabian Horse') }}
          </h5>
          <div class="row justify-content-bewteen align-items-center">
            <div class="col-md-9 col-sm-12 my-3">
              <div class="time-holder">
                <span class="mr-2">
                  <i class="far fa-clock"></i>
                </span>
                <span>
                  00 : 00 : 00
                </span>
              </div>
            </div>
            <div class="col-md-3 col-sm-12 my-3">
              <button class="btn btn-block join-btn">Join</button>
            </div>
          </div>
        </div>
      </div>
      <!-- <GeneralPagination :perPage="perPage" :total="total" /> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.join-btn {
  background: #212121;
  color: #fff;
}
.circle i {
  background: #2e9fff;
  color: #2e9fff;
  border-radius: 50%;
}
</style>