<template>
  <nav class="navbar navbar-expand-lg py-3 px-md-6 px-4 my-md-4 mx-md-6">
    <div class="container-fluid px-0">
      <h1 class="bgGradient-hover">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img class="me-2" src="@/assets/images/logo.png" alt="logo">
          <span class="h4 text-primary fw-bold mb-0">
            喵立翰 Miao Li-Han
          </span>
        </a>
      </h1>

      <ul class="navbar-nav d-lg-flex d-none">
        <li class="nav-item">
          <a class="nav-link link-hover link-secondary display-5" href="#">候選人主張</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-hover link-secondary display-5" href="#">最新活動</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-hover link-secondary display-5" href="#">政策議題</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-hover link-secondary display-5" href="#">小額捐款</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-hover link-secondary display-5" href="#">民眾服務信箱</a>
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
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      left: -100%;
      bottom: 4px;
      width: 100%;
      height: 1px;
      background-color: #334155;
      transition: .5s ease-in-out;
    }
    &:hover::before {
      left: 0;
    }
  }
</style>
