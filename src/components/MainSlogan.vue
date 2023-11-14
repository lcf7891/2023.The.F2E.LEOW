<template>
  <article class="container pt-lg-20 pt-8">
    <h2 class="d-flex justify-content-center align-items-center
        flex-lg-row flex-column h1
        font-mantou text-primary-gradient
        mb-4">
      <span class="mx-3">台灣的明天</span>
      <span class="mx-3">喵先鋪路</span>
    </h2>
    <div class="d-flex justify-content-center align-items-center
        flex-md-row flex-column
        mb-lg-6 mb-3">
      <p class="bg-secondary rounded-4 h6 fw-7 text-white py-3 px-4 me-md-8 mb-md-0 mb-3">
        2024 立委參選人
      </p>
      <p class="d-flex justify-content-center align-items-center
          h4 text-primary bgGradient-hover fw-7  mb-0">
        <span class="bgGradient rounded-circle
              h5 fw-9 text-white
              pt-1 pb-2 px-4 me-2 mb-0">3</span>
        喵立翰 Miao Li-Han
      </p>
    </div>
    <figure class="figure position-relative mx-auto">
      <img class="figure-bg position-absolute bottom-0"
            src="@/assets/images/image11.png" alt="background">
      <img class="figure-person position-absolute bottom-0"
            src="@/assets/images/image12.png" alt="person">
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
    z-index: -1;
    @media (min-width: 992px) {
      height: 538px;
    }
    &-person {
      height: 255px;
      @media (min-width: 992px) {
        height: 538px;
      }
    }
    &-bg {
      width: auto;
      height: 213px;
      @media (min-width: 992px) {
        width: 723px;
        height: 404px;
      }
    }
  }
</style>
