<template>
  <article class="bg-info">
    <div class="container py-16">
      <div class="text-center mb-8">
        <span class="bg-secondary rounded-3
              h10 fw-7 text-white py-2 px-3 mb-0">
          POLICY ISSUES
        </span>
      </div>
      <div class="text-center mb-16">
        <h2 class="d-inline-block h2 font-mantou text-primary-gradient ">
          政策議題
        </h2>
      </div>
      <swiper-container class="mySwiper"
          pagination="true"
          effect="coverflow"
          grab-cursor="true"
          centered-slides="true"
          slides-per-view="auto"
          loop="true"
          coverflow-effect-rotate="50"
          coverflow-effect-stretch="0"
          coverflow-effect-depth="100"
          coverflow-effect-modifier="1"
          coverflow-effect-slide-shadows="true">
        <swiper-slide>
          <div class="card rounded-24 p-lg-8 p-4">
            <div class="row g-lg-0 g-4">
              <div class="col-md-7">
                <img src="@/assets/images/image3.svg" class="img-fluid rounded-24" alt="保障">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <span class="bg-info rounded-pill text-secondary px-3 py-1 mb-4">喵的保障</span>
                  <h3 class="card-title h7">
                    為毛孩子謀福利！<br>
                    推動寵物醫療保障方案
                  </h3>
                  <button type="button" class="card-btn bg-primary text-white arrow-white">
                    查看
                    <span class="arrow-right"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card rounded-24 p-lg-8 p-4">
            <div class="row g-lg-0 g-4">
              <div class="col-md-7">
                <img src="@/assets/images/image4.svg" class="img-fluid rounded-24" alt="福利">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <span class="bg-info rounded-pill text-secondary px-3 py-1 mb-4">喵的福利</span>
                  <h3 class="card-title h7">
                    打造休閒天堂！<br>
                    推廣寵物休閒與娛樂場所
                  </h3>
                  <button type="button" class="card-btn bg-primary text-white arrow-white">
                    查看
                    <span class="arrow-right"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card rounded-24 p-lg-8 p-4">
            <div class="row g-lg-0 g-4">
              <div class="col-md-7">
                <img src="@/assets/images/image5.svg" class="img-fluid rounded-24" alt="教育">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <span class="bg-info rounded-pill text-secondary px-3 py-1 mb-4">喵的教育</span>
                  <h3 class="card-title h7">
                    推廣寵物飼養教育，讓愛更加專業
                  </h3>
                  <button type="button" class="card-btn bg-primary text-white arrow-white">
                    查看
                    <span class="arrow-right"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  $primary: #DA7D4A;

  swiper-container {
    &::part(bullet) {
      width: 12px;
      height: 12px;
      background-color: rgba($primary, 60%) !important;
    }
    &::part(bullet-active) {
      width: 12px;
      height: 12px;
      background-color: $primary;
    }
  }
  swiper-slide {
    padding-bottom: 50px;
    @media (min-width: 992px) {
      max-width: 60%;
    }
  }
  .rounded-24 {
    border-radius: 24px;
  }
  .card {
    background-color: #FFFFFF;
    &-body {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    &-title {
      font-weight: 700;
      line-height: 150%;
      margin-bottom: 40px;
    }
    &-btn {
      display: inline-flex;
      border-radius: 50px;
      border: none;
      outline: none;
      padding: 16px 24px;
    }
  }
</style>
