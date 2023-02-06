import { defineRule, configure } from 'vee-validate'
import { required, email, min, numeric } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('numeric', numeric)
defineRule('confirmed', (value, [target]) => {
  if (value === target) {
    return true
  }
  return '密碼不符，請再次確認'
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
