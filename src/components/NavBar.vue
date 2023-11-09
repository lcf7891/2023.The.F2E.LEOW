<template>
  <nav class="navbar navbar-expand-lg py-3 px-md-6 px-4 my-md-4 mx-md-6">
    <div class="container-fluid px-0">
      <h1 class="bgGradient-hover">
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <img class="me-2" src="@/assets/images/logo.png" alt="logo">
          <span class="h4 text-primary fw-bold mb-0">
            喵立翰 Miao Li-Han
          </span>
        </router-link>
      </h1>

      <ul class="navbar-nav d-lg-flex d-none">
        <li class="nav-item">
          <router-link class="link-hover text-secondary
                        display-5" to="/">
            候選人主張
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="link-hover text-secondary
                        display-5" to="/">
            最新活動
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="link-hover text-secondary
                        display-5" to="/">
            政策議題
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="link-hover text-secondary
                        display-5" to="/">
            小額捐款
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="link-hover text-secondary
                        display-5" to="/">
            民眾服務信箱
          </router-link>
        </li>
      </ul>

      <div class="nav d-md-flex d-none">
          <a class="nav-link p-2" href="#">
            <img class="img-zoom" src="@/assets/images/icon/fb.png" alt="Facebook">
          </a>
          <a class="nav-link p-2" href="#">
            <img class="img-zoom" src="@/assets/images/icon/ig.png" alt="Instagram">
          </a>
          <a class="nav-link p-2" href="#">
            <img class="img-zoom" src="@/assets/images/icon/yt.png" alt="YouTube">
          </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
  .link-hover {
    display: block;
    position: relative;
    overflow: hidden;
    text-decoration: none;
    border: 0;
    padding: 8px;
    &::before {
      content: '';
      position: absolute;
      left: -100%;
      bottom: 4px;
      width: 100%;
      height: 1px;
      background-color: #DA7D4A;
      transition: .5s ease-in-out;
    }
    &:hover {
      color: #DA7D4A !important;
      &::before {
        left: 0;
      }
    }
  }
</style>
