<script>
export default {
  name: 'HomeView',
};
</script>

<template>
  <header>
    <slot name="banner"></slot>
  </header>

  <main>
    <h1 class="font-mantou text-primary-gradient">最新活動</h1>
  </main>

  <footer>
    <slot name="footer"></slot>
  </footer>
</template>
