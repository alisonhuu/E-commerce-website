<template>
    <nav aria-label="Page navigation example" class="mt-4">
      <ul class="pagination justify-content-center pagination-sm">
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="updatePage(currentPage-1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{ 'active' : page === pages.current_page }">
          <a class="page-link"  href="#" @click.prevent="updatePage(page)">{{ page }}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="updatePage(currentPage+1)" aria-label="Next">
            <span aria-hidden="true" >&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>

<script>
export default {
  data () {
    return {
      currentPage: 1
    }
  },
  props: ['pages'],
  methods: {
    updatePage (page) {
      if (page > 0 && page <= this.pages.total_pages) {
        this.$emit('update-page', page)
        document.documentElement.scrollTop = 0
        this.currentPage = page
      }
    }
  }
}
</script>
