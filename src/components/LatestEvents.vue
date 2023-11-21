<script>
import { mapState } from 'pinia'
import { useActivityStore } from '../stores/ActivityStore'
import Modal from './ContentModal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      // activitys: [
      //   {
      //     id: uuidv4(),
      //     date: '2023/12/26',
      //     title: '參與台北寵物論壇，爭取貓咪友善環境',
      //     description: '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
      //     picture: 'image3',
      //   },
      //   {
      //     id: uuidv4(),
      //     date: '2023/12/24',
      //     title: '掃街模式開啟！帶著你的貓耳，來和我一起走！',
      //     description: '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！',
      //     picture: 'image4',
      //   },
      //   {
      //     id: uuidv4(),
      //     date: '2023/12/20',
      //     title: '收容所模特兒大比拼！',
      //     description: '今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
      //     picture: 'image5',
      //   }
      // ],
      itemData: {},
    }
  },
  computed: {
    ...mapState(useActivityStore, ['activitys'])
  },
  methods: {
    openModal(activity) {
      this.itemData = activity
      this.$refs.activityModal.showModal() 
    }
  }
}
</script>

<template>
  <article class="container my-lg-16 py-lg-10 py-16">
    <section class="d-flex flex-column justify-content-center align-items-center mb-lg-16 mb-10" data-aos="zoom-in-up">
      <span class="fw-700 text-white bg-secondary rounded-2 py-2 px-3">
        LATEST EVENTS
      </span>
      <h2 class="h2 font-mantous text-gradient">
        最新活動
      </h2>
    </section>
    <section class="row row-cols-lg-2 row-cols-1">
      <div class="col" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div class="card mb-6">
          <div class="card-body">
            <img src="@img/image3.svg" class="card-img-top" alt="有善環境">
            <p class="h11 text-tertiary mb-2">{{ activitys[0].date }}</p>
            <h3 class="card-title h8 fw-700">
              {{ activitys[0].title }}
            </h3>
            <p class="card-text">
              {{ activitys[0].description }}
            </p>
            <button type="button" class="btn stretched-link" @click="openModal(activitys[0])"></button>
          </div>
        </div>
      </div>
      <div class="col d-flex flex-column" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div class="card mb-6" :class="{'order-1': item.picture === 'image3'}" v-for="item, idx in activitys" :key="item.id">
          <div class="row gx-3">
            <div class="col-4">
              <img src="@img/image3.svg" class="img-fluid rounded-2" alt="有善環境" v-if="item.picture === 'image3'">
              <img src="@img/image4.svg" class="img-fluid rounded-2" alt="掃街拜票" v-else-if="item.picture === 'image4'">
              <img src="@img/image5.svg" class="img-fluid rounded-2" alt="模特兒比拼" v-else-if="item.picture === 'image5'">
            </div>
            <div class="col-8">
              <div class="card-body">
                <p class="h11 text-tertiary mb-2">{{ item.date }}</p>
                <h3 class="card-title h8 fw-700">
                  {{ item.title }}
                </h3>
                <p class="card-text text-truncate">
                  {{ item.description }}
                </p>
                <button type="button" class="btn stretched-link" @click="openModal(item)"></button>
              </div>
            </div>
          </div>
        </div>
        <div class="order-5">
          <button type="button" class="btn-pill fw-600">
            查看更多
            <span class="btn-arrow"></span>
          </button>
        </div>
      </div>
    </section>

    <Modal :viewData="itemData" ref="activityModal">
      <template #title>
        最新活動
      </template>
    </Modal>
  </article>
</template>

<style lang="scss" scoped>
  button {
    border: none;
    outline: none;
  }
  .card {
    position: relative;
    border-radius: 16px;
    transition: 1s ease-in-out;
    &:hover {
      background-color: #f7ece1;
    }
    &-img-top {
      max-width: 100%;
      margin-bottom: 16px;
    }
    &-title {
      margin-bottom: 8px;
    }
    &-text {
      margin: 0;
    }
  }
  .img-fluid {
    aspect-ratio: 2/1;
    height: 100%;
    object-fit: cover;
  }
  .text-truncate {
    @media (min-width: 768px) {
      overflow: auto;
      text-overflow: initial;
      white-space: normal;
    }
  }
</style>
