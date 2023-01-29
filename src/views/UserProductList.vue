<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/user/home">首頁</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">{{ $route.name }}</li>
    </ol>
  </nav>
  <h4 class="mt-4">{{ $route.name }}</h4>
  <router-view></router-view>
</template>
