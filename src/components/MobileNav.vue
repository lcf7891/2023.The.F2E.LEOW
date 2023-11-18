<template>
  <nav class="d-lg-none d-block position-sticky bottom-0 bg-white z-3">
    <ul class="nav justify-content-around">
      <li class="shake">
        <a href="#advocate" class="nav-link text-secondary px-md-4 p-2">
          <img src="@img/user.svg" alt="主張">
          候選人主張
        </a>
      </li>
      <li class="shake">
        <a href="#events" class="nav-link text-secondary px-md-4 p-2">
          <img src="@img/lists.svg" alt="活動">
          最新活動
        </a>
      </li>
      <li class="shake">
        <a href="#policy" class="nav-link text-secondary px-md-4 p-2">
          <img src="@img/issue.svg" alt="議題">
          政策議題
        </a>
      </li>
      <li class="shake">
        <a href="#donate-mail" class="nav-link text-secondary px-md-4 p-2">
          <img src="@img/money.svg" alt="捐款">
          小額捐款
        </a>
      </li>
      <li class="shake">
        <a href="#donate-mail" class="nav-link text-secondary px-md-4 p-2">
          <img src="@img/mail.svg" alt="信箱">
          服務信箱
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .nav-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
    img {
      width: 24px;
      height: 24px;
      object-fit: cover;
      margin-bottom: 2px;
    }
    &:hover {
      color: #DA7D4A !important;
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