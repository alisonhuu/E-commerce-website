<template>
  <div class="container">
    <BreadcrumbCom></BreadcrumbCom>
    <router-view></router-view>
  </div>
</template>

<script>
import BreadcrumbCom from '@/components/BreadcrumbCom.vue'

export default {
  components: { BreadcrumbCom }
}

</script>
