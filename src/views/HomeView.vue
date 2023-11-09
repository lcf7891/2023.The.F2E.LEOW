<script>
import Banner from '@/components/MainVision.vue';
import MarqueeList from '@/components/MarqueeList.vue';
import Advocate from '@/components/AdvocateCom.vue';

export default {
  name: 'HomeView',
  components: {
    Banner,
    MarqueeList,
    Advocate,
  },
};
</script>

<template>
  <Banner />
  <MarqueeList />
  <Advocate />
</template>
