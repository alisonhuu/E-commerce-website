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
defineRule('engNum', (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true
  }
  if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value)) {
    return '密碼須由英數組成，且不能小於 8 個字元'
  }
  return true
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
