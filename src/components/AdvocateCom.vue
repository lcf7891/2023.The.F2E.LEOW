<template>
  <article class="bg-info py-16">
    <div class="container">
      <div class="row row-cols-lg-2 row-cols-1 g-0">
        <div class="col bg-white rounded-left24 py-lg-16 py-10 px-lg-10 px-6">
          <div class="text-center mb-8">
            <span class="bg-secondary rounded-3
                  h10 fw-7 text-white py-2 px-3 mb-0">
              ADVOCATE
            </span>
          </div>
          <h2 class="h2 font-mantou text-primary-gradient text-center mb-8">
            候選人主張
          </h2>
          <p class="h6 fw-7 mb-8">
            我堅信 ! 藉由推動更完善的
            <span class="text-primary mb-0">貓咪福利</span>
            和相關政策，更是間接地投資於
            <span class="text-primary mb-0">台灣的未來</span>。
          </p>
          <p class="h9 mb-0">
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。
            透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br>
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。
            讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </p>
        </div>
        <div class="col">
          <img class="img-fluid rounded-right24" src="@/assets/images/image2.png" alt="Schematic">
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .rounded {
    &-left24 {
      @media (min-width: 992px) {
        border-top-right-radius: 0;
        border-bottom-left-radius: 24px;
      }
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
    }
    &-right24 {
      @media (min-width: 992px) {
        border-top-right-radius: 24px;
        border-bottom-left-radius: 0;
      }
      border-bottom-right-radius: 24px;
      border-bottom-left-radius: 24px;
    }
  }
  .img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
