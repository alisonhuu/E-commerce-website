<template>
  <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
      </ol>
    </nav>
    <div class="my-5 text-center">
      <span class="h4">{{ $route.name }}</span>
      <span class="h4 font-mirza ms-2">{{this.$route.meta.name}}</span>
    </div>
</template>
