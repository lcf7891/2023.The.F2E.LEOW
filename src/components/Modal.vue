<script>
import { Modal } from 'bootstrap'

export default {
  props: {
    showData: {
      type: Object,
    }
  },
  data() {
    return {
      modalView: {},
      tempData: {}
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
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
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
              <slot name="body"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
