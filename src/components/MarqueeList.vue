<template>
  <section class="marquee bg-primary font-mantous h2 text-white">
    <div class="marquee-item text-white">為喵星人，護台灣！從喵的眼中，看見台灣！喵的未來，人的希望！</div>
    <div class="marquee-item text-white">為喵星人，護台灣！從喵的眼中，看見台灣！喵的未來，人的希望！</div>
  </section>
</template>

<style lang="scss" scoped>
  .marquee {
    width: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    &-item {
      margin-bottom: 6px;
      animation: marquee 15s linear infinite;
    }
  }
  @keyframes marquee {
    0% {
      transform: none;
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
