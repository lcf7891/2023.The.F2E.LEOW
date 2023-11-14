<script>
import Banner from '@/components/MainSlogan.vue';
import MarqueeList from '@/components/MarqueeList.vue';
import Advocate from '@/components/AdvocateCom.vue';
import Events from '@/components/LatestEvents.vue';
import Issues from '@/components/PolicyIssues.vue';

export default {
  name: 'HomeView',
  components: {
    Banner,
    MarqueeList,
    Advocate,
    Events,
    Issues,
  },
};
</script>

<template>
  <Banner />
  <MarqueeList />
  <Advocate />
  <Events />
  <Issues />
</template>
