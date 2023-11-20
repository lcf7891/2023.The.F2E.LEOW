<script>
import { Modal } from 'bootstrap'

export default {
  data() {
    return {
      modalView: {},
    }
  },
  methods: {
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
            <div class="row row-cols-lg-2 row-cols-1 g-lg-4">
              <slot name="body"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
