<template>
  <footer class="bg-info py-16">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-lg-0 mb-6">
          <router-link class="bgGradient-hover
                        d-flex align-items-center
                        text-primary h3 w-bold
                        text-decoration-none mb-4"
                        to="/">
            <span class="bgGradient rounded-circle text-white h5 py-1 px-3 me-2 mb-0">
              3
            </span>
            喵立翰 Miao Li-Han
          </router-link>
          <ul class="nav mb-4">
            <li class="nav-item bg-white rounded-circle m-1 py-2">
              <a class="nav-link" href="#">
                <img class="img-zoom" src="@/assets/images/icon/fb.png" alt="Facebook">
              </a>
            </li>
            <li class="nav-item bg-white rounded-circle m-1 py-2">
              <a class="nav-link" href="#">
                <img class="img-zoom" src="@/assets/images/icon/ig.png" alt="Instagram">
              </a>
            </li>
            <li class="nav-item bg-white rounded-circle m-1 py-2">
              <a class="nav-link" href="#">
                <img class="img-zoom" src="@/assets/images/icon/yt.png" alt="YouTube">
              </a>
            </li>
          </ul>
          <p class="text-secondary display-6">&copy; 2023 喵立翰 Miao Li-Han 版權所有</p>
        </div>
        <div class="col-lg-6">
          <h4 class="text-secondary h4 fw-bold mb-4">競選總部</h4>
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
