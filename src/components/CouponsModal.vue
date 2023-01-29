<template>
   <div class="modal" tabindex="-1" ref="modal">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-primary text-white">
            <h4 class="modal-title" id="exampleModalLabel">優惠券</h4>
            <button type="button" class="btn-close btn-close-white"
                    data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="title">標題</label>
              <input type="text" class="form-control" id="title" v-model="tempCoupon.title"
                    placeholder="請輸入標題">
            </div>
            <div class="mb-3">
              <label for="coupon_code">優惠碼</label>
              <input type="text" class="form-control" id="coupon_code" v-model="tempCoupon.code"
                    placeholder="請輸入優惠碼">
            </div>
            <div class="mb-3">
                  <label for="percent" class="form-label">打折</label>
                  <input type="number" class="form-control" id="percent"
                          placeholder="請輸入折扣百分比" v-model.number="tempCoupon.percent">
            </div>
            <div class="mb-3">
            <label for="due_date">到期日</label>
            <input type="date" class="form-control" id="due_date"
                   v-model="due_date">
          </div>
            <div class="mb-3">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                            :true-value="1"
                            :false-value="0"
                            id="is_enabled"
                            v-model="tempCoupon.is_enabled"
                            >
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary"
                    data-bs-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-outline-primary" @click="$emit('update-coupon', tempCoupon)">確認</button>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'

export default {
  data () {
    return {
      tempCoupon: {
        percent: 100
      },
      due_date: ''
    }
  },
  props: {
    coupon: { }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon
      // 將時間格式改為 YYYY-MM-DD
      if (this.tempCoupon.due_date) {
        // console.log('this.tempCoupon.due_date', this.tempCoupon.due_date)
        const dateAndTime = new Date(this.tempCoupon.due_date * 1000)
          .toISOString().split('T');
        [this.due_date] = dateAndTime // 等同 this.due_date = dateAndTime[0]
        console.log('dateAndTime', dateAndTime)
      }
    },
    due_date () {
      console.log('this.due_date', this.due_date)
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  emits: ['update-coupon'],
  mixins: [modalMixins]
}
</script>
