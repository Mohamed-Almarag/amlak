<template>
  <div class="mt-8">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-sm-12 mb-3">
          <h2 class="text-success text-center">
            {{ $t('The Course Has Been Successfully Purchased') }}
          </h2>
          <p class="text-dimied mt-6 mb-11 text-center">
            {{ $t('Principles Course In Chemistry') }}
          </p>
          <div class="data-holder">
            <div class="img-holder">
              <img
                src="@/assets/images/courses/cover.jpg"
                alt=""
                class="img-fluid w-100"
              />
            </div>
            <div class="course-info">
              <div class="course-section px-3 py-2 mb-3">Architectural</div>
              <h2 class="course-name">Architectural Engineering Course</h2>
              <div class="date d-flex">
                <span>
                  <i class="fas fa-circle circle"></i>
                </span>
                <p class="m-0">DECEMBER 30, 2021</p>
              </div>
              <div class="rating">
                <span class="mr-2" v-for="x in 5" :key="x">
                  <i class="fas fa-star text-gold"></i>
                </span>
                <span>(602 Ratings)</span>
              </div>
            </div>
          </div>
          <div class="desceiption-holder my-11">
            <p class="">
              Architectural Engineering, Also Known As Building Engineering Or
              Architecture Engineering, Is An Engineering Discipline That Deals
              With The Technological Aspects And Multi-Disciplinary Approach To
              Planning, Design, Construction And Operation Of Buildings, Such As
              Analysis And Integrated Design Of Environmental Systems (Energy
              Conservation, HVAC, Plumbing, Lighting, Fire Protection,
              Acoustics, Vertical And Horizontal Transportation, Electrical
              Power Systems), Structural Systems, Behavior And Properties Of
              Building Components And Materials, And Construction
              Management.[1][2]
            </p>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button class="btn burble-button px-11 py-2" @click="start">Start Now</button>
          </div>
        </div>
        <div class="col-md-2 col-sm-12 my-5 free-parent">
          <div class="free-holder">
            <p class="m-0">7D Free</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        start(){
            alert('clicked')
        }
    }
}
</script>

<style lang="scss" scoped>
i.circle:before {
  color: #004773;
  background: #004773;
  border-radius: 50%;
  margin: 0 5px 0 0;
}
.data-holder {
  position: relative;
  .course-info {
    position: absolute;
    left: 20px;
    top: 50%;
    color: #fff;
    transform: translateY(-50%);
    .course-name {
      @media (max-width: 767px) {
        font-size: 15px;
      }
    }
  }
  .course-section {
    display: inline-block;
    background: #004773;
    border-radius: 5px;
  }
}
.course-intro {
  .action-div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
}
.bordered-bottom {
  color: #004773;
}
.course-features {
  .features-img {
    img {
      border-radius: 5px;
    }
  }
}
.Description {
  .hi {
    color: #004773;
  }
}
.instructor {
  background: #f8f8f8;
  .instrictor-img {
    border-radius: 5px;
    border: 2px solid green;
  }
}
.user-rating {
  .progress {
    background: transparent;
    .progress-bar {
      background: #c2cf06;
    }
  }
}
.moreBtn {
  background: transparent;
  border: 1px solid;
  padding: 10px 50px;
  margin: 5% 0;
}
.free-holder {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  color: #fff;
  background: #f53d75;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-45deg);
  text-align: center;
}
.free-parent {
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>