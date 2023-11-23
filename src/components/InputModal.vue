<script>
import { v4 as uuidv4 } from 'uuid'
import { Modal } from 'bootstrap'

export default {
  props: {
    outsideState: {
      type: String,
    }
  },
  data() {
    return {
      schemeBtn: [
        {
          id: uuidv4(),
          title: '喵星人之友',
          money:  600,
          numPeople: 9957,
        },
        {
          id: uuidv4(),
          title: '喵星大使',
          money: '6,000',
          numPeople: 2000,
        },
        {
          id: uuidv4(),
          title: '喵星傳奇',
          money: '60,000',
          numPeople: 899,
        }
      ],
      modalView: {},
      inState: false,
      innerPage: true,
    }
  },
  watch: {
    outsideState() {
      if (this.outsideState === '小額捐款') {
        this.inState = true
      } else if (this.outsideState === '民眾服務信箱') {
        this.inState = false
      }
    },
  },
  methods: {
    innerPageSwitch() {
      this.innerPage = !this.innerPage;
    },
    showModal() {
      this.modalView.show()
    },
    hideModal() {
      this.modalView.hide()
    }
  },
  mounted() {
    this.modalView = new Modal(this.$refs.modalRef)
  },
}
</script>

<template>
  <div class="modal" tabindex="-1" ref="modalRef">
    <div class="modal-dialog modal-xl modal-fullscreen-lg-down modal-dialog-scrollable">
      <div class="modal-content rounded-3">
        <div class="modal-header">
          <h4 class="modal-title h5">
            <slot name="title"></slot>
          </h4>
          <button type="button" class="modal-btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7">
                <div class="modal-left-donate mb-md-0 mb-6" :class="[inState ? 'bg-info' : 'bg-info-tertiary']">
                  <div class="col-md-12 col-8">
                    <h5 class="text-primary mb-4" v-if="inState">
                      您的小筆捐款<br>是每隻毛孩未來的大大動力！
                    </h5>
                    <h5 class="text-secondary mb-4" v-else>
                      分享您的想法<br>一同為我們的未來打造更美好！
                    </h5>
                    <p class="d-flex flex-column h6 fw-700" :class="[inState ? 'd-flex' : 'd-none']">
                      <span class="h10">目前小額贊助總金額</span>
                      987,655,873
                    </p>
                  </div>
                  <div class="d-flex justify-content-center col-md-6 col-4 mx-auto" :class="[inState ? 'align-items-center' : 'align-items-bottom']">
                    <img src="@img/image10.svg" class="dotent-img" alt="donate" v-if="inState">
                    <img src="@img/image9.svg" class="mail-img" alt="mail" v-else>
                  </div>
                </div>
              </div>
              <template v-if="innerPage">
                <div class="col-md-5" v-if="inState">
                  <h6 class="h8 mb-4">捐款方案</h6>
                  <button type="button" class="d-flex align-items-center btn btn-outline-primary w-100 rounded-3 py-6 px-3 mb-4" v-for="scheme in schemeBtn" :key="scheme.id">
                    <div class="col-4 text-start">
                      <span class="text-start">
                        {{ scheme.title }}
                      </span>
                    </div>
                    <div class="col-8">
                      <span class="text-secondary me-3">NT$ <i class="h9 fw-700">{{ scheme.money }}</i></span>
                      <span class="h11 text-tertiary">已有 {{ scheme.numPeople }} 人贊助</span>
                    </div>
                  </button>
                  <div class="btn btn-outline-primary w-100 rounded-3 py-6 px-4 mb-4">
                    <label for="CustomAmount" class="form-label text-start w-100">自訂贊助金額</label>
                    <input type="email" class="form-control border-0" id="CustomAmount" placeholder="NT$ 輸入金額">
                  </div>
                  <button type="button" class="btn btn-primary text-white fw-600 w-100 rounded-pill p-4" @click="innerPageSwitch">前往捐款</button>
                </div>
                <div class="col-md-5" v-else>
                  <div class="mb-md-6 mb-4">
                    <label for="inputName" class="form-label h9 mb-2">您的姓名</label>
                    <input type="text" class="form-control border-0 p-4" id="inputName" placeholder="姓名">
                  </div>
                  <div class="mb-md-6 mb-4">
                    <label for="inputEmail" class="form-label h9 mb-2">Email</label>
                    <input type="email" class="form-control border-0 p-4" id="inputEmail" placeholder="email">
                  </div>
                  <div class="mb-md-6 mb-4">
                    <label for="inputPhoneNum" class="form-label h9 mb-2">手機</label>
                    <input type="tel" class="form-control border-0 p-4" id="inputPhoneNum" placeholder="手機號碼">
                  </div>
                  <div class="mb-md-6 mb-4">
                    <label for="inputOpinion" class="form-label h9 mb-2">您的建言</label>
                    <textarea class="form-control" id="inputOpinion" rows="3" placeholder="輸入內容"></textarea>
                  </div>
                  <button type="button" class="btn btn-primary text-white fw-600 w-100 rounded-pill p-4" @click="innerPageSwitch">送出意見</button>
                </div>
              </template>
              <div class="col-md-5 d-flex flex-column justify-content-center align-items-center" v-else>
                <p class="h6 mb-8">
                  感謝您的
                  <span v-if="inState">捐款</span>
                  <span v-else>意見</span>
                </p>
                <img src="@img/done.svg" class="img-fluid mb-8" alt="Finish">
                <button type="button" class="btn btn-info-secondary rounded-pill w-50" data-bs-dismiss="modal">關閉</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-info-tertiary {
    background-color: #E3F8FF;
  }
  .modal-left-donate {
    display: flex;
    border-radius: 24px;
    padding: 16px;
    h5 {
      font-size: 16px;
    }
    @media (min-width: 768px) {
      flex-direction: column;
      padding: 32px;
      h5 {
        font-size: 30px;
      }
    }
    @media (min-width: 992px) {
      padding: 40px;
      h5 {
        font-size: 38px;
      }
    }
  }
  .dotent-img {
    width: 90px;
    height: 95px;
    @media (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
    @media (min-width: 922px) {
      width: 350px;
      height: 350px;
    }
  }
  .mail-img {
    width: 120px;
    height: 90px;
    @media (min-width: 768px) {
      width: 350px;
      height: 220px;
    }
    @media (min-width: 922px) {
      width: 500px;
      height: 370px;
    }
  }
</style>
