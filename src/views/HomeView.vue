<script setup>
import Banner from '@/components/HeaderBanner.vue';
import MarqueeList from '@/components/MarqueeList.vue';
import Advocate from '@/components/AdvocateContent.vue';
import Events from '@/components/LatestEvents.vue';
import DonateMail from '@/components/DonateMail.vue';
import FooterBanner from '@/components/FooterBanner.vue';
</script>

<template>
 
  <nav class="navbar navbar-expand-lg position-md-sticky top-0 px-md-6 py-md-4 mb-lg-20 mb-12 z-3">
    <section class="container-fluid bg-white rounded-3 px-md-6 px-4 py-md-4 py-3">
      <h1 class="text-gradient-hover mb-0">
        <router-link class="navbar-brand d-flex align-items-center text-decoration-none" to="/">
          <img class="me-2" src="@/assets/images/logo.svg" alt="logo" />
          <span class="h7 text-primary fw-700">喵立翰 Miao Li-Han</span>
        </router-link>
      </h1>
      <ul class="navbar-nav d-lg-flex d-none">
        <li class="nav-item">
          <a href="#advocate" class="nav-link link-secondary h9">
            候選人主張
          </a>
        </li>
        <li class="nav-item">
          <a href="#events" class="nav-link link-secondary h9">
            最新活動
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link link-secondary h9">
            政策議題
          </a>
        </li>
        <li class="nav-item">
          <a href="#donate-mail" class="nav-link link-secondary h9">
            小額捐款
          </a>
        </li>
        <li class="nav-item">
          <a href="#donate-mail" class="nav-link link-secondary h9">
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

  <header>
    <Banner />
    <MarqueeList />
  </header>

  <main>
    <Advocate id="advocate" />
    <Events id="events" />
    <DonateMail id="donate-mail" />
    <FooterBanner />
  </main>

  <footer class="bg-info py-16">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-lg-0 mb-6">
          <p class="d-flex align-items-center h6 fw-700 text-primary text-gradient-hover mb-4">
            <img class="img-ball me-2" src="@img/ball.svg" alt="ball number">
            喵立翰 Miao Li-Han
          </p>
          <div class="d-flex align-items-center mb-4">
            <a href="#" class="bg-white rounded-circle p-2 me-2">
              <img class="zoom-hover" src="@img/facebook.svg" alt="Facebook">
            </a>
            <a href="#" class="bg-white rounded-circle p-2 me-2">
              <img class="zoom-hover" src="@img/instagram.svg" alt="Instagram">
            </a>
            <a href="#" class="bg-white rounded-circle p-2">
              <img class="zoom-hover" src="@img/youtube.svg" alt="Youtube">
            </a>
          </div>
          <p class="h11 text-secondary">&copy; 2023 喵立翰 Miao Li-Han 版權所有</p>
        </div>
        <div class="col-lg-6">
          <h4 class="h7 fw-700 text-secondary mb-4">競選總部</h4>
          <div class="text-secondary">
            <p class="mb-1">辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</p>
            <p class="mb-1">電話：(02) 888-5678</p>
            <p class="mb-1">電子郵件地址：meowoffice@linmeow.tw</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
  .img-ball {
    width: 32px;
    height: 32px;
  }
</style>