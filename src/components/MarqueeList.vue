<template>
  <section class="position-relative bg-primary overflow-hidden">
    <ul class="marquee font-mantou display-2 text-white">
      <li class="marquee-item text-white me-6">為喵星人，護台灣！</li>
      <li class="marquee-item text-white me-6">從喵的眼中，看見台灣</li>
      <li class="marquee-item text-white me-6">喵的未來，人的希望</li>
    </ul>
  </section>
</template>

<style lang="scss">
  .marquee {
    position: relative;
    display: flex;
    align-items: center;
    list-style-type: none;
    animation: marquee 15s linear infinite;
    margin: 0;
    &-item {
      width: 100%;
      white-space: nowrap;
      margin-bottom: 6px;
    }
  }
  @keyframes marquee {
    0% {
      left: 100%;
      transform: translateX(0%);
    }

    100% {
      left: 0;
      transform: translateX(-100%);
    }
  }
</style>
