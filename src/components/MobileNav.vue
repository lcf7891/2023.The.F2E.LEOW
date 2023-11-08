<template>
  <ul class="nav justify-content-around">
    <li class="shake">
      <a class="nav-link d-flex flex-column align-items-center text-secondary px-md-4 p-2" href="#">
        <img src="@/assets/images/icon/user.png" alt="主張">
        候選人主張
      </a>
    </li>
    <li class="shake">
      <a class="nav-link d-flex flex-column align-items-center text-secondary px-md-4 p-2" href="#">
        <img src="@/assets/images/icon/lists.png" alt="活動">
        最新活動
      </a>
    </li>
    <li class="shake">
      <a class="nav-link d-flex flex-column align-items-center text-secondary px-md-4 p-2" href="#">
        <img src="@/assets/images/icon/issue.png" alt="議題">
        政策議題
      </a>
    </li>
    <li class="shake">
      <a class="nav-link d-flex flex-column align-items-center text-secondary px-md-4 p-2" href="#">
        <img src="@/assets/images/icon/money.png" alt="捐款">
        小額捐款
      </a>
    </li>
    <li class="shake">
      <a class="nav-link d-flex flex-column align-items-center text-secondary px-md-4 p-2" href="#">
        <img src="@/assets/images/icon/mail.png" alt="信箱">
        服務信箱
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .nav-link {
    font-size: 10px;
    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
      margin-bottom: 2px;
    }
  }
  .shake {
    &:hover {
      animation: shakeRotate .1s ease-in-out infinite;
    }
    @keyframes shakeRotate {
      0% {
        transform: rotate(-6.5deg);
      }
      12.5% {
        transform: rotate(-4.5deg);
      }
      25% {
        transform: rotate(-2.5deg);
      }
      37.5% {
        transform: rotate(-0.5deg);
      }
      50% {
        transform: rotate(-5.5deg);
      }
      62.5% {
        transform: rotate(-3.5deg);
      }
      75% {
        transform: rotate(-1.5deg);
      }
      87.5% {
        transform: rotate(-0.5deg);
      }
      100% {
        transform: rotate(-4deg);
      }
    }
  }
</style>
