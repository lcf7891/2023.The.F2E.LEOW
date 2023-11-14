<template>
  <article class="container py-16">
    <div class="text-center mb-8">
      <span class="bg-secondary rounded-3
            h10 fw-7 text-white py-2 px-3 mb-0">
        LATEST EVENTS
      </span>
    </div>
    <div class="text-center mb-16">
      <h2 class="d-inline-block h2 font-mantou text-primary-gradient ">
        最新活動
      </h2>
    </div>
    <div class="row row-cols-lg-2 row-cols-1">
      <div class="col">
        <div class="card position-relative">
          <img src="@/assets/images/event1.png" class="img-fluid mb-4" alt="有善環境">
          <div class="card-body">
            <p class="h11 text-tertiary mb-2">2023/12/26</p>
            <h5 class="card-title h8 fw-7 mb-2">
              參與台北寵物論壇，爭取貓咪友善環境
            </h5>
            <p class="card-text d-md-block d-none mb-0">
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。
            </p>
            <button type="button" class="btn stretched-link"></button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card position-relative mb-6">
          <div class="row g-0">
            <div class="col-4">
              <img src="@/assets/images/event2.png"
                    class="img-fluid rounded-start pe-4"
                    alt="掃街拜票">
            </div>
            <div class="col-8">
              <div class="card-body">
                <p class="h11 text-tertiary mb-2">2023/12/24</p>
                <h5 class="card-title h10 fw-7 mb-2">
                  掃街模式開啟！帶著你的貓耳，來和我一起走！
                </h5>
                <p class="card-text d-md-block d-none">
                  街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！
                </p>
                <button type="button" class="btn stretched-link"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card position-relative mb-6">
          <div class="row g-0">
            <div class="col-4">
              <img src="@/assets/images/event3.png"
                    class="img-fluid rounded-start pe-4"
                    alt="模特兒比拼">
            </div>
            <div class="col-8">
              <div class="card-body">
                <p class="h11 text-tertiary mb-2">2023/12/20</p>
                <h5 class="card-title h10 fw-7 mb-2">
                  收容所模特兒大比拼！
                </h5>
                <p class="card-text d-md-block d-none">
                  今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！
                </p>
                <button type="button" class="btn stretched-link"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="card position-relative mb-6">
          <div class="row g-0">
            <div class="col-4">
              <img src="@/assets/images/event1.png"
                    class="img-fluid rounded-start pe-4"
                    alt="有善環境">
            </div>
            <div class="col-8">
              <div class="card-body">
                <p class="h11 text-tertiary mb-2">2023/12/26</p>
                <h5 class="card-title h10 fw-7 mb-2">
                  參與台北寵物論壇，爭取貓咪友善環境
                </h5>
                <p class="card-text d-md-block d-none">
                  炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！
                </p>
                <button type="button" class="btn stretched-link"></button>
              </div>
            </div>
          </div>
        </div>
        <button type="button"
                class="d-flex bg-quaternary text-secondary arrow-secondary rounded-pill
                py-2 px-4">
          查看更多
          <span class="arrow-right"></span>
        </button>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  button {
    border: none;
    outline: none;
  }
</style>
