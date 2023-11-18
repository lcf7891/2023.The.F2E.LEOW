<script setup>
import { register } from 'swiper/element/bundle';
register();
</script>

<template>
  <article class="bg-info py-lg-16">
    <div class="container py-lg-10 py-16">
      <section class="d-flex flex-column justify-content-center align-items-center mb-lg-16 mb-10">
        <span class="fw-700 text-white bg-secondary rounded-2 py-2 px-3">
          POLICY ISSUES
        </span>
        <h2 class="h2 font-mantous text-gradient">
          政策議題
        </h2>
      </section>
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
          <div class="card p-lg-8 p-4">
            <div class="row g-lg-0 g-4">
              <div class="col-md-7">
                <img src="@img/image6.svg" class="img-fluid" alt="保障">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <span class="bg-info rounded-pill text-secondary px-3 py-1 mb-4">喵的保障</span>
                  <h3 class="card-title h7">
                    為毛孩子謀福利！<br>
                    推動寵物醫療保障方案
                  </h3>
                  <button type="button" class="btn-pill fw-700">
                    查看
                    <span class="btn-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card p-lg-8 p-4">
            <div class="row g-lg-0 g-4">
              <div class="col-md-7">
                <img src="@img/image7.svg" class="img-fluid" alt="福利">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <span class="bg-info rounded-pill text-secondary px-3 py-1 mb-4">喵的福利</span>
                  <h3 class="card-title h7">
                    打造休閒天堂！<br>
                    推廣寵物休閒與娛樂場所
                  </h3>
                  <button type="button" class="btn-pill fw-700">
                    查看
                    <span class="btn-arrow"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card p-lg-8 p-4">
            <div class="row g-lg-0 g-4">
              <div class="col-md-7">
                <img src="@img/image8.svg" class="img-fluid" alt="教育">
              </div>
              <div class="col-md-5">
                <div class="card-body">
                  <span class="bg-info rounded-pill text-secondary px-3 py-1 mb-4">喵的教育</span>
                  <h3 class="card-title h7">
                    推廣寵物飼養教育，讓愛更加專業
                  </h3>
                  <button type="button" class="btn-pill fw-700">
                    查看
                    <span class="btn-arrow"></span>
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
  $white: #FFFFFF;

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
  .btn {
    &-pill {
      color: $white;
      background-color: $primary;
    }
    &-arrow {
      &::before {
        background-color: $white;
      }
      &::after {
        border-color: $white;
      }
    }
  }
  .card {
    background-color: $white;
    border-radius: 24px;
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
  }
  .img-fluid {
    border-radius: 24px;
  }
</style>
