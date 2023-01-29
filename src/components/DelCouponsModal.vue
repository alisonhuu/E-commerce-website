<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-white">
          <h5 class="modal-title" id="exampleModalLabel">刪除產品</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          請確認是否刪除優惠券 <span class="text-danger">{{item.title}}</span>，刪除後將無法復原。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="$emit('del-item', item)">確認</button>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  props: {
    item: {}
  },
  emits: ['del-item'],
  mixins: [modalMixins]
}

</script>
