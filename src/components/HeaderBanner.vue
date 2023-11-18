<template>
  <article class="container pt-lg-4">
    <h2 class="d-flex flex-lg-row flex-column justify-content-center align-items-center h1 font-mantous text-gradient mb-4" data-aos="zoom-in-up">
      <span class="me-md-5">台灣的明天</span>
      喵先鋪路
    </h2>
    <div class="d-flex flex-md-row flex-column justify-content-center align-items-center mb-4" data-aos="zoom-in-down">
      <span class="h6 fw-700 text-white bg-secondary rounded-3 py-3 px-4 me-md-4 mb-md-0 mb-2">2024 立委參選人</span>
      <p class="d-flex align-items-center h4 fw-700 text-primary text-gradient-hover rounded-3 shadow py-3 px-4">
        <img class="align-text-bottom me-4" src="@img/ball.svg" alt="ball number">
        喵立翰 Miao Li-Han
      </p>
    </div>
    <figure class="figure position-relative mx-auto">
      <img class="figure-bg position-absolute bottom-0" src="@img/image1-2.svg" alt="background" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
      <img class="figure-person position-absolute bottom-0" src="@img/image1-1.svg" alt="person"
      data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">

    </figure>
  </article>
</template>

<style lang="scss" scoped>
  .figure {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 255px;
    margin: 0;
    z-index: -3;
    @media (min-width: 992px) {
      height: 538px;
    }
    &-person {
      height: 255px;
      z-index: -1;
      @media (min-width: 992px) {
        height: 538px;
      }
    }
    &-bg {
      width: auto;
      height: 213px;
      z-index: -2;
      @media (min-width: 992px) {
        width: 723px;
        height: 404px;
      }
    }
  }
</style>
