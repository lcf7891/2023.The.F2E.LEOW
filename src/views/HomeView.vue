<script setup>
import Banner from '@/components/HeaderBanner.vue';
import MarqueeList from '@/components/MarqueeList.vue';
</script>

<template>
  <header class="">
    <nav class="navbar navbar-expand-lg position-md-sticky top-0 px-md-6 py-md-4 mb-lg-20 mb-12">
      <section class="container-fluid bg-white curved-3 px-md-6 px-4 py-md-4 py-3">
        <h1 class="text-gradient-hover mb-0">
          <router-link class="navbar-brand d-flex align-items-center text-decoration-none" to="/">
            <img class="me-2" src="@/assets/images/logo.svg" alt="logo" />
            <span class="h7 text-primary fw-700">喵立翰 Miao Li-Han</span>
          </router-link>
        </h1>
        <ul class="navbar-nav d-lg-flex d-none">
          <li class="nav-item">
            <a href="#" class="nav-link link-secondary h9">
              候選人主張
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link link-secondary h9">
              最新活動
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link link-secondary h9">
              政策議題
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link link-secondary h9">
              小額捐款
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link link-secondary h9">
              民眾服務信箱
            </a>
          </li>
        </ul>
        <div class="d-md-flex d-none justify-content-center align-items-center">
            <a href="#" class="p-2">
              <img class="zoom-hover" src="@img/facebook.svg" alt="Facebook">
            </a>
            <a href="#" class="p-2">
              <img class="zoom-hover" src="@img/instagram.svg" alt="Instagram">
            </a>
            <a href="#" class="p-2">
              <img class="zoom-hover" src="@img/youtube.svg" alt="Youtube">
            </a>
        </div>
      </section>
    </nav>
    <Banner />
    <MarqueeList />
  </header>
  <main class="container-fluid">
  </main>
</template>

<style lang="scss" scoped>
  .nav {
    &-item {
      padding: 0 8px;
    }
    &-link {
      position: relative;
      overflow: hidden;
      padding: 8px;
      &::before {
        content: '';
        position: absolute;
        left: -100%;
        bottom: 4px;
        width: 100%;
        height: 2px;
        background-color: #da7d4a;
        transition: .5s ease-in-out;
      }
      &:hover {
        color: #da7d4a !important;
        &::before {
          left: 0;
        }
      }
    }
  }
</style>