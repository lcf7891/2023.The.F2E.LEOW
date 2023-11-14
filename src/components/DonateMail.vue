<script>
export default {
  data() {
    return {
      ContentData: [
        {
          title: '小額支持喵喵',
          text: '您的小筆捐款，是每隻毛孩未來的大大動力！',
          btn: '小額捐款',
          img: 'donate',
        },
        {
          title: '民眾服務信箱',
          text: '親愛的鄉親，每一位市民的意見都是我們社區前進的原動力',
          btn: '填寫表單',
          img: 'mail',
        },
      ],
    };
  },
  methods: {
    bgColor(state) {
      return state === 'donate' ? 'bg-primary' : 'bg-secondary';
    },
  },
};
</script>

<template>
  <article class="container py-16">
    <div class="row row-cols-md-2 row-cols-1">
      <div class="col" v-for="item, key in ContentData" :key="item.title+key">
        <section class="rounded-5 p-lg-20 pt-10 pb-8 px-6 h-100"
                  :class="bgColor(item.img)">
          <h3 class="font-mantou h2 text-white mb-4">
            {{ item.title }}
          </h3>
          <p class="h8 fw-6 mb-6 text-white">
            {{ item.text }}
          </p>
          <div class="row">
            <div class="col-6 d-flex align-items-center">
              <button type="button"
                      class="d-flex btn btn-white
                      arrow-secondary rounded-pill
                      py-lg-4 px-lg-6">
                {{ item.btn }}
                <span class="arrow-right"></span>
              </button>
            </div>
            <div class="col-6 col-h">
              <img src="@/assets/images/image6.png"
                    class="img-fluid" alt="img donate"
                    v-if="item.img === 'donate'">
              <img src="@/assets/images/image7.png"
                    class="img-fluid" alt="img mail"
                    v-else>
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
