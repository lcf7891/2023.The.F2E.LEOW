<template>
  <article class="container my-lg-16 py-lg-10 py-16" id="donate-mail">
    <div class="row row-cols-md-2 row-cols-1">
      <div class="col mb-md-0 mb-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <section class="bg-primary rounded-5 p-lg-20 pt-10 pb-8 px-6 h-100">
          <h3 class="font-mantous h3 text-white mb-4">
            小額支持喵喵
          </h3>
          <p class="h8 fw-600 mb-6 text-white">
            您的小筆捐款，是每隻毛孩未來的大大動力！
          </p>
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <button type="button" class="btn-pill fw-700">
                小額捐款
                <span class="btn-arrow"></span>
              </button>
            </div>
            <div class="col-6 col-h">
              <img src="@img/image10.svg" class="img-fluid" alt="img donate">
            </div>
          </div>
        </section>
      </div>
      <div class="col" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <section class="bg-secondary rounded-5 p-lg-20 pt-10 pb-8 px-6 h-100">
          <h3 class="font-mantous h3 text-white mb-4">
            民眾服務信箱
          </h3>
          <p class="h8 fw-600 mb-6 text-white">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
          </p>
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <button type="button" class="btn-pill fw-700">
                填寫表單
                <span class="btn-arrow"></span>
              </button>
            </div>
            <div class="col-6 col-h">
              <img src="@img/image11.svg" class="img-fluid" alt="img mail">
            </div>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .col-h {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 126px;
    @media (min-width: 992px) {
      height: 241px;
    }
  }
  .img-fluid {
    max-height: 100%;
  }
</style>
