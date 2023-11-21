<script>
import { Modal } from 'bootstrap'
import { mapState } from 'pinia'
import { useActivityStore } from '../stores/ActivityStore'

export default {
  props: ['viewData'],
  data() {
    return {
      modalView: {},
      itemData: {},
      filterData: []
    }
  },
  computed: {
    ...mapState(useActivityStore, ['activitys'])
  },
  watch: {
    viewData() {
      return this.itemData = this.viewData
    },
    itemData() {
      this.filterData = this.activitys.filter(item => item.id !== this.itemData.id)
    }
  },
  methods: {
    toggleModal(item) {
      this.itemData = item
      this.modalView.show()
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
              <div class="col-md-5">
                <div class="mb-mb-0 mb-8">
                  <img src="@img/image3.svg" class="modal-img-theme rounded-4 mb-4" alt="有善環境" v-if="itemData.picture === 'image3'">
                  <img src="@img/image4.svg" class="modal-img-theme rounded-4 mb-4" alt="掃街拜票" v-else-if="itemData.picture === 'image4'">
                  <img src="@img/image5.svg" class="modal-img-theme rounded-4 mb-4" alt="模特兒比拼" v-else-if="itemData.picture === 'image5'">
                  <p class="h11 mb-2">{{ itemData.title }}</p>
                  <div class="d-flex align-items-center">
                    <span class="me-4">分享</span>
                    <a href="#" class="zoom-hover me-4">
                      <img src="@img/facebook.svg" alt="Facebook">
                    </a>
                    <a href="#" class="zoom-hover me-4">
                      <img src="@img/instagram.svg" alt="Instagram">
                    </a>
                    <a href="#" class="zoom-hover me-4">
                      <img src="@img/line.svg" alt="Line">
                    </a>
                    <a href="#" class="zoom-hover">
                      <img src="@img/twitter.svg" alt="Twitter">
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <h5 class="h5 text-primary fw-700 mb-2">{{ itemData.title }}</h5>
                <span class="d-inline-block h11 mb-10">{{ itemData.date }}</span>
                <p class="mb-20">{{ itemData.description }}</p>
                <aside class="bg-info-secondary rounded-2 p-4">
                  <div class="row">
                    <div class="col-12">
                      <h6 class="fw-600 mb-4">更多活動</h6>
                    </div>
                    <div class="col-6" v-for="list in filterData" :key="list.id">
                      <div class="position-relative">
                        <img src="@img/image3.svg" class="modal-img rounded-2 mb-3" alt="有善環境" v-if="list.picture === 'image3'">
                        <img src="@img/image4.svg" class="modal-img rounded-2 mb-3" alt="掃街拜票" v-else-if="list.picture === 'image4'">
                        <img src="@img/image5.svg" class="modal-img rounded-2 mb-3" alt="模特兒比拼" v-else-if="list.picture === 'image5'">
                        <p class="h10 m-0">{{ list.title }}</p>
                        <button type="button" class="btn stretched-link" @click="toggleModal(list)"></button>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  button {
    border: none;
    outline: none;
  }
</style>