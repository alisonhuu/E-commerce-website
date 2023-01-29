<script>
import emitter from '@/methods/emitter'

export default function (res, title = '更新') {
  if (res.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功`
    })
  } else {
    // 不管訊息是字串、陣列都統一格式
    const message = typeof res.data.message === 'string'
      ? [res.data.message]
      : res.data.message
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、')
    })
  }
}
</script>
