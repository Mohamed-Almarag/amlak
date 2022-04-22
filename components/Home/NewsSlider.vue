<template>
  <div :class="$i18n.locale">
    <main>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-md-12">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                breaking-news
                
              "
            >
              <div
                class="
                  d-flex
                  flex-row flex-grow-1 flex-fill
                  justify-content-center
                  bg-danger
                  py-2
                  text-dark
                  bg-white
                  px-1
                  news
                "
              >
                <span class="d-flex align-items-center"
                  ><b >{{$t('news.bar.title')}}</b>
                </span>
              </div>
              <marquee
                class="news-scroll"
                behavior="scroll"
                direction="left"
                onmouseover="this.stop();"
                onmouseout="this.start();"
              >
                <a href="#"
                  >Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </a>
                <span class="dot"></span>
                <a href="#"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                </a>
                <span class="dot"></span>
                <a href="#"
                  >Duis aute irure dolor in reprehenderit in voluptate velit
                  esse
                </a>
              </marquee>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
main {
  background-color: $main-color !important;
  color: #fff !important;
}
.news {
  width: 257px;
  -webkit-clip-path: polygon(65% 0%, 100% 50%, 65% 100%, 0% 100%, 0% 0%);
  clip-path: polygon(65% 0%, 100% 50%, 65% 100%, 0% 100%, 0% 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  border-radius: 0;
  border: 2px solid #000;
}

.news-scroll a {
  text-decoration: none;
}

.dot {
  height: 6px;
  width: 6px;
  margin-left: 3px;
  margin-right: 3px;
  margin-top: 2px !important;
  background-color: #e8e8ee;
  border-radius: 50%;
  display: inline-block;
}

/* Custom */

.container-fluid {
  padding: 0;
}

.container {
  color: white;
}

marquee a {
  color: #fff;
}
.en , .ar{
  direction: ltr;
  text-align: left;
}
</style>