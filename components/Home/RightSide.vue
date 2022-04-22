<template>
  <div>
    <v-container>
      <div class="box">
        <div class="box-row">
          <div class="box-cell box1">
            <div class="bigCoverNews">
              <div class="img-holder">
                <img
                  src="@/assets/images/home/image.PNG"
                  alt="image"
                  class="img-fluid"
                />
              </div>
              <div class="newsTitle">
                <h6 class="p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio beatae sint eius accusantium dolores aperiam enim
                  tempora iure iste quaerat cupiditate nemo assumenda laboriosam
                  dolorum ex, officiis architecto fuga eos?
                </h6>
              </div>
            </div>
          </div>
          <div class="box-cell box2">
            <div class="content-wrapper">
              <div class="news-card">
                <a href="#" class="news-card__card-link"></a>
                <img
                  src="@/assets/images/home/image.PNG"
                  alt="image"
                  class="img-fluid"
                />
                <div class="news-card__text-wrapper">
                  <h6 class="news-card__title">Amazing First Title</h6>
                  <div class="news-card__post-date">Jan 29, 2018</div>
                  <div class="news-card__details-wrapper">
                    <p class="news-card__excerpt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est pariatur nemo tempore repellat? Ullam sed officia iure
                      architecto deserunt distinctio, pariatur&hellip;
                    </p>
                    <a href="#" class="news-card__read-more"
                      >Read more <i class="fas fa-long-arrow-alt-right"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div class="news-card">
                <a href="#" class="news-card__card-link"></a>
                <img
                  src="@/assets/images/home/image.PNG"
                  alt="image"
                  class="img-fluid"
                />
                <div class="news-card__text-wrapper">
                  <h6 class="news-card__title">
                    Amazing Second Title that is Quite Long
                  </h6>
                  <div class="news-card__post-date">Jan 29, 2018</div>
                  <div class="news-card__details-wrapper">
                    <p class="news-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam obcaecati ex natus nulla rem sequi laborum quod
                      fugit&hellip;
                    </p>
                    <a href="#" class="news-card__read-more"
                      >Read more <i class="fas fa-long-arrow-alt-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="state">
        <h3>Real estate indicators</h3>

        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="state-holder">
              <div class="state-img-holder">
                <img
                  src="@/assets/images/home/state.PNG"
                  alt="image"
                  class="img-fluid"
                />
              </div>
              <div class="state-data py-3">
                <ul class="list-unstyled m-0">
                  <li v-for="x in 3" :key="x">
                    <v-icon class="text-danger"
                      >mdi-chevron-double-right
                    </v-icon>
                    title - {{ x }}
                    <hr class="mx-5" v-if="x < 3" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="state-holder">
              <div class="state-img-holder">
                <img
                  src="@/assets/images/home/state.PNG"
                  alt="image"
                  class="img-fluid"
                />
              </div>
              <div class="state-data py-3">
                <ul class="list-unstyled m-0">
                  <li v-for="x in 3" :key="x">
                    <v-icon class="text-danger"
                      >mdi-chevron-double-right
                    </v-icon>
                    title - {{ x }}
                    <hr class="mx-5" v-if="x < 3" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="courses my-5">
        <h3 class="my-5">courses</h3>

        <div class="courses-holder">
          <div class="courses-shade">
            <div
              class="
                d-flex
                justify-content-center
                align-items-center
                flex-column
              "
            >
              <h2 class="h1 my-5">Introduction to the property association</h2>
              <p class="px-5 text-center">
                An accredited sustainable qualification course A course that
                aims to qualify engineers to be familiar with a sustainable
                evaluation system for existing commercial buildings in the
                operation and maintenance phase. course contains
              </p>
              <br />
              <div class="location-info">
                <div class="row">
                  <div class="col-md-8 col-sm-12 mb-4">
                    <div class="text-center">
                      <div class="">
                        <span
                          class="
                            d-flex
                            flex-column
                            justify-content-center
                            align-items-center
                          "
                        >
                          <div class="d-flex">
                            <v-icon class="text-danger"
                              >mdi-map-marker-radius</v-icon
                            >
                            <h5 class="mb-0">Kingdom Saudi Arabia</h5>
                          </div>
                          <br />
                          <div class="d-flex">
                            <v-icon class="text-danger"
                              >mdi-calendar-range</v-icon
                            >
                            <h5 class="mb-0">18-7-2021</h5>
                          </div>
                        </span>
                      </div>
                      <div class="cartBtn my-5">
                        <button class="btn burble-button">
                          Add To Cart
                          <span>
                            <v-icon class="text-white mx-2"
                              >mdi-cart-variant</v-icon
                            ></span
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-sm-12 d-flex justify-content-center align-items-center">
                    <div class="price-info">
                      <span class="text-white">90 ryial</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.newsTitle {
  background: $main_color;
  color: #fff;
  margin: 3px 0;
}
.img-holder {
  img {
    background-size: cover;
  }
}
.content-wrapper {
  margin: 0 auto;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  flex-direction: column;
}

.news-card {
  border: 0px solid aqua;
  margin: 0 0 3px 0;
  position: relative;
  height: 10rem;
  overflow: hidden;
  border-radius: 0;
  flex: 1;
}

@media (min-width: 900px) {
  .news-card {
    height: 10rem;
  }
}

.news-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0)
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
  z-index: 0;
}

.news-card__card-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  /*     background: rgba(255,0,0,.5); */
}

.news-card__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  z-index: -1;
}

.news-card__text-wrapper {
  position: absolute;
  bottom: 0rem;
  padding: 1rem;
  color: white;
  /*     background-color: rgba(0, 0, 0, 0.4); */
  transition: background-color 1.5s ease;
}

.news-card__title {
  transition: color 1s ease;
  margin-bottom: 0.5rem;
}

.news-card__post-date {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: #ccc;
}

.news-card__details-wrapper {
  max-height: 0;
  opacity: 0;
  transition: max-height 1.5s ease, opacity 1s ease;
}

@media (min-width: 900px) {
  .news-card:hover .news-card__details-wrapper {
    max-height: 10rem;
    opacity: 1;
  }
  .news-card:hover .news-card__text-wrapper {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .news-card:hover .news-card__title {
    color: yellow;
  }
  .news-card:hover .news-card__image {
    transform: scale(1.2);
    z-index: -1;
  }
}

.news-card__excerpt {
  font-weight: 300;
}

.news-card__read-more {
  background: black;
  color: #bbb;
  display: block;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  margin-top: 1rem;
  border: 1px solid #444;
  font-size: 0.8rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-decoration: none;
  width: 7rem;
  margin-left: auto;
  position: relative;
  z-index: 5;
}

.news-card__read-more i {
  position: relative;
  left: 0.2rem;
  color: #888;
  transition: left 0.5s ease, color 0.6s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.news-card__read-more:hover i {
  left: 0.5rem;
  color: yellow;
}

.container .box {
  display: table;
  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }
}
.container .box .box-row {
  display: table-row;
  @media (max-width: 991.98px) {
    display: flex;
    flex-direction: column;
  }
}
.container .box .box-cell {
  display: table-cell;
  //   border: 1px solid black;
  width: 25%;
  padding: 10px;
  @media (max-width: 991.98px) {
    display: contents;
  }
}
.state-holder {
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 5px;
}
.state-img-holder {
  img {
    border-radius: 5px 5px 0 0;
  }
}

//courses

.courses {
  .courses-holder {
    background: url('@/assets/images/home/state.PNG') no-repeat;
    color: #fff;
    background-size: cover;

    .courses-shade {
      background: rgba(0, 0, 0, 0.6);
      inset: 0;
      width: 100%;
      height: 100%;
      padding: 7%;
      position: relative;
    }
  }
  .price-info {
    clip-path: polygon(55% 0%, 41% 53%, 55% 100%, 0% 100%, 0% 0%);
    background: $main-color;
    width: 242px;
    height: 42px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding: 9px;
    font-size: 14px;
    border: 1px solid #fff;
    // position: absolute;

    // right: 0%;
    // top: 67%;
    // transform: translate(0, -67%);
    // @media (max-width: 991.98px) {
    //   right: 34%;
    //   top: 97%;
    // }
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .cartBtn {
    button {
      border: 2px solid #fff;
      &:focus {
        box-shadow: none;
      }
    }
  }
}
.en{
  .price-info{
    justify-content: flex-start;
  }
}
</style>